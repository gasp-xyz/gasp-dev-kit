import { GaspError } from '../../error/GaspError';
import { Call } from '@polkadot/types/interfaces';
import { GenericExtrinsic } from '@polkadot/types';
import { ApiPromise } from '@polkadot/api';
import { u8aToHex } from '@polkadot/util';
import { IExtrinsicEra, SignatureOptions } from '@polkadot/types/types';
import { SignerConfig } from '../../types/common';
import { Logger } from '../core/Logger';

export class BaseEIP712Signer {
  constructor(
    protected readonly api: ApiPromise,
    protected readonly logger: Logger,
    protected readonly address: string,
    protected readonly config?: SignerConfig,
  ) {}

  protected async createSignature(
    tx: GenericExtrinsic,
    signFn: (data: any) => Promise<string>
  ) {
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
    data.account = this.address;

    const signature = await signFn(data).catch((e) => {
      this.logger.debug('Error signing data', e);
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
    return this.api.derive.tx.signingInfo(this.address).catch((e) => {
      throw new GaspError('Failed to get signing info', e);
    });
  }

  private get signOptions(): Partial<SignatureOptions> {
    if (!this.config) {
      return {};
    }

    const { era, ...config } = this.config;

    return era
      ? {
          ...config,
          era: this.api.registry.createTypeUnsafe('ExtrinsicEra', [
            {
              current: this.api.genesisHash,
              period: this.config.era,
            },
          ]) as IExtrinsicEra,
        }
      : config;
  }
}
