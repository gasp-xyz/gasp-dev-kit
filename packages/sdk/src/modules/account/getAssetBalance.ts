import { GaspError } from '../../error/GaspError';
import { Balance } from './types';
import { ModuleContext } from '../core/BaseModule';

export interface GetAssetBalanceParams {
  account: string;
  asset: string;
}

export const getAssetBalance = async (
  { api }: ModuleContext,
  { account, asset }: GetAssetBalanceParams
): Promise<Balance> => {
  const res = await api.query.tokens.accounts(account, asset).catch((e) => {
    throw new GaspError(
      'Unable to fetch asset balance',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  return {
    asset,
    balance: {
      free: res.free.toString(),
      reserved: res.reserved.toString(),
      frozen: res.frozen.toString(),
    },
  };
};
