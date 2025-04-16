import { GaspError } from '../../error/GaspError';
import { Pool } from './types';
import { ModuleContext } from '../core/BaseModule';

export interface GetPoolByAssetsParams {
  assets: [string, string];
}

export const getPoolByAssets = async (
  { api, sdk }: ModuleContext,
  { assets }: GetPoolByAssetsParams
): Promise<Pool | null> => {
  const result = await Promise.all([
    api.query.xyk.liquidityAssets(assets),
    api.query.xyk.liquidityAssets(assets.slice().reverse()),
  ]).catch((e) => {
    throw new GaspError(
      'Unable to fetch pool data',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  const id = result.find((pool) => !pool.isEmpty);

  if (id === undefined) {
    return null;
  }

  const pool = await sdk.pool.getPool({ pool: id.toString() }).catch((e) => {
    throw new GaspError(
      'Error fetching pool data',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  return pool;
};
