import { PoolType } from "../pool";
import BN from "bn.js";

export interface AtomicSwap {
  poolId: string;
  kind: PoolType;
  assetIn: string;
  assetOut: string;
  amountIn: BN;
  amountOut: BN;
}
