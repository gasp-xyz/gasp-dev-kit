import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';
import {
  ActivateLiquidityReserveSource,
  ReserveSource,
} from '../core/ReserveSource';

export interface ActivateNativeRewardsLiquidityParams {
  asset: string;
  account: string;
  amount: string;
  balanceFrom?: ActivateLiquidityReserveSource;
}

export interface ActivateNativeRewardsLiquidityResult extends FeeMetadata {
  amount: string;
  asset: string;
}

export const activateNativeRewardsLiquidity = (
  { api }: ModuleContext,
  {
    asset,
    account,
    amount,
    balanceFrom = ReserveSource.AvailableBalance,
  }: ActivateNativeRewardsLiquidityParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<ActivateNativeRewardsLiquidityResult> => {
  const extrinsic = api.tx.proofOfStake.activateLiquidityForNativeRewards(
    asset,
    amount,
    balanceFrom
  );

  return submitHandler<
    ActivateNativeRewardsLiquidityResult,
    typeof api.events.proofOfStake.LiquidityActivated
  >({
    extrinsic,
    signer,
    account,
    parseResponse: (data) => ({
      asset: data[1].toString(),
      amount: data[2].toString(),
    }),
    eventType: api.events.proofOfStake.LiquidityActivated,
  });
};
