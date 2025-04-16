import { Pool } from './types';
import { ModuleContext } from '../core/BaseModule';
import { GaspError } from '../../error/GaspError';
import BN from 'bn.js';

export interface GetPoolParams {
  pool: string;
}

export const getPool = async (
  { api }: ModuleContext,
  { pool }: GetPoolParams
): Promise<Pool> => {
  const _pool = await api.query.xyk.liquidityPools(pool).catch((e) => {
    throw new GaspError(
      'Error fetching pool',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });
  const poolAssets = _pool.unwrapOr(null);

  if (poolAssets === null) {
    throw new GaspError(
      'Unable to fetch pool assets info',
      GaspError.error.PARSING_ERROR,
      pool
    );
  }

  const amounts = await api.query.xyk.pools(poolAssets);

  const promoted = await api.query.proofOfStake
    .promotedPoolRewards()
    .catch((e) => {
      throw new GaspError(
        'Error fetching promoted pool rewards info',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

  const promotedPoolIds = new Set(
    Array.from(promoted.entries()).map(([key]) => key.toString())
  );

  return {
    id: pool,
    isPromoted: promotedPoolIds.has(pool.toString()),
    firstAsset: pool[0].toString(),
    secondAsset: pool[1].toString(),
    firstAssetAmount: new BN(amounts[0]),
    secondAssetAmount: new BN(amounts[1]),
  };
};
