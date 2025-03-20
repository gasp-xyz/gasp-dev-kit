import { GaspError } from '../../error/GaspError';
import { ModuleContext } from '../core/BaseModule';

export interface CalculateBuyPriceParams {
  inputReserve: string;
  outputReserve: string;
  amount: string;
}

export const calculateBuyPrice = async (
  { api }: ModuleContext,
  { inputReserve, outputReserve, amount }: CalculateBuyPriceParams
): Promise<string> => {
  const price = await api.rpc.xyk
    .calculate_buy_price(inputReserve, outputReserve, amount)
    .catch((e) => {
      throw new GaspError(
        'Unable to calculate buy price',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

  return price.toString();
};
