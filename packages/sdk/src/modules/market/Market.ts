import { Signer } from '../../types/common';
import { BaseModule } from '../core/BaseModule';
import {
  CalculateBuyPriceParams,
  calculateBuyPrice,
} from './calculateBuyPrice';
import { SwapParams, SwapResult, swap } from './swap';

export class MarketModule extends BaseModule {
  /**
   * Swaps assets
   *
   * @param params - Configuration object containing swap details.
   * @param params.account - The account address that will be credited for the swap.
   * @param params.assetIn - The asset id to swap from.
   * @param params.assetOut - The asset id to swap to.
   * @param params.amountIn - The amount of the asset to swap.
   * @param params.minAmountOut - Optional. The minimum amount of the asset to receive from the swap.
   *
   * @param params.route - Optional. The route to use for the swap. Defaults to the direct route.
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the result of the signed transaction submission.
   *
   * @example
   * ```typescript
   * const result = await swap(
   *  {
   *    account: '0x123',
   *    assetIn: '0',
   *    assetOut: '1',
   *    amountIn: '100',
   *    minAmountOut: '10',
   *    route: ['10', '20'],
   *  },
   *  signer
   * );
   *
   * ```
   */
  async swap(params: SwapParams, signer?: Signer): Promise<SwapResult> {
    return swap(
      this.context,
      params,
      this.getSigner(signer),
      this.handleResponse
    );
  }

  /**
   * Calculates the buy price for a given asset.
   *
   * @param params - Configuration object
   * @param params.inputReserve - The input reserve amount.
   * @param params.outputReserve - The output reserve amount.
   * @param params.amount - The input amount to swap.
   *
   * @returns A promise that resolves with the calculated buy price.
   *
   * @example
   * ```typescript
   * const result = await calculateBuyPrice({
   *  inputReserve: '100',
   *  outputReserve: '200',
   *  amount: '50',
   * });
   * console.log(result);
   * ```
   */
  async calculateBuyPrice(params: CalculateBuyPriceParams) {
    return calculateBuyPrice(this.context, params);
  }
}
