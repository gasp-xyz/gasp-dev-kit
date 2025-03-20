import { FeeMetadata } from '../core/Fee';
import { PoolType } from '../pool';
import { AtomicSwap } from './types';
import { ModuleContext, ResponseHandler } from '../core/BaseModule';
import { Signer } from '../../types/common';
import { GaspError } from '../../error/GaspError';

export interface SwapParams {
  account: string;
  assetIn: string;
  assetOut: string;
  amountIn: string;
  minAmountOut?: string;
  route?: string[];
}

export interface SwapResult extends FeeMetadata {
  swaps: AtomicSwap[];
}

export const swap = async (
  { api, sdk }: ModuleContext,
  {
    account,
    assetIn,
    assetOut,
    amountIn,
    minAmountOut = '0',
    route: _route,
  }: SwapParams,
  signer: Signer,
  responseHandler: ResponseHandler
): Promise<SwapResult> => {
  let route = _route;

  if (!route) {
    const pool = await sdk.pool.getPoolByAssets({
      assets: [assetIn, assetOut],
    });

    if (!pool) {
      throw new GaspError(
        'Unable to construct swap route for given assets',
        GaspError.error.ARGS_ERROR,
        [assetIn, assetOut]
      );
    }

    route = [pool.id];
  }

  const tx = await sdk.tx.create({ account, signer });
  const extrinsic = api.tx.market.multiswapAsset(
    route,
    assetIn,
    amountIn,
    assetOut,
    minAmountOut ?? '0'
  );

  const events = await tx.signAndSend({ extrinsic }).catch((e) => {
    throw new GaspError(
      'Transaction error',
      GaspError.error.TRANSACTION_ERROR,
      e
    );
  });

  return responseHandler<SwapResult, typeof api.events.market.AssetsSwapped>(
    events,
    api.events.market.AssetsSwapped,
    (data) => ({
      swaps: data.swaps.map((swap) => ({
        poolId: swap.poolId.toString(),
        kind: swap.kind.toString() as PoolType,
        assetIn: swap.amountIn.toString(),
        assetOut: swap.amountOut.toString(),
        amountIn: swap.amountIn.toString(),
        amountOut: swap.amountOut.toString(),
      })),
    })
  );
};
