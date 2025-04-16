import { GaspError } from '../../error/GaspError';
import { Signer } from '../../types/common';
import { PoolType } from './types';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';
import BN from 'bn.js';

export interface CreatePoolParams {
  type: PoolType;
  firstAssetId: string;
  firstAssetAmount: BN | string;
  secondAssetId: string;
  secondAssetAmount: BN | string;
  account: string;
}

export interface CreatePoolResult extends FeeMetadata {
  pool: string;
  assets: string[];
  creator: string;
}

export const createPool = (
  { api }: ModuleContext,
  {
    type,
    firstAssetId,
    firstAssetAmount,
    secondAssetId,
    secondAssetAmount,
    account,
  }: CreatePoolParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<CreatePoolResult> => {
  const extrinsic = api.tx.market.createPool(
    type,
    firstAssetId,
    firstAssetAmount,
    secondAssetId,
    secondAssetAmount
  );

  const preSubmitValidation = async () => {
    const poolData = await Promise.all([
      api.query.xyk.liquidityAssets([firstAssetId, secondAssetId]),
      api.query.xyk.liquidityAssets([secondAssetId, firstAssetId]),
    ]).catch((e) => {
      throw new GaspError(
        'Unable to fetch pool data',
        GaspError.error.API_RESPONSE_ERROR,
        e
      );
    });

    const poolExists = poolData.some((pool) => !pool.isNone);

    if (poolExists) {
      throw new GaspError('Pool already exists', GaspError.error.ALREADY_EXISTS, [
        firstAssetId,
        secondAssetId,
      ]);
    }
  };

  return submitHandler<CreatePoolResult, typeof api.events.market.PoolCreated>({
    eventType: api.events.market.PoolCreated,
    extrinsic,
    signer,
    account,
    preSubmitValidation,
    parseResponse: (data) => ({
      pool: data.poolId.toString(),
      assets: data.assets.map((asset) => asset.toString()),
      creator: data.creator.toString(),
    }),
  });
};
