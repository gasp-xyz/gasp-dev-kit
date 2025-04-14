import { GaspError } from '../../error/GaspError';
import { Balance } from './types';
import { ModuleContext } from '../core/BaseModule';
import { BN } from 'bn.js';

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
      free: new BN(res.free),
      reserved: new BN(res.reserved),
      frozen: new BN(res.frozen),
    },
  };
};
