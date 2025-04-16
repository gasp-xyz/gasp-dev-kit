import { Asset } from './types';
import { ModuleContext } from '../core/BaseModule';
import { GaspError } from '../../error/GaspError';

export interface GetAssetParams {
  asset: string;
}

export const getAsset = async (
  { api }: ModuleContext,
  { asset }: GetAssetParams
): Promise<Asset> => {
  const metadata = await api.query.assetRegistry.metadata(asset).catch((e) => {
    throw new GaspError(
      'Unable to fetch asset metadata',
      GaspError.error.API_RESPONSE_ERROR,
      e
    );
  });

  const idToL1Entries = await api.query.assetRegistry
    .idToL1Asset(asset)
    .catch((e) => {
      throw new GaspError(
        'Unable to fetch asset L1 info',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

  return {
    id: asset,
    contract: idToL1Entries.value.value.toString(),
    decimals: metadata.value.decimals.toString(),
  };
};
