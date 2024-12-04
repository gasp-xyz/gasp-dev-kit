export default {
  types: {},
  rpc: {
    calculate_buy_price: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "u32"
        },
        {
          name: "buy_asset_id",
          type: "u32"
        },
        {
          name: "buy_amount",
          type: "u128"
        }
      ],
      type: "Option<u128>"
    },
    calculate_buy_price_with_impact: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "u32"
        },
        {
          name: "buy_asset_id",
          type: "u32"
        },
        {
          name: "buy_amount",
          type: "u128"
        }
      ],
      type: "Option<(u128,u128)>"
    },
    calculate_expected_amount_for_minting: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "u32"
        },
        {
          name: "asset_id",
          type: "u32"
        },
        {
          name: "amount",
          type: "u128"
        }
      ],
      type: "Option<u128>"
    },
    calculate_expected_lp_minted: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "u32"
        },
        {
          name: "amounts",
          type: "(u128, u128)"
        },
      ],
      type: "Option<u128>"
    },
    calculate_sell_price: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "u32"
        },
        {
          name: "sell_asset_id",
          type: "u32"
        },
        {
          name: "sell_amount",
          type: "u128"
        }
      ],
      type: "Option<u128>"
    },
    calculate_sell_price_with_impact: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "u32"
        },
        {
          name: "sell_asset_id",
          type: "u32"
        },
        {
          name: "sell_amount",
          type: "u128"
        }
      ],
      type: "Option<(u128,u128)>"
    },
    get_pools: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "Option<u32>"
        },
      ],
      type: "Vec<RpcPoolInfo>"
    },
    get_burn_amount: {
      description: "",
      params: [
        {
          name: "pool_id",
          type: "u32"
        },
        {
          name: "lp_burn_amount",
          type: "u128"
        },
      ],
      type: "Option<(u128,u128)>"
    },
    get_tradeable_tokens: {
      description: "",
      params: [],
      type: "Vec<RpcAssetMetadata<TokenId>>"
    },
    get_pools_for_trading: {
      description: "",
      params: [],
      type: "Vec<RpcAssetMetadata>"
    },
  }
}