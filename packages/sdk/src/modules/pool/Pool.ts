import {
  ActivateNativeRewardsLiquidityParams,
  activateNativeRewardsLiquidity,
} from './activateLiquidity';
import { Signer } from '../../types/common';
import { BaseModule } from '../core/BaseModule';
import {
  DeactivateNativeRewardsLiquidityParams,
  deactivateNativeRewardsLiquidity,
} from './deactivateLiquidity';
import { GetPoolTvlParams, getTvl } from './getTvl';
import { CreatePoolParams, createPool } from './createPool';
import { getPools } from './getPools';
import { GetPoolParams, getPool } from './getPool';
import { AddLiquidityParams, addLiquidity } from './addLiquidity';
import { RemoveLiquidityParams, removeLiquidity } from './removeLiquidity';
import { GetPoolByAssetsParams, getPoolByAssets } from './getPoolByAssets';
import { GetInvestedPoolsParams, getInvestedPools } from './getInvestedPools';

export class PoolModule extends BaseModule {
  /**
   * Activates liquidity for native rewards on a given asset and account.
   *
   * @param params - Configuration object containing activation details.
   * @param params.asset - The LP asset id to activate rewards for.
   * @param params.account - The account address that will be credited for the activation.
   * @param params.amount - The amount of the LP assets activate.
   * @param params.balanceFrom - Optional. The balance source to use for funding the activation.
   *                              Defaults to `ReserveSource.AvailableBalance`.
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the result of the signed transaction submission.
   *
   * @example
   * ```typescript
   * const asset = '120';
   * const account = '0x123';
   * const amount = '100';
   *
   * const result = await activateNativeRewardsLiquidity(
   *  { asset, account, amount },
   *  signer
   * );
   *  ```
   */
  activateNativeRewardsLiquidity(
    params: ActivateNativeRewardsLiquidityParams,
    signer?: Signer
  ) {
    return activateNativeRewardsLiquidity(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }

  /**
   * Deactivates liquidity for native rewards on a given asset and account.
   *
   * @param params - Configuration object containing deactivation details.
   * @param params.asset - The LP asset id to deactivate rewards for.
   * @param params.account - The account address that will be debited for the deactivation.
   * @param params.amount - The amount of the LP assets to deactivate.
   *
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the result of the signed transaction submission.
   *
   * @example
   * ```typescript
   * const asset = '120';
   * const account = '0x123';
   * const amount = '100';
   *
   * const result = await deactivateNativeRewardsLiquidity(
   *  { asset, account, amount },
   *  signer
   * );
   *
   * ```
   * */
  deactivateNativeRewardsLiquidity(
    params: DeactivateNativeRewardsLiquidityParams,
    signer?: Signer
  ) {
    return deactivateNativeRewardsLiquidity(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }

  /**
   * Retrieves the TVL for the specified pool.
   *
   * @param params - The parameters for the TVL retrieval.
   * @param params.pool - The pool for which to retrieve the TVL.
   *
   * @returns A promise that resolves with a PoolTvl object.
   *
   * @example
   * ```typescript
   * const tvl = await gasp.getTvl({ pool: '160' }).catch(console.error);
   * console.log(tvl);
   * ```
   * */
  async getTvl(params: GetPoolTvlParams) {
    return getTvl(this.context, params);
  }

  /**
   * Creates a new pool if it does not already exist.
   * @param params - The parameters for the pool creation.
   * @param params.type - The type of pool to create.
   * @param params.firstAssetId - The first asset id in the pool.
   * @param params.firstAssetAmount - The amount of the first asset to add to the pool.
   * @param params.secondAssetId - The second asset id in the pool.
   * @param params.secondAssetAmount - The amount of the second asset to add to the pool.
   * @param params.account - The account address that will be debited for the pool creation.
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the result of the signed transaction submission.
   *
   * @example
   * ```typescript
   * const result = await gasp.createPool(
   *  {
   *    type: PoolType.Xyk,
   *    firstAssetId: '120',
   *    firstAssetAmount: '100',
   *    secondAssetId: '110',
   *    secondAssetAmount: '100',
   *    account: '0x123',
   *  },
   *  signer
   * );
   * ```
   * */
  createPool(params: CreatePoolParams, signer?: Signer) {
    return createPool(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }

  /**
   * Retrieves all pools.
   *
   * @returns A promise that resolves with an array of pool objects.
   * */
  async getPools() {
    return getPools(this.context);
  }

  /**
   * Retrieves all pools that the user has invested in.
   *
   * @param params - The parameters for the pool retrieval.
   * @param params.account - The account address to retrieve pools for.
   *
   * @returns A promise that resolves with an array of invested pool objects.
   * */
  async getInvestedPools(params: GetInvestedPoolsParams) {
    return getInvestedPools(this.context, params);
  }

  /**
   * Retrieves a pool by its id.
   *
   * @param params - The parameters for the pool retrieval.
   * @param params.pool - The pool id to retrieve.
   *
   * @returns A promise that resolves with a pool object.
   * */
  async getPool(params: GetPoolParams) {
    return getPool(this.context, params);
  }

  /**
   * Retrieves a pool by its assets.
   *
   * @param params - The parameters for the pool retrieval.
   * @param params.assets - The assets to retrieve the pool for.
   *
   * @returns A promise that resolves with a pool object.
   * */
  async getPoolByAssets(params: GetPoolByAssetsParams) {
    return getPoolByAssets(this.context, params);
  }

  /**
   * Adds liquidity to a pool.
   *
   * @param params - The parameters for the liquidity addition.
   * @param params.pool - The pool id to add liquidity to.
   * @param params.amount - The amount of liquidity to add.
   * @param params.maxOtherAssetAmount - The maximum amount of the other asset to add.
   * @param params.account - The account address that will be debited for the liquidity addition.
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the result of the signed transaction submission.
   *
   * @example
   * ```typescript
   * const result = await gasp.addLiquidity(
   *  {
   *    pool: '160',
   *    amount: '100',
   *    maxOtherAssetAmount: '100',
   *    account: '0x123',
   *  },
   *  signer
   * );
   * ```
   * */
  addLiquidity(params: AddLiquidityParams, signer?: Signer) {
    return addLiquidity(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }

  /**
   * Removes liquidity from a pool.
   *
   * @param params - The parameters for the liquidity removal.
   * @param params.pool - The pool id to remove liquidity from.
   * @param params.amount - The amount of liquidity to remove.
   * @param params.minFirstAssetAmount - The minimum amount of the first asset to receive.
   * @param params.minSecondAssetAmount - The minimum amount of the second asset to receive.
   * @param params.account - The account address that will be debited for the liquidity removal.
   *
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the result of the signed transaction submission.
   *
   * @example
   * ```typescript
   * const result = await gasp.removeLiquidity(
   *  {
   *    pool: '160',
   *    amount: '100',
   *    minFirstAssetAmount: '100',
   *    minSecondAssetAmount: '100',
   *    account: '0x123',
   *  },
   *  signer
   * );
   * ```
   * */
  removeLiquidity(params: RemoveLiquidityParams, signer?: Signer) {
    return removeLiquidity(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }
}
