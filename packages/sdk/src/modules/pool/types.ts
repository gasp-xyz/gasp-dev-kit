import { BN } from '@polkadot/util';

export interface PoolTvl {
  pool: string;
  tvl: Array<[string, BN]>;
}

export enum PoolType {
  Xyk = 'Xyk',
  StableSwap = 'StableSwap',
}

export interface Pool {
  firstAsset: string;
  firstAssetAmount: string;
  secondAsset: string;
  secondAssetAmount: string;
  id: string;
  isPromoted: boolean;
}

export interface InvestedPool extends Pool {
  activatedTokens: string;
  nonActivatedTokens: string;
}
