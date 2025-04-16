import { GaspError } from '../../error/GaspError';
import { ModuleContext } from '../core/BaseModule';

export interface GetNonceParams {
  account: string;
}

export const getNonce = async (
  { api }: ModuleContext,
  { account }: GetNonceParams
): Promise<string> => {
  const nonce = await api.rpc.system.accountNextIndex(account).catch((e) => {
    throw new GaspError(
      'Unable to fetch asset balance',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  return nonce.toString();
};
