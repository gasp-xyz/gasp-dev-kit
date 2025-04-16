import { SignerConfig, Signer } from '../../types/common';
import { Wallet } from 'ethers';
import { ApiPromise } from '@polkadot/api';
import { hexToU8a } from '@polkadot/util';
import { BaseEIP712Signer } from './BaseEIP712Signer';
import { Logger } from '../core/Logger';
import { TxSignParams } from '../core/Tx';

export class EthersSigner extends BaseEIP712Signer implements Signer {
  private wallet: Wallet;

  constructor(
    api: ApiPromise,
    logger: Logger,
    pk: string,
    readonly config?: SignerConfig
  ) {
    const wallet = new Wallet(pk);

    super(api, logger, wallet.address, config);

    this.wallet = wallet;
  }

  async sign({ extrinsic }: TxSignParams) {
    this.logger.debug('Signing transaction', extrinsic.hash.toHex());

    const tx = this.api.createType('Extrinsic', {
      method: extrinsic.method,
      version: extrinsic.version,
    });

    const { signature, payload } = await this.createSignature(
      tx,
      this.signTypedData
    );

    const createdSignature = this.api.createType(
      'EthereumSignature',
      hexToU8a(signature)
    );

    tx.addSignature(this.wallet.address, createdSignature, payload.toHex());

    return tx;
  }

  private async signTypedData(data: any): Promise<string> {
    const { domain, types, message } = data;

    const typesForEthers = { ...types };
    if (typesForEthers.EIP712Domain) {
      delete typesForEthers.EIP712Domain;
    }

    const signature = await this.wallet.signTypedData(
      domain,
      typesForEthers,
      message
    );
    return signature;
  }
}
