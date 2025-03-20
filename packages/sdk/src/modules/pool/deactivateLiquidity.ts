import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import { ModuleContext, SubmitHandler, SubmittableTx } from '../core/BaseModule';

export interface DeactivateNativeRewardsLiquidityParams {
  asset: string;
  account: string;
  amount: string;
}

export interface DeactivateNativeRewardsLiquidityResult extends FeeMetadata {
  amount: string;
  asset: string;
}

export const deactivateNativeRewardsLiquidity = (
  { api }: ModuleContext,
  { asset, account, amount }: DeactivateNativeRewardsLiquidityParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<DeactivateNativeRewardsLiquidityResult> => {
  const extrinsic = api.tx.proofOfStake.deactivateLiquidityForNativeRewards(
    asset,
    amount
  );

  return submitHandler<
    DeactivateNativeRewardsLiquidityResult,
    typeof api.events.proofOfStake.LiquidityDeactivated
  >({
    extrinsic,
    signer,
    account,
    parseResponse: (data) => ({
      asset: data[1].toString(),
      amount: data[2].toString(),
    }),
    eventType: api.events.proofOfStake.LiquidityDeactivated,
  });
};
