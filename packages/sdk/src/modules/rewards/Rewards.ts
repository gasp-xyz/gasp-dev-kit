import { Signer } from '../../types/common';
import { BaseModule } from '../core/BaseModule';
import {
  ClaimAllNativeRewardsParams,
  claimAllNativeRewards,
} from './claimAllNativeRewards';
import {
  ClaimNativeRewardsForPoolParams,
  claimNativeRewardsForPool,
} from './claimNativeRewardsForPool';

export class RewardsModule extends BaseModule {
  /**
   * Claims native rewards for a specific pool
   *
   * @param params - Configuration object containing claim details.
   * @param params.pool - The pool id to claim rewards for.
   * @param params.account - The account address that will be credited for the claim.
   *
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   * @returns A promise that resolves with the amount of rewards claimed.
   *
   * @example
   * ```typescript
   * const pool = '120';
   * const account = '0x123';
   *
   * const result = await claimNativeRewardsForPool(
   * { pool, account },
   * signer
   * );
   * ```
   */
  claimNativeRewardsForPool(
    params: ClaimNativeRewardsForPoolParams,
    signer?: Signer
  ) {
    return claimNativeRewardsForPool(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }

  /**
   * Claims all native rewards for the account
   *
   * @param params - Configuration object containing claim details.
   * @param params.account - The account address that will be credited for the claim.
   *
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the amount of rewards claimed.
   *
   * @example
   * ```typescript
   * const account = '0x123';
   *
   * const result = await claimAllNativeRewards(
   *  { account },
   *  signer
   * );
   * ```
   */
  async claimAllNativeRewards(
    params: ClaimAllNativeRewardsParams,
    signer?: Signer
  ) {
    return claimAllNativeRewards(this.context, params, this.getSigner(signer));
  }
}
