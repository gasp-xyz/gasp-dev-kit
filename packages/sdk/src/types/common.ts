import type { ISubmittableResult } from '@polkadot/types/types';

import type { ExtrinsicStatus } from '@polkadot/types/interfaces';

export interface ExtrinsicSubscriptionData extends Partial<ISubmittableResult> {
  status: ExtrinsicStatus;
}

export interface Signer {
  signTypedData: (data: any) => Promise<string>;
  config?: SignerConfig;
}

interface SignerConfigBase {
  genesisHash?: string;
  nonce?: number;
}

interface SignerConfigWithEra {
  era: number;
  blockHash: string;
}

interface SignerConfigWithoutEra {
  blockHash?: string;
  era?: never;
}

export type SignerConfig = SignerConfigBase &
  (SignerConfigWithEra | SignerConfigWithoutEra);
