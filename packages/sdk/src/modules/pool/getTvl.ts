import { GaspError } from '../../error/GaspError';
import { BN } from '@polkadot/util';
import { ModuleContext } from '../core/BaseModule';

export interface GetPoolTvlParams {
  pool: string;
}

export interface GetTvlResult {
  pool: string;
  tvl: Array<[string, BN]>;
}

export const getTvl = async (
  { api }: ModuleContext,
  { pool }: GetPoolTvlParams
): Promise<GetTvlResult> => {
  const poolAssetsResult = await api.query.xyk.liquidityPools(pool);
  const poolAssets = poolAssetsResult.unwrapOr(null);

  if (poolAssets === null) {
    throw new GaspError(
      'Unable to fetch pool assets',
      GaspError.error.API_RESPONSE_ERROR
    );
  }

  const tvl = await api.query.xyk.pools(poolAssets).catch((e) => {
    throw new GaspError(
      'Unable to fetch pool tvl',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  const parsedTvl = poolAssets.map<[string, BN]>((asset, index) => {
    return [asset.toString(), tvl[index].toBn()];
  });

  return {
    pool,
    tvl: parsedTvl,
  };
};
