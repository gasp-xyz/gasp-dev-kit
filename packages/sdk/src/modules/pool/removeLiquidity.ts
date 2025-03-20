import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';
import { Signer } from '../../types/common';

export interface RemoveLiquidityParams {
  pool: string;
  amount: string;
  minFirstAssetAmount: string;
  minSecondAssetAmount: string;
  account: string;
}

export interface RemoveLiquidityResult extends FeeMetadata {
  pool: string;
  removedLpAmount: string;
  mintedFirstAssetAmount: string;
  mintedSecondAssetAmount: string;
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
      removedLpAmount: data.burnedAmount.toString(),
      mintedFirstAssetAmount: data.amounts[0].toString(),
      mintedSecondAssetAmount: data.amounts[1].toString(),
    }),
    eventType: api.events.market.LiquidityBurned,
  });
};
