import { GaspError } from '../../error/GaspError';
import { ModuleContext } from '../core/BaseModule';

export interface GetIssuanceParams {
  asset: string;
}

export const getIssuance = async (
  { api }: ModuleContext,
  { asset }: GetIssuanceParams
): Promise<string> => {
  const issuance = await api.query.tokens.totalIssuance(asset).catch((e) => {
    throw new GaspError(
      'Unable to fetch asset metadata',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  return issuance.toString();
};
