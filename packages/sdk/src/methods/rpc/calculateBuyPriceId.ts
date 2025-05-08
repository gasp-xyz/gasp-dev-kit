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
  const asset = (await api.query.xyk.liquidityAssets([soldTokenId, boughtTokenId]));
  const pool = asset.isSome ? asset : (await api.query.xyk.liquidityAssets([boughtTokenId, soldTokenId]));

  if (pool.isNone) {
    return new BN(0)
  }

  return api.rpc.market.calculate_buy_price(
    pool.unwrap(),
    boughtTokenId,
    amount
  )
  .then((val) => new BN(val.unwrapOrDefault().toString()))
  .catch((e) => new BN(0));
};
