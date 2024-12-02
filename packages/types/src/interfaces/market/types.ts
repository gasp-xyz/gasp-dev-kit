// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types-codec';
import type { Balance } from '@polkadot/types/interfaces/runtime';
import type { PalletMarketPoolKind, TokenId } from 'gasp-types/interfaces/default';

/** @name RpcPoolInfo */
export interface RpcPoolInfo extends Struct {
  readonly poolId: TokenId;
  readonly kind: PalletMarketPoolKind;
  readonly lpTokenId: TokenId;
  readonly assets: Vec<TokenId>;
  readonly reserves: Vec<Balance>;
}

export type PHANTOM_MARKET = 'market';
