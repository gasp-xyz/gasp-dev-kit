import type { ISubmittableResult } from '@polkadot/types/types';
import type { ExtrinsicStatus } from '@polkadot/types/interfaces';
import type { GenericExtrinsic } from '@polkadot/types';

import { TxSignParams } from '../modules';

export interface ExtrinsicSubscriptionData extends Partial<ISubmittableResult> {
  status: ExtrinsicStatus;
}

export interface Signer {
  sign: (params: TxSignParams) => Promise<GenericExtrinsic>;
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
