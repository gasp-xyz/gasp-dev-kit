import { Signer } from '../../types/common';
import type { KeyringPair } from '@polkadot/keyring/types';
import { TxSignParams } from '../core/Tx';
import { SignerOptions } from '@polkadot/api/types';

export class KeyringSigner implements Signer {
  private constructor(
    private keypair: KeyringPair,
    public readonly config?: SignerOptions
  ) {}

  async sign({ extrinsic }: TxSignParams) {
    return extrinsic.signAsync(this.keypair);
  }

  static create(keypair: KeyringPair, config?: SignerOptions): KeyringSigner {
    return new KeyringSigner(keypair, config);
  }
}
