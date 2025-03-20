import { Signer, SignerConfig } from '../../types/common';
import { Wallet } from 'ethers';

export class EthersSigner implements Signer {
  private wallet: Wallet;

  constructor(pk: string, public readonly config?: SignerConfig) {
    this.wallet = new Wallet(pk);
  }

  async signTypedData(data: any): Promise<string> {
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

  static create(pk: string, config?: SignerConfig): EthersSigner {
    return new EthersSigner(pk, config);
  }
}
