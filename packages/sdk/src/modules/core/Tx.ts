import { ApiPromise } from '@polkadot/api';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { GenericExtrinsic } from '@polkadot/types';
import { u8aToHex, hexToU8a } from '@polkadot/util';
import type { SignatureOptions, IExtrinsicEra } from '@polkadot/types/types';
import { ExtrinsicSubscriptionData, Signer } from '../../types/common';
import { FrameSystemEventRecord } from '@polkadot/types/lookup';
import { Call } from '@polkadot/types/interfaces';
import { GaspError } from '../../error/GaspError';
import { ExtrinsicTracker } from './ExtrinsicTracker';
import { Logger } from './Logger';
import { FeeInfo } from './Fee';

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

    const tx = this.api.createType('Extrinsic', {
      method: extrinsic.method,
      version: extrinsic.version,
    });

    const { signature, payload } = await this.signTypedData(tx);

    const createdSignature = this.api.createType(
      'EthereumSignature',
      hexToU8a(signature)
    );

    tx.addSignature(this.account, createdSignature, payload.toHex());

    return tx;
  }

  async send(tx: GenericExtrinsic) {
    return this.submitAndWatchExtrinsic(tx);
  }

  async paymentInfo({ extrinsic }: TxSignParams): Promise<FeeInfo> {
    const paymentInfo = await extrinsic.paymentInfo(this.account)

    const amount = paymentInfo.partialFee.toString();

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

  private async signTypedData(tx: GenericExtrinsic) {
    const eraOptions = await this.buildEraOptions();
    const payload = tx.inner.signature.createPayload(
      tx.method as Call,
      eraOptions
    );

    const raw = payload.toU8a({ method: true });

    const result = await this.api.rpc.metamask
      .get_eip712_sign_data(tx.toHex().slice(2))
      .catch((e) => {
        throw new GaspError(
          'Failed to get EIP712 sign data',
          GaspError.error.TRANSACTION_ERROR,
          e
        );
      });

    const data = JSON.parse(result.toString());
    data.message.tx = u8aToHex(raw).slice(2);
    data.account = this.account;

    const signature = await this.signer.signTypedData(data).catch((e) => {
      throw new GaspError(
        'Failed to sign data',
        GaspError.error.TRANSACTION_ERROR,
        e
      );
    });

    return {
      signature,
      payload,
    };
  }

  private async buildEraOptions() {
    const { header, mortalLength, nonce } = await this.signingInfo;

    if (this.signOptions?.era && !this.signOptions.blockHash) {
      throw new GaspError(
        'Era option requires blockHash',
        GaspError.error.TRANSACTION_ERROR
      );
    }

    if (!header) {
      const { era, blockHash, ...config } = this.signOptions;

      if (era) {
        return this.buildSignOptions({ nonce, ...config });
      }

      return this.buildSignOptions({ nonce, blockHash, ...config });
    }

    return this.buildSignOptions({
      blockHash: header.hash,
      era: this.api.registry.createTypeUnsafe('ExtrinsicEra', [
        {
          current: header.number,
          period: this.signOptions?.era || mortalLength,
        },
      ]) as IExtrinsicEra,
      nonce,
      ...this.signOptions,
    });
  }

  private buildSignOptions(
    options: Omit<Partial<SignatureOptions>, 'nonce'> & {
      nonce: SignatureOptions['nonce'];
    }
  ): SignatureOptions {
    const config = {
      blockHash: this.api.genesisHash,
      genesisHash: this.api.genesisHash,
      runtimeVersion: this.api.runtimeVersion,
      signedExtensions: this.api.registry.signedExtensions,
      ...options,
    };

    return config;
  }

  private get signingInfo() {
    return this.api.derive.tx.signingInfo(this.account).catch((e) => {
      throw new GaspError('Failed to get signing info', e);
    });
  }

  private get signOptions(): Partial<SignatureOptions> {
    if (!this.signer.config) {
      return {};
    }

    const { era, ...config } = this.signer.config;

    return era
      ? {
          ...config,
          era: this.api.registry.createTypeUnsafe('ExtrinsicEra', [
            {
              current: this.api.genesisHash,
              period: this.signer.config.era,
            },
          ]) as IExtrinsicEra,
        }
      : config;
  }
}
