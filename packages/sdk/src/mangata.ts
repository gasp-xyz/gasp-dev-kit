import "gasp-types";
import { PriceImpact } from "./types/utility";
import { getPriceImpact } from "./utils/getPriceImpact";
import { createMangataInstance } from "./mangataInstance";
import { getRatio } from "./utils/getRatio";
import { BN } from "@polkadot/util";

const Mangata = {
  instance: createMangataInstance,
  getPriceImpact: (args: PriceImpact) => getPriceImpact(args),
  getPoolRatio: (left: BN, right: BN) => getRatio(left, right)
};

export { Mangata };
