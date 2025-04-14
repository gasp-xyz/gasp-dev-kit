import { GaspError } from '../../error/GaspError';
import { ModuleContext } from '../core/BaseModule';
import BN from 'bn.js';

export interface CalculateBuyPriceParams {
  inputReserve: BN | string;
  outputReserve: BN | string;
  amount: BN | string;
}

export const calculateBuyPrice = async (
  { api }: ModuleContext,
  { inputReserve, outputReserve, amount }: CalculateBuyPriceParams
): Promise<BN> => {
  const price = await api.rpc.xyk
    .calculate_buy_price(inputReserve, outputReserve, amount)
    .catch((e) => {
      throw new GaspError(
        'Unable to calculate buy price',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

  return new BN(price);
};
