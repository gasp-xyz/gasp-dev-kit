import { GaspError } from '../../error/GaspError';
import { Asset } from './types';
import { ModuleContext } from '../core/BaseModule';

export const getAssets = async ({ api }: ModuleContext): Promise<Asset[]> => {
  const metadata = await api.query.assetRegistry.metadata
    .entries()
    .catch((e) => {
      throw new GaspError(
        'Unable to fetch asset metadata',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

  const idToL1Entries = await api.query.assetRegistry.idToL1Asset
    .entries()
    .catch((e) => {
      throw new GaspError(
        'Unable to fetch asset L1 info',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

  const idToL1EntriesMap = new Map(
    idToL1Entries.map((e) => [
      e[0].args[0].toString(),
      e[1].value.value.toString(),
    ])
  );

  const assets = metadata.map((m) => {
    const decimals = m[1].value.decimals.toString();
    const id = m[0].args[0].toString();
    const contract = idToL1EntriesMap.get(id);

    return {
      id,
      contract,
      decimals,
    };
  });

  return assets;
};
