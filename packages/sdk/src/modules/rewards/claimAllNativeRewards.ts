import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import { ModuleContext } from '../core/BaseModule';
import { GaspError } from '../../error/GaspError';

export interface ClaimAllNativeRewardsParams {
  account: string;
}

export interface ClaimAllNativeRewardsResult extends FeeMetadata {
  pool: string;
  amount: string;
}

export const claimAllNativeRewards = async (
  { api, sdk }: ModuleContext,
  { account }: ClaimAllNativeRewardsParams,
  signer: Signer
): Promise<ClaimAllNativeRewardsResult[]> => {
  const rewardsInfo = await api.query.proofOfStake.rewardsInfo
    .entries(account)
    .catch((e) => {
      throw new GaspError(
        'Unable to fetch rewards info',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

  return Promise.all(
    rewardsInfo.map(([[, id]]) =>
      sdk.rewards
        .claimNativeRewardsForPool({ pool: id.toString(), account }, signer)
        .execute()
    )
  ).catch((e) => {

    throw new GaspError(
      'Transaction error',
      GaspError.error.TRANSACTION_ERROR,
      e
    );
  });
};
