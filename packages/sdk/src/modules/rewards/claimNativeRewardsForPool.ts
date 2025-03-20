import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';

export interface ClaimNativeRewardsForPoolParams {
  pool: string;
  account: string;
}

export interface ClaimNativeRewardsForPoolResult extends FeeMetadata {
  pool: string;
  amount: string;
}

export const claimNativeRewardsForPool = (
  { api }: ModuleContext,
  { pool, account }: ClaimNativeRewardsForPoolParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<ClaimNativeRewardsForPoolResult> => {
  const extrinsic = api.tx.proofOfStake.claimNativeRewards(pool);

  return submitHandler<
    ClaimNativeRewardsForPoolResult,
    typeof api.events.proofOfStake.RewardsClaimed
  >({
    extrinsic,
    signer,
    account,
    parseResponse: ([, id, amount]) => ({
      pool: id.toString(),
      amount: amount.toString(),
    }),
    eventType: api.events.proofOfStake.RewardsClaimed,
  });
};
