export default {
  types: {
    ShufflingSeed: {
      seed: "H256",
      proof: "H512"
    },
    MultiSignature: {
      _enum: {
        Ed25519: 'Ed25519Signature',
        Sr25519: 'Sr25519Signature',
        Ecdsa: 'EcdsaSignature',
        Eth: 'EcdsaSignature',
      }
    },
    Header: {
      parentHash: "Hash",
      number: "Compact<BlockNumber>",
      stateRoot: "Hash",
      extrinsicsRoot: "Hash",
      digest: "Digest",
      seed: "ShufflingSeed",
      count: "BlockNumber"
    },
    RpcAssetMetadata: {
      tokenId: "TokenId",
      decimals: "u32",
      name: "Vec<u8>",
      symbol: "Vec<u8>"
    },
    TokenId: "u32",
    L1Update: {
      chain: "Chain",
      pendingDeposits: "Vec<Deposit>",
      pendingCancelResolutions: "Vec<CancelResolution>",
    },
    Deposit: {
      requestId: "RequestId",
      depositRecipient: "[u8; 20]",
      tokenAddress: "[u8; 20]",
      amount: "U256",
      timeStamp: "U256",
      ferryTip: "U256"
    },
    RequestId: {
      origin: "Origin",
      id: "u128"
    },
    Origin: {
      _enum: ['L1', 'L2']
    },
    Chain: {
      _enum: ['Ethereum', 'Arbitrum']
    },
    CancelResolution: {
      requestId: "RequestId",
      l2RequestId: "u128",
      cancelJustified: "bool",
      timeStamp: "U256"
    },
    WithdrawalResolution: {
      requestId: "RequestId",
      l2RequestId: "u128",
      status: "bool",
      timeStamp: "U256"
    },
    L2UpdatesToRemove: {
      requestId: "RequestId",
      l2UpdatesToRemove: "Vec<u128>",
      timeStamp: "U256"
    },
    PalletMarketPoolKind: {
      _enum: ['Xyk', 'StableSwap']
    },
    RpcPoolInfo: {
      poolId: "TokenId",
      kind: "PalletMarketPoolKind",
      lpTokenId: "TokenId",
      assets: "Vec<TokenId>",
      reserves: "Vec<Balance>"
    },
  }
}


export { default as pos } from './pos/definitions.js';
export { default as xyk } from './xyk/definitions.js';
export { default as rolldown } from './rolldown/definitions.js';
export { default as metamask } from './metamask/definitions.js';
export { default as market } from './market/definitions.js';
