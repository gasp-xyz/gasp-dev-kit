import { Balance } from './types';
import { ModuleContext } from '../core/BaseModule';
import { GaspError } from '../../error/GaspError';

export interface GetBalancesParams {
  account: string;
}

export const getBalances = async (
  { api }: ModuleContext,
  { account }: GetBalancesParams
): Promise<Balance[]> => {
  const res = await api.query.tokens.accounts.entries(account).catch((e) => {
    throw new GaspError(
      'Unable to fetch balances',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  return res.map(([key, value]) => {
    return {
      asset: key.args[1].toString(),
      balance: {
        free: value.free.toString(),
        reserved: value.reserved.toString(),
        frozen: value.frozen.toString(),
      },
    };
  });
};
