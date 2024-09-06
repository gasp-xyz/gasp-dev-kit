export default {
  types: {},
  rpc: {
    get_abi_encoded_l2_request: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
        {
          name: 'request_id',
          type: 'u128',
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Vec<u8>"
    },
    get_native_sequencer_update: {
      description: "",
      params: [
        {
          name: "hex_payload",
          type: "String"
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Option<L1Update>"
    },
    verify_sequencer_update: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
        {
          name: "hash",
          type: "H256"
        },
        {
          name: "request_id",
          type: "u128"
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "bool"
    },
    get_merkle_root: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
        {
          name: 'range',
          type: '(u128, u128)',
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Vec<u8>"
    },
    get_merkle_proof: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
        {
          name: 'range',
          type: '(u128, u128)',
        },{
          name: 'tx_id',
          type: 'u128',
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "Vec<Vec<u8>>"
    },
    verify_merkle_proof: {
      description: "",
      params: [
        {
          name: "chain",
          type: "Chain",
        },
        {
          name: 'range',
          type: '(u128, u128)',
        },
        {
          name: 'tx_id',
          type: 'u128',
        },
        {
          name: 'root',
          type: 'H256',
        },
        {
          name: 'proof',
          type: 'Vec<H256>',
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: "bool"
    },
  }}
