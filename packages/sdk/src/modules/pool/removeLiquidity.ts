import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';
import { Signer } from '../../types/common';
import BN from 'bn.js';

export interface RemoveLiquidityParams {
  pool: string;
  amount: string;
  minFirstAssetAmount: BN | string;
  minSecondAssetAmount: BN | string;
  account: string;
}

export interface RemoveLiquidityResult extends FeeMetadata {
  pool: string;
  removedLpAmount: BN;
  mintedFirstAssetAmount: BN;
  mintedSecondAssetAmount: BN;
}

export const removeLiquidity = (
  { api }: ModuleContext,
  {
    pool,
    amount,
    minFirstAssetAmount,
    minSecondAssetAmount,
    account,
  }: RemoveLiquidityParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<RemoveLiquidityResult> => {
  const extrinsic = api.tx.market.burnLiquidity(
    pool,
    amount,
    minFirstAssetAmount,
    minSecondAssetAmount
  );

  return submitHandler<
    RemoveLiquidityResult,
    typeof api.events.market.LiquidityBurned
  >({
    extrinsic,
    signer,
    account,
    parseResponse: (data) => ({
      pool: data.poolId.toString(),
      removedLpAmount: new BN(data.burnedAmount),
      mintedFirstAssetAmount: new BN(data.amounts[0]),
      mintedSecondAssetAmount: new BN(data.amounts[1]),
    }),
    eventType: api.events.market.LiquidityBurned,
  });
};
