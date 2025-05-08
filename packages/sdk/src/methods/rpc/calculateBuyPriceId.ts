import { ApiPromise } from "@polkadot/api";
import { BN } from "@polkadot/util";
import { TokenAmount, TokenId } from "../../types/common";
import { logger } from "../../utils/mangataLogger";

/**
 * @since 2.0.0
 */
export const calculateBuyPriceId = async (
  instancePromise: Promise<ApiPromise>,
  soldTokenId: TokenId,
  boughtTokenId: TokenId,
  amount: TokenAmount
) => {
  logger.info("calculateBuyPriceId", {
    soldTokenId,
    boughtTokenId,
    amount: amount.toString()
  });
  const api = await instancePromise;
  let asset = (await api.query.xyk.liquidityAssets([soldTokenId, boughtTokenId]));
  let pool = asset.isSome ? asset : (await api.query.xyk.liquidityAssets([boughtTokenId, soldTokenId]));

  if (pool.isNone) {
    throw new Error(`Pool does not exist for the specified token IDs: soldTokenId=${soldTokenId}, boughtTokenId=${boughtTokenId}.`);
  }

  let price = await api.rpc.market.calculate_buy_price(
    pool.unwrap(),
    boughtTokenId,
    amount
  );

  return new BN(price.unwrap());
};
