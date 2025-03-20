import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';

export interface AddLiquidityParams {
  pool: string;
  asset: string;
  amount: string;
  maxOtherAssetAmount: string;
  account: string;
}

export interface AddLiquidityResult extends FeeMetadata {
  pool: string;
  firstAssetAmount: string;
  secondAssetAmount: string;
  lpMinted: string;
}

export const addLiquidity = (
  { api }: ModuleContext,
  { pool, asset, amount, maxOtherAssetAmount, account }: AddLiquidityParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<AddLiquidityResult> => {
  const extrinsic = api.tx.market.mintLiquidity(
    pool,
    asset,
    amount,
    maxOtherAssetAmount
  );

  return submitHandler<
    AddLiquidityResult,
    typeof api.events.market.LiquidityMinted
  >({
    extrinsic,
    signer,
    account,
    parseResponse: (data) => ({
      pool: data.poolId.toString(),
      firstAssetAmount: data.amountsProvided[0].toString(),
      secondAssetAmount: data.amountsProvided[1].toString(),
      lpMinted: data.lpTokenMinted.toString(),
    }),
    eventType: api.events.market.LiquidityMinted,
  });
};
