import { SignerConfig, Signer } from '../../types/common';
import { ApiPromise } from '@polkadot/api';
import { hexToU8a } from '@polkadot/util';
import { BaseEIP712Signer } from './BaseEIP712Signer';
import { Logger } from '../core/Logger';
import { TxSignParams } from '../core/Tx';
import { Config, signTypedData as _signTypedData } from '@wagmi/core';

export class WagmiSigner extends BaseEIP712Signer implements Signer {
  constructor(
    api: ApiPromise,
    logger: Logger,
    private readonly wagmiConfig: Config,
    address: string,
    config?: SignerConfig
  ) {
    super(api, logger, address, config);
  }

  async sign({ extrinsic }: TxSignParams) {
    this.logger.debug('Signing transaction', extrinsic.hash.toHex());

    const tx = this.api.createType('Extrinsic', {
      method: extrinsic.method,
      version: extrinsic.version,
    });

    const { signature, payload } = await this.createSignature(
      tx,
      this.signTypedData.bind(this)
    );

    const createdSignature = this.api.createType(
      'EthereumSignature',
      hexToU8a(signature)
    );

    tx.addSignature(this.address, createdSignature, payload.toHex());

    return tx;
  }

  private async signTypedData(data: any): Promise<string> {
    const signature = await _signTypedData(this.wagmiConfig, data);
    return signature;
  }
}
