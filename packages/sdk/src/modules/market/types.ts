import { PoolType } from "../pool";

export interface AtomicSwap {
  poolId: string;
  kind: PoolType;
  assetIn: string;
  assetOut: string;
  amountIn: string;
  amountOut: string;
}
