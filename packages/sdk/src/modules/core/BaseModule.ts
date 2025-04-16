import { ApiPromise } from '@polkadot/api';
import { Gasp } from '../../instance';
import { Logger } from './Logger';
import { Signer } from '../../types/common';
import { FrameSystemEventRecord } from '@polkadot/types/lookup';
import { Event, EventType, ParsedEventData } from './Event';
import { Fee, FeeInfo } from './Fee';
import { TxError } from './Tx';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { GaspError } from '../../error/GaspError';

export interface ModuleContext {
  sdk: Gasp;
  api: ApiPromise;
  logger: Logger;
}

export interface SubmittableTx<T> {
  execute: () => Promise<Omit<T, 'fee'> & FeeEntity>;
  paymentInfo: () => Promise<FeeInfo>;
}

type ResponseParser<E extends EventType, R> = (event: ParsedEventData<E>) => R;

export interface SubmitHandlerArgs<T extends FeeEntity, E extends EventType> {
  /**
   * The extrinsic to be submitted.
   */
  extrinsic: SubmittableExtrinsic<'promise'>;
  /**
   * The signer to be used for the transaction.
   */
  signer: Signer;
  /**
   * The account address from which the transaction is sent.
   */
  account: string;
  /**
   * The type of event expected from the transaction.
   */
  eventType: EventType;
  /**
   * A function to parse the event data from the response.
   */
  parseResponse: ResponseParser<E, Omit<T, 'fee'>>;
  /**
   * An optional function for performing validations before submission.
   */
  preSubmitValidation?: () => Promise<void>;
}

export type SubmitHandler = <T extends FeeEntity, E extends EventType>(
  args: SubmitHandlerArgs<T, E>
) => SubmittableTx<T>;

type FeeEntity = { fee: FeeInfo };

/**
 * A response handler function that processes blockchain events and returns
 * a parsed response object containing both the response data and fee info.
 *
 * @param events - Array of blockchain event records.
 * @param eventType - The type of event to search for.
 * @param parseResponse - Function to parse the event data.
 *
 * @returns Parsed response merged with fee information.
 */
export type ResponseHandler = <T extends FeeEntity, E extends EventType>(
  events: FrameSystemEventRecord[],
  eventType: E,
  parseResponse: ResponseParser<E, Omit<T, 'fee'>>
) => Promise<Omit<T, 'fee'> & FeeEntity>;

export class BaseModule {
  protected readonly context: ModuleContext;
  protected readonly signer?: Signer;

  constructor(sdk: Gasp, api: ApiPromise, logger: Logger) {
    this.context = {
      sdk,
      api,
      logger,
    };
  }

  protected getSigner(customSigner?: Signer): Signer {
    const config = customSigner ?? this.context.sdk.signer;

    if (!config) {
      throw new GaspError('No signer provided', GaspError.error.ARGS_ERROR);
    }

    return config;
  }

  protected submitTx: SubmitHandler = ({
    extrinsic,
    signer,
    account,
    parseResponse,
    preSubmitValidation,
    eventType,
  }) => {
    const execute = async () => {
      if (preSubmitValidation) {
        try {
          await preSubmitValidation();
        } catch (e) {
          this.context.logger.error(`Tx pre-submit validation error`, e);
          return Promise.reject(e);
        }
      }

      const tx = await this.context.sdk.tx.create({
        account,
        signer: this.getSigner(signer),
      });

      const events = await tx.signAndSend({ extrinsic }).catch((e) => {
        this.context.logger.error(`Error executing transaction: ${e.message}`);

        throw new GaspError(
          'Transaction error',
          GaspError.error.TRANSACTION_ERROR,
          e
        );
      });

      return this.handleResponse(events, eventType, parseResponse);
    };

    const paymentInfo = async () => {
      const tx = await this.context.sdk.tx.create({
        account,
        signer: this.getSigner(signer),
      });

      const feeInfo = await tx.paymentInfo({ extrinsic });

      return feeInfo;
    };

    return {
      execute,
      paymentInfo,
    };
  };

  protected handleResponse: ResponseHandler = async (
    events,
    eventType,
    parseResponse
  ) => {
    const fee = Fee.parseFromEvent(
      Event.find(
        events,
        this.context.api.events.transactionPayment.TransactionFeePaid
      )
    );

    if (!fee) {
      this.context.logger.error('Unable to get FeeInfo');

      throw new GaspError(
        'Unable to get FeeInfo',
        GaspError.error.TRANSACTION_ERROR
      );
    }

    const _error = Event.findAndParseData(
      events,
      this.context.api.events.system.ExtrinsicFailed
    );

    if (_error) {
      const error = this.context.api.registry.findMetaError(
        _error.dispatchError.asModule
      );

      const errData: TxError = {
        type: error.name,
        details: error.docs.join(' '),
      };

      throw new GaspError(
        'Transaction failed',
        GaspError.error.TRANSACTION_ERROR,
        errData
      );
    }

    const data = Event.findAndParseData(events, eventType);

    if (!data) {
      this.context.logger.error('Unable to get tx info');

      throw new GaspError(
        'Unable to get tx info',
        GaspError.error.TRANSACTION_ERROR
      );
    }

    return {
      fee,
      ...parseResponse(data),
    };
  };
}
