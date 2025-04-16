import { GaspError } from '../../error/GaspError';
import { ModuleContext } from '../core/BaseModule';
import BN from 'bn.js';

export interface GetIssuanceParams {
  asset: string;
}

export const getIssuance = async (
  { api }: ModuleContext,
  { asset }: GetIssuanceParams
): Promise<BN> => {
  const issuance = await api.query.tokens.totalIssuance(asset).catch((e) => {
    throw new GaspError(
      'Unable to fetch asset metadata',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  return new BN(issuance);
};
