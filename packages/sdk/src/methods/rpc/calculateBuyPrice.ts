import { ApiPromise } from "@polkadot/api";
import { BN } from "@polkadot/util";
import { Reserve } from "../../types/xyk";
import { logger } from "../../utils/mangataLogger";

/**
 * @since 2.0.0
 */
export const calculateBuyPrice = async (
  instancePromise: Promise<ApiPromise>,
  args: Reserve
) => {
  logger.info("calculateBuyPrice", {
    inputReserve: args.inputReserve.toString(),
    outputReserve: args.outputReserve.toString(),
    amount: args.amount.toString()
  });
  const { inputReserve, outputReserve, amount } = args;
  try {
    const afterFeePercentage = new BN(9970)
    const inputReserveBN = new BN(inputReserve);
    const output_reserve_saturated = new BN(outputReserve);
    const buyAmountBN = new BN(amount);

    const numerator = inputReserveBN.mul(buyAmountBN).muln(10000);
    const denominator = output_reserve_saturated.sub(buyAmountBN).mul(afterFeePercentage);
    const result = numerator.div(denominator).addn(1);
    return result;
  } catch (e) {
    if (e instanceof Error) {
        logger.warn(`calculateBuyPrice math error - returning default value. Error: ${e.message}`);
    } else {
        logger.warn('calculateBuyPrice math error - returning default value. Unknown error type.');
    }
    return new BN(0);
  }
};
