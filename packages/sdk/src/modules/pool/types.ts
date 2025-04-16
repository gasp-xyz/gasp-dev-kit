import BN from 'bn.js';

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
  firstAssetAmount: BN;
  secondAsset: string;
  secondAssetAmount: BN;
  id: string;
  isPromoted: boolean;
}

export interface InvestedPool extends Pool {
  activatedTokens: BN;
  nonActivatedTokens: BN;
}
