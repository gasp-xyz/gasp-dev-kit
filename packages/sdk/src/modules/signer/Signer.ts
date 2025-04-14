import { KeyringSigner } from './KeyringSigner';
import { BaseModule } from '../core/BaseModule';
import { EthersSigner } from './EthersSigner';
import { createSigner } from './createSigner';
import { WagmiSigner } from './WagmiSigner';

export class SignerModule extends BaseModule {
  readonly keyring = KeyringSigner;
  readonly wagmi = createSigner(
    WagmiSigner,
    this.context.api,
    this.context.logger
  );
  readonly ethers = createSigner(
    EthersSigner,
    this.context.api,
    this.context.logger
  );
}
