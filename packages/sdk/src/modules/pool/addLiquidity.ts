import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';
import BN from 'bn.js';

export interface AddLiquidityParams {
  pool: string;
  asset: string;
  amount: BN | string;
  maxOtherAssetAmount: BN | string;
  account: string;
}

export interface AddLiquidityResult extends FeeMetadata {
  pool: string;
  firstAssetAmount: BN;
  secondAssetAmount: BN;
  lpMinted: BN;
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
      firstAssetAmount: new BN(data.amountsProvided[0]),
      secondAssetAmount: new BN(data.amountsProvided[1]),
      lpMinted: new BN(data.lpTokenMinted),
    }),
    eventType: api.events.market.LiquidityMinted,
  });
};
