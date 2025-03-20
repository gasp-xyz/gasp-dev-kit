import { GaspError } from '../../error/GaspError';
import { Pool } from './types';
import { ModuleContext } from '../core/BaseModule';

export const getPools = async ({ api }: ModuleContext): Promise<Pool[]> => {
  const [poolIds, lpAssets, amounts, promoted] = await Promise.all([
    api.query.xyk.liquidityPools.entries(),
    api.query.xyk.liquidityAssets.entries(),
    api.query.xyk.pools.entries(),
    api.query.proofOfStake.promotedPoolRewards(),
  ]).catch((e) => {
    throw new GaspError(
      'Error fetching pools',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  const lpAssetMap = new Map(
    lpAssets.map(([key, value]) => [key.args[0].toHex(), value])
  );

  const poolAmounts = new Map(
    amounts.map(([key, value]) => {
      const id = lpAssetMap.get(key.args[0].toHex())?.unwrapOr(null);
      if (!id) {
        throw new GaspError(
          'Error parsing pool amounts',
          GaspError.error.PARSING_ERROR,
          [key.toHuman(), value.toHuman()]
        );
      }

      return [
        id.toString(),
        new Map(value.map((v, i) => [key.args[0][i].toString(), v.toString()])),
      ];
    })
  );

  const promotedPoolIds = new Set(
    Array.from(promoted.entries()).map(([key]) => key.toString())
  );

  const pools = poolIds.map<Pool>(([key, value]) => {
    const poolId = key.args[0].toString();
    const tokens = value.unwrapOr(null);
    if (!tokens) {
      throw new GaspError('Error parsing pools', GaspError.error.PARSING_ERROR, [
        key.toHuman(),
        value.toHuman(),
      ]);
    }

    const firstAsset = tokens[0].toString();
    const secondAsset = tokens[1].toString();

    const isPromoted = promotedPoolIds.has(poolId);

    return {
      id: poolId,
      isPromoted,
      firstAsset,
      firstAssetAmount: poolAmounts.get(poolId)?.get(firstAsset) || '0',
      secondAsset,
      secondAssetAmount: poolAmounts.get(poolId)?.get(secondAsset) || '0',
    };
  });

  return pools;
};
