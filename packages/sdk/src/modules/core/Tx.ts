import { ApiPromise } from '@polkadot/api';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { GenericExtrinsic } from '@polkadot/types';
import { ExtrinsicSubscriptionData, Signer } from '../../types/common';
import { FrameSystemEventRecord } from '@polkadot/types/lookup';
import { GaspError } from '../../error/GaspError';
import { ExtrinsicTracker } from './ExtrinsicTracker';
import { Logger } from './Logger';
import { FeeInfo } from './Fee';
import BN from 'bn.js';

export interface TxOptions {
  statusCallback?: (data: ExtrinsicSubscriptionData) => void;
  extrinsicStatus?: (events: FrameSystemEventRecord[]) => void;
  timeoutMs?: number;
}

export interface TxError {
  type: string;
  details: string;
}

export interface TxSignParams {
  extrinsic: SubmittableExtrinsic<'promise'>;
}

export class Tx {
  constructor(
    private api: ApiPromise,
    private logger: Logger,
    private signer: Signer,
    private account: string,
    private options?: TxOptions
  ) {}

  async signAndSend(params: TxSignParams): Promise<FrameSystemEventRecord[]> {
    const signed = await this.sign(params);
    this.logger.debug('Sending transaction', signed.hash.toHex());
    return this.send(signed);
  }

  async sign({ extrinsic }: TxSignParams): Promise<GenericExtrinsic> {
    this.logger.debug('Signing transaction', extrinsic.hash.toHex());
    return this.signer.sign({ extrinsic });
  }

  async send(tx: GenericExtrinsic) {
    return this.submitAndWatchExtrinsic(tx);
  }

  async paymentInfo({ extrinsic }: TxSignParams): Promise<FeeInfo> {
    const paymentInfo = await extrinsic.paymentInfo(this.account);

    const amount = new BN(paymentInfo.partialFee);

    return {
      amount,
      // TODO
      asset: '0',
    };
  }

  private async submitAndWatchExtrinsic(
    tx: GenericExtrinsic
  ): Promise<FrameSystemEventRecord[]> {
    this.logger.debug('Tracking transaction: ', tx.hash.toHex());

    // eslint-disable-next-line no-async-promise-executor
    return new Promise<FrameSystemEventRecord[]>(async (resolve, reject) => {
      try {
        const unsub = await this.api.rpc.author.submitAndWatchExtrinsic(
          tx,
          async (status) => {
            try {
              this.logger.debug('Transaction status: ', status.toString());

              const tracker = new ExtrinsicTracker(
                this.api,
                this.logger,
                tx,
                status,
                this.options
              );

              const events = await tracker.track().catch((e) => {
                this.logger.error('Error tracking transaction: ', e);

                throw new GaspError(
                  'Failed to track transaction',
                  GaspError.error.TRANSACTION_ERROR,
                  e
                );
              });

              if (events) {
                resolve(events);
                unsub();
              }
            } catch (e) {
              unsub();
              reject(e);
            }
          }
        );
      } catch (error) {
        reject(
          new GaspError(
            'Failed to submit and watch extrinsic',
            GaspError.error.TRANSACTION_ERROR,
            error
          )
        );
      }
    });
  }
}
