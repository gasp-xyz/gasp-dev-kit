import { GaspError } from '../../error/GaspError';
import { InvestedPool } from './types';
import { PalletProofOfStakeRewardInfo } from '@polkadot/types/lookup';
import { BN } from '@polkadot/util';
import { ModuleContext } from '../core/BaseModule';

export interface GetInvestedPoolsParams {
  account: string;
}

export const getInvestedPools = async (
  { api, sdk }: ModuleContext,
  { account }: GetInvestedPoolsParams
): Promise<InvestedPool[]> => {
  const [balances, rewardsInfo, reserveStatus] = await Promise.all([
    sdk.account.getBalances({ account }),
    api.query.proofOfStake.rewardsInfo.entries(account),
    api.query.multiPurposeLiquidity.reserveStatus.entries(account),
  ]).catch((e) => {
    throw new GaspError(
      'Error fetching invested pool metadata',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  const balancesMap = new Map(
    balances.map(({ asset, balance }) => [asset, balance])
  );
  const reservesMap = new Map(
    reserveStatus.map(([key, value]) => [key.args[1].toString(), value])
  );

  const poolRewardsInfo = new Map(
    rewardsInfo.map<[string, PalletProofOfStakeRewardInfo]>(([key, info]) => [
      key.args[1].toString(),
      info,
    ])
  );

  const investedPoolIds = Array.from(poolRewardsInfo.keys());

  const pools = await Promise.all(
    investedPoolIds.map((pool) => sdk.pool.getPool({ pool }))
  ).catch((e) => {
    throw new GaspError(
      'Error fetching pools',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  return pools.map((pool) => {
    const balance = balancesMap.get(pool.id)?.free;
    const rewardsInfo = poolRewardsInfo.get(pool.id);
    const reserveStatus = reservesMap.get(pool.id);

    if (!balance || !rewardsInfo || !reserveStatus) {
      throw new GaspError(
        'Error fetching pool data',
        GaspError.error.API_RESPONSE_ERROR,
        [balance?.toString(), rewardsInfo?.toHuman(), reserveStatus?.toHuman()]
      );
    }

    const activatedTokens = rewardsInfo.activatedAmount.toString();

    const nonActivatedTokens = new BN(balance)
      .add(reserveStatus.stakedUnactivatedReserves)
      .add(reserveStatus.unspentReserves)
      .toString();

    return {
      ...pool,
      activatedTokens,
      nonActivatedTokens,
    };
  });
};
