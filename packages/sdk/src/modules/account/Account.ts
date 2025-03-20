import { BaseModule } from '../core/BaseModule';
import { GetAssetBalanceParams, getAssetBalance } from './getAssetBalance';
import { GetBalancesParams, getBalances } from './getBalances';
import { GetNonceParams, getNonce } from './getNonce';

export class AccountModule extends BaseModule {
  /**
   * Retrieves the asset balance for a specific account and asset.
   *
   * @param params - Configuration object containing the account and asset details.
   * @param params.account - The account address to query.
   * @param params.asset - The asset id to query.
   *
   * @returns A promise that resolves with the asset balance information.
   *
   * @example
   * ```typescript
   * const account = '0x123';
   * const asset = '0';
   *
   * const result = await getAssetBalance({ account, asset });
   * console.log(result);
   * ```
   */
  async getAssetBalance(params: GetAssetBalanceParams) {
    return getAssetBalance(this.context, params);
  }

  /**
   * Retrieves balances for a specific account.
   *
   * @param params - Configuration object containing the account details.
   * @param params.account - The account address to query.
   *
   * @returns A promise that resolves with the balance information for all assets.
   *
   * @example
   * ```typescript
   * const account = '0x123';
   *
   * const result = await getBalances({ account });
   * console.log(result);
   * ```
   */
  async getBalances(params: GetBalancesParams) {
    return getBalances(this.context, params);
  }

  /**
   * Retrieves the nonce for a specific account.
   *
   * @param params - Configuration object containing the account details.
   * @param params.account - The account address to query.
   *
   * @returns A promise that resolves with the nonce value.
   *
   * @example
   *  ```typescript
   *  const account = '0x123';
   *
   *  const result = await getNonce({ account });
   *  console.log(result);
   *  ```
   *  */
  async getNonce(params: GetNonceParams) {
    return getNonce(this.context, params);
  }
}
