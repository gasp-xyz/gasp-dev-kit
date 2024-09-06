// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup0: sp_runtime::account::AccountId20
   **/
  SpRuntimeAccountAccountId20: '[u8;20]',
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, AccountData>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'Null'
  },
  /**
   * Lookup6: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup7: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup21: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup23: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup26: frame_system::EventRecord<rollup_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup28: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'SpRuntimeAccountAccountId20',
      },
      KilledAccount: {
        account: 'SpRuntimeAccountAccountId20',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'SpRuntimeAccountAccountId20',
        hash_: 'H256',
      },
      TxsEnqueued: {
        count: 'u64'
      }
    }
  },
  /**
   * Lookup29: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup30: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup31: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup32: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup33: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup34: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup35: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup36: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup37: pallet_utility_mangata::pallet::Event
   **/
  PalletUtilityMangataEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup39: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'SpRuntimeAccountAccountId20',
        who: 'SpRuntimeAccountAccountId20',
        proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'SpRuntimeAccountAccountId20',
        proxy: 'SpRuntimeAccountAccountId20',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'SpRuntimeAccountAccountId20',
        delegatee: 'SpRuntimeAccountAccountId20',
        proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'SpRuntimeAccountAccountId20',
        delegatee: 'SpRuntimeAccountAccountId20',
        proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup40: rollup_runtime::runtime_config::config::pallet_proxy::ProxyType
   **/
  RollupRuntimeRuntimeConfigConfigPalletProxyProxyType: {
    _enum: ['AutoCompound']
  },
  /**
   * Lookup42: pallet_maintenance::pallet::Event<T>
   **/
  PalletMaintenanceEvent: {
    _enum: {
      MaintenanceModeSwitchedOn: 'SpRuntimeAccountAccountId20',
      MaintenanceModeSwitchedOff: 'SpRuntimeAccountAccountId20',
      UpgradabilityInMaintenanceModeSwitchedOn: 'SpRuntimeAccountAccountId20',
      UpgradabilityInMaintenanceModeSwitchedOff: 'SpRuntimeAccountAccountId20',
      MaintenanceModeSwitchedOnExternally: 'Null'
    }
  },
  /**
   * Lookup43: pallet_rolldown::pallet::Event<T>
   **/
  PalletRolldownEvent: {
    _enum: {
      L1ReadStored: {
        _alias: {
          hash_: 'hash',
        },
        chain: 'PalletRolldownMessagesChain',
        sequencer: 'SpRuntimeAccountAccountId20',
        disputePeriodEnd: 'u128',
        range: {
          start: 'u128',
          end: 'u128',
        },
        hash_: 'H256',
      },
      RequestProcessedOnL2: {
        chain: 'PalletRolldownMessagesChain',
        requestId: 'u128',
        status: 'Result<Null, PalletRolldownL1RequestProcessingError>',
      },
      L1ReadCanceled: {
        chain: 'PalletRolldownMessagesChain',
        canceledSequencerUpdate: 'u128',
        assignedId: 'PalletRolldownMessagesRequestId',
      },
      TxBatchCreated: {
        chain: 'PalletRolldownMessagesChain',
        source: 'PalletRolldownBatchSource',
        assignee: 'SpRuntimeAccountAccountId20',
        batchId: 'u128',
        range: '(u128,u128)',
      },
      WithdrawalRequestCreated: {
        _alias: {
          hash_: 'hash',
        },
        chain: 'PalletRolldownMessagesChain',
        requestId: 'PalletRolldownMessagesRequestId',
        recipient: '[u8;20]',
        tokenAddress: '[u8;20]',
        amount: 'u128',
        hash_: 'H256',
      },
      ManualBatchExtraFeeSet: 'u128',
      DepositRefundCreated: {
        chain: 'PalletRolldownMessagesChain',
        refundedRequestId: 'PalletRolldownMessagesRequestId',
      },
      L1ReadScheduledForExecution: {
        _alias: {
          hash_: 'hash',
        },
        chain: 'PalletRolldownMessagesChain',
        hash_: 'H256',
      },
      L1ReadIgnoredBecauseOfMaintenanceMode: {
        _alias: {
          hash_: 'hash',
        },
        chain: 'PalletRolldownMessagesChain',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup44: pallet_rolldown::messages::Chain
   **/
  PalletRolldownMessagesChain: {
    _enum: ['Ethereum', 'Arbitrum']
  },
  /**
   * Lookup48: pallet_rolldown::L1RequestProcessingError
   **/
  PalletRolldownL1RequestProcessingError: {
    _enum: ['Overflow', 'AssetRegistrationProblem', 'MintError', 'NotEnoughtCancelRights', 'WrongCancelRequestId', 'SequencerNotSlashed']
  },
  /**
   * Lookup49: pallet_rolldown::messages::RequestId
   **/
  PalletRolldownMessagesRequestId: {
    origin: 'PalletRolldownMessagesOrigin',
    id: 'u128'
  },
  /**
   * Lookup50: pallet_rolldown::messages::Origin
   **/
  PalletRolldownMessagesOrigin: {
    _enum: ['L1', 'L2']
  },
  /**
   * Lookup51: pallet_rolldown::pallet::BatchSource
   **/
  PalletRolldownBatchSource: {
    _enum: ['Manual', 'AutomaticSizeReached', 'PeriodReached']
  },
  /**
   * Lookup53: pallet_metamask_signature::pallet::Event<T>
   **/
  PalletMetamaskSignatureEvent: {
    _enum: {
      MetadataUpdated: {
        name: 'Option<Bytes>',
        version: 'Option<Bytes>',
        chainId: 'Option<u64>',
        decodeUrl: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup59: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'u32',
        from: 'SpRuntimeAccountAccountId20',
        to: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'u32',
        from: 'SpRuntimeAccountAccountId20',
        to: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'u32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
      },
      Created: '(u32,SpRuntimeAccountAccountId20,u128)',
      Minted: '(u32,SpRuntimeAccountAccountId20,u128)',
      Locked: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
      },
      Issued: {
        currencyId: 'u32',
        amount: 'u128',
      },
      Rescinded: {
        currencyId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup60: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup62: pallet_transaction_payment_mangata::pallet::Event<T>
   **/
  PalletTransactionPaymentMangataEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'SpRuntimeAccountAccountId20',
        tokenId: 'u32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup63: pallet_xyk::pallet::Event<T>
   **/
  PalletXykEvent: {
    _enum: {
      PoolCreated: '(SpRuntimeAccountAccountId20,u32,u128,u32,u128)',
      AssetsSwapped: '(SpRuntimeAccountAccountId20,Vec<u32>,u128,u128)',
      SellAssetFailedDueToSlippage: '(SpRuntimeAccountAccountId20,u32,u128,u32,u128,u128)',
      BuyAssetFailedDueToSlippage: '(SpRuntimeAccountAccountId20,u32,u128,u32,u128,u128)',
      LiquidityMinted: '(SpRuntimeAccountAccountId20,u32,u128,u32,u128,u32,u128)',
      LiquidityBurned: '(SpRuntimeAccountAccountId20,u32,u128,u32,u128,u32,u128)',
      PoolPromotionUpdated: '(u32,Option<u8>)',
      LiquidityActivated: '(SpRuntimeAccountAccountId20,u32,u128)',
      LiquidityDeactivated: '(SpRuntimeAccountAccountId20,u32,u128)',
      RewardsClaimed: '(SpRuntimeAccountAccountId20,u32,u128)',
      MultiSwapAssetFailedOnAtomicSwap: '(SpRuntimeAccountAccountId20,Vec<u32>,u128,SpRuntimeModuleError)'
    }
  },
  /**
   * Lookup66: pallet_proof_of_stake::pallet::Event<T>
   **/
  PalletProofOfStakeEvent: {
    _enum: {
      PoolPromotionUpdated: '(u32,Option<u8>)',
      LiquidityActivated: '(SpRuntimeAccountAccountId20,u32,u128)',
      LiquidityDeactivated: '(SpRuntimeAccountAccountId20,u32,u128)',
      RewardsClaimed: '(SpRuntimeAccountAccountId20,u32,u128)',
      ThirdPartyRewardsClaimed: '(SpRuntimeAccountAccountId20,u32,u32,u128)',
      ThirdPartyLiquidityActivated: '(SpRuntimeAccountAccountId20,u32,u32,u128)',
      ThirdPartyLiquidityDeactivated: '(SpRuntimeAccountAccountId20,u32,u32,u128)',
      ThirdPartySuccessfulPoolPromotion: '(SpRuntimeAccountAccountId20,u32,u32,u128)'
    }
  },
  /**
   * Lookup67: pallet_fee_lock::pallet::Event<T>
   **/
  PalletFeeLockEvent: {
    _enum: {
      FeeLockMetadataUpdated: 'Null',
      FeeLockUnlocked: '(SpRuntimeAccountAccountId20,u128)',
      FeeLocked: {
        who: 'SpRuntimeAccountAccountId20',
        lockAmount: 'u128',
        totalLocked: 'u128'
      }
    }
  },
  /**
   * Lookup68: pallet_vesting_mangata::pallet::Event<T>
   **/
  PalletVestingMangataEvent: {
    _enum: {
      VestingUpdated: {
        account: 'SpRuntimeAccountAccountId20',
        tokenId: 'u32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'SpRuntimeAccountAccountId20',
        tokenId: 'u32'
      }
    }
  },
  /**
   * Lookup69: pallet_crowdloan_rewards::pallet::Event<T>
   **/
  PalletCrowdloanRewardsEvent: {
    _enum: {
      InitialPaymentMade: '(SpRuntimeAccountAccountId20,u128)',
      NativeIdentityAssociated: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128)',
      RewardsPaid: '(SpRuntimeAccountAccountId20,u128)',
      RewardAddressUpdated: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20)',
      InitializedAlreadyInitializedAccount: '(SpRuntimeAccountAccountId20,Option<SpRuntimeAccountAccountId20>,u128)',
      InitializedAccountWithNotEnoughContribution: '(SpRuntimeAccountAccountId20,Option<SpRuntimeAccountAccountId20>,u128)'
    }
  },
  /**
   * Lookup70: pallet_issuance::pallet::Event<T>
   **/
  PalletIssuanceEvent: {
    _enum: {
      SessionIssuanceIssued: '(u32,u128,u128)',
      SessionIssuanceRecorded: '(u32,u128,u128)',
      IssuanceConfigInitialized: 'PalletIssuanceIssuanceInfo',
      TGEFinalized: 'Null',
      TGEInstanceFailed: 'PalletIssuanceTgeInfo',
      TGEInstanceSucceeded: 'PalletIssuanceTgeInfo'
    }
  },
  /**
   * Lookup71: pallet_issuance::IssuanceInfo<Balance>
   **/
  PalletIssuanceIssuanceInfo: {
    cap: 'u128',
    issuanceAtInit: 'u128',
    linearIssuanceBlocks: 'u32',
    liquidityMiningSplit: 'Perbill',
    stakingSplit: 'Perbill',
    totalCrowdloanAllocation: 'u128'
  },
  /**
   * Lookup73: pallet_issuance::TgeInfo<sp_runtime::account::AccountId20, Balance>
   **/
  PalletIssuanceTgeInfo: {
    who: 'SpRuntimeAccountAccountId20',
    amount: 'u128'
  },
  /**
   * Lookup74: pallet_multipurpose_liquidity::pallet::Event<T>
   **/
  PalletMultipurposeLiquidityEvent: {
    _enum: {
      VestingTokensReserved: '(SpRuntimeAccountAccountId20,u32,u128)',
      TokensRelockedFromReserve: '(SpRuntimeAccountAccountId20,u32,u128,u128)'
    }
  },
  /**
   * Lookup75: pallet_bootstrap::pallet::Event<T>
   **/
  PalletBootstrapEvent: {
    _enum: {
      Provisioned: '(u32,u128)',
      VestedProvisioned: '(u32,u128)',
      RewardsLiquidityAcitvationFailed: '(SpRuntimeAccountAccountId20,u32,u128)',
      RewardsClaimed: '(u32,u128)',
      AccountsWhitelisted: 'Null',
      BootstrapParitallyPreFinalized: 'Null',
      BootstrapReadyToBeFinalized: 'Null',
      BootstrapFinalized: 'Null'
    }
  },
  /**
   * Lookup76: parachain_staking::pallet::Event<T>
   **/
  ParachainStakingEvent: {
    _enum: {
      NewRound: '(u32,u32,u32,u128)',
      JoinedCollatorCandidates: '(SpRuntimeAccountAccountId20,u128,u128)',
      CollatorChosen: '(u32,SpRuntimeAccountAccountId20,u128)',
      CandidateBondMoreRequested: '(SpRuntimeAccountAccountId20,u128,u32)',
      CandidateBondLessRequested: '(SpRuntimeAccountAccountId20,u128,u32)',
      CandidateBondedMore: '(SpRuntimeAccountAccountId20,u128,u128)',
      CandidateBondedLess: '(SpRuntimeAccountAccountId20,u128,u128)',
      CandidateWentOffline: '(u32,SpRuntimeAccountAccountId20)',
      CandidateBackOnline: '(u32,SpRuntimeAccountAccountId20)',
      CandidateScheduledExit: '(u32,SpRuntimeAccountAccountId20,u32)',
      CancelledCandidateExit: 'SpRuntimeAccountAccountId20',
      CancelledCandidateBondChange: '(SpRuntimeAccountAccountId20,ParachainStakingCandidateBondRequest)',
      CandidateLeft: '(SpRuntimeAccountAccountId20,u128,u128)',
      DelegationIncreaseScheduled: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128,u32)',
      DelegationDecreaseScheduled: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128,u32)',
      DelegationIncreased: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128,bool)',
      DelegationDecreased: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128,bool)',
      DelegatorExitScheduled: '(u32,SpRuntimeAccountAccountId20,u32)',
      DelegationRevocationScheduled: '(u32,SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u32)',
      DelegatorLeft: '(SpRuntimeAccountAccountId20,u128)',
      DelegationRevoked: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128)',
      DelegatorExitCancelled: 'SpRuntimeAccountAccountId20',
      CancelledDelegationRequest: '(SpRuntimeAccountAccountId20,ParachainStakingDelegationRequest)',
      Delegation: '(SpRuntimeAccountAccountId20,u128,SpRuntimeAccountAccountId20,ParachainStakingDelegatorAdded)',
      DelegatorLeftCandidate: '(SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128,u128)',
      DelegatorDueReward: '(u32,SpRuntimeAccountAccountId20,SpRuntimeAccountAccountId20,u128)',
      Rewarded: '(u32,SpRuntimeAccountAccountId20,u128)',
      CollatorRewardsDistributed: '(SpRuntimeAccountAccountId20,ParachainStakingPayoutRounds)',
      StakeExpectationsSet: '(u128,u128,u128)',
      TotalSelectedSet: '(u32,u32)',
      CollatorCommissionSet: '(Perbill,Perbill)',
      CandidateAggregatorUpdated: '(SpRuntimeAccountAccountId20,Option<SpRuntimeAccountAccountId20>)',
      AggregatorMetadataUpdated: 'SpRuntimeAccountAccountId20'
    }
  },
  /**
   * Lookup77: parachain_staking::pallet::CandidateBondRequest<Balance>
   **/
  ParachainStakingCandidateBondRequest: {
    amount: 'u128',
    change: 'ParachainStakingCandidateBondChange',
    whenExecutable: 'u32'
  },
  /**
   * Lookup78: parachain_staking::pallet::CandidateBondChange
   **/
  ParachainStakingCandidateBondChange: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup79: parachain_staking::pallet::DelegationRequest<sp_runtime::account::AccountId20, Balance>
   **/
  ParachainStakingDelegationRequest: {
    collator: 'SpRuntimeAccountAccountId20',
    amount: 'u128',
    whenExecutable: 'u32',
    action: 'ParachainStakingDelegationChange'
  },
  /**
   * Lookup80: parachain_staking::pallet::DelegationChange
   **/
  ParachainStakingDelegationChange: {
    _enum: ['Revoke', 'Increase', 'Decrease']
  },
  /**
   * Lookup81: parachain_staking::pallet::DelegatorAdded<Balance>
   **/
  ParachainStakingDelegatorAdded: {
    _enum: {
      AddedToTop: {
        newTotal: 'u128',
      },
      AddedToBottom: 'Null'
    }
  },
  /**
   * Lookup82: parachain_staking::PayoutRounds
   **/
  ParachainStakingPayoutRounds: {
    _enum: {
      All: 'Null',
      Partial: 'Vec<u32>'
    }
  },
  /**
   * Lookup83: pallet_sequencer_staking::pallet::Event<T>
   **/
  PalletSequencerStakingEvent: {
    _enum: {
      SequencersRemovedFromActiveSet: '(PalletRolldownMessagesChain,Vec<SpRuntimeAccountAccountId20>)',
      SequencerJoinedActiveSet: '(PalletRolldownMessagesChain,SpRuntimeAccountAccountId20)'
    }
  },
  /**
   * Lookup85: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup86: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup89: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup90: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup91: orml_asset_registry::module::Event<T>
   **/
  OrmlAssetRegistryModuleEvent: {
    _enum: {
      RegisteredAsset: {
        assetId: 'u32',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
      },
      UpdatedAsset: {
        assetId: 'u32',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata'
      }
    }
  },
  /**
   * Lookup92: orml_traits::asset_registry::AssetMetadata<Balance, mangata_types::assets::CustomMetadata, StringLimit>
   **/
  OrmlTraitsAssetRegistryAssetMetadata: {
    decimals: 'u32',
    name: 'Bytes',
    symbol: 'Bytes',
    existentialDeposit: 'u128',
    location: 'Option<StagingXcmVersionedMultiLocation>',
    additional: 'MangataTypesAssetsCustomMetadata'
  },
  /**
   * Lookup93: mangata_types::assets::CustomMetadata
   **/
  MangataTypesAssetsCustomMetadata: {
    xcm: 'Option<MangataTypesAssetsXcmMetadata>',
    xyk: 'Option<MangataTypesAssetsXykMetadata>'
  },
  /**
   * Lookup95: mangata_types::assets::XcmMetadata
   **/
  MangataTypesAssetsXcmMetadata: {
    feePerSecond: 'u128'
  },
  /**
   * Lookup97: mangata_types::assets::XykMetadata
   **/
  MangataTypesAssetsXykMetadata: {
    operationsDisabled: 'bool'
  },
  /**
   * Lookup100: staging_xcm::VersionedMultiLocation
   **/
  StagingXcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup101: staging_xcm::v2::multilocation::MultiLocation
   **/
  StagingXcmV2MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV2MultilocationJunctions'
  },
  /**
   * Lookup102: staging_xcm::v2::multilocation::Junctions
   **/
  StagingXcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV2Junction',
      X2: '(StagingXcmV2Junction,StagingXcmV2Junction)',
      X3: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X4: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X5: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X6: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X7: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X8: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)'
    }
  },
  /**
   * Lookup103: staging_xcm::v2::junction::Junction
   **/
  StagingXcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'StagingXcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'StagingXcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'StagingXcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'StagingXcmV2BodyId',
        part: 'StagingXcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup105: staging_xcm::v2::NetworkId
   **/
  StagingXcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup108: staging_xcm::v2::BodyId
   **/
  StagingXcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup109: staging_xcm::v2::BodyPart
   **/
  StagingXcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup110: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV3Junctions'
  },
  /**
   * Lookup111: staging_xcm::v3::junctions::Junctions
   **/
  StagingXcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV3Junction',
      X2: '(StagingXcmV3Junction,StagingXcmV3Junction)',
      X3: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X4: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X5: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X6: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X7: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X8: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)'
    }
  },
  /**
   * Lookup112: staging_xcm::v3::junction::Junction
   **/
  StagingXcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'StagingXcmV3JunctionBodyId',
        part: 'StagingXcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup114: staging_xcm::v3::junction::NetworkId
   **/
  StagingXcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup115: staging_xcm::v3::junction::BodyId
   **/
  StagingXcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup116: staging_xcm::v3::junction::BodyPart
   **/
  StagingXcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup117: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'SpRuntimeAccountAccountId20',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'SpRuntimeAccountAccountId20',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup118: pallet_sudo_mangata::pallet::Event<T>
   **/
  PalletSudoMangataEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<SpRuntimeAccountAccountId20>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup119: pallet_sudo_origin::pallet::Event<T>
   **/
  PalletSudoOriginEvent: {
    _enum: {
      SuOriginDid: 'Result<Null, SpRuntimeDispatchError>',
      SuOriginDoAsDone: 'Result<Null, SpRuntimeDispatchError>'
    }
  },
  /**
   * Lookup120: pallet_collective_mangata::pallet::Event<T, I>
   **/
  PalletCollectiveMangataEvent: {
    _enum: {
      Proposed: {
        account: 'SpRuntimeAccountAccountId20',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'SpRuntimeAccountAccountId20',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32',
      },
      MembersChanged: {
        newMembers: 'Vec<SpRuntimeAccountAccountId20>',
      },
      PrimeSet: {
        newPrime: 'Option<SpRuntimeAccountAccountId20>'
      }
    }
  },
  /**
   * Lookup121: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'SpRuntimeAccountAccountId20',
      },
      IdentityCleared: {
        who: 'SpRuntimeAccountAccountId20',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'SpRuntimeAccountAccountId20',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'SpRuntimeAccountAccountId20',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'SpRuntimeAccountAccountId20',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'SpRuntimeAccountAccountId20',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'SpRuntimeAccountAccountId20',
        main: 'SpRuntimeAccountAccountId20',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'SpRuntimeAccountAccountId20',
        main: 'SpRuntimeAccountAccountId20',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'SpRuntimeAccountAccountId20',
        main: 'SpRuntimeAccountAccountId20',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup122: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup126: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup128: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      enqueue_txs: {
        txs: 'Vec<(Option<SpRuntimeAccountAccountId20>,Bytes)>',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup132: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup133: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup134: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup136: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup137: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup138: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup139: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup143: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'StorageQueueFull']
  },
  /**
   * Lookup144: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup145: pallet_utility_mangata::pallet::Call<T>
   **/
  PalletUtilityMangataCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'RollupRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup148: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'SpRuntimeAccountAccountId20',
        forceProxyType: 'Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'SpRuntimeAccountAccountId20',
        proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'SpRuntimeAccountAccountId20',
        proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'SpRuntimeAccountAccountId20',
        proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'SpRuntimeAccountAccountId20',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'SpRuntimeAccountAccountId20',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'SpRuntimeAccountAccountId20',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'SpRuntimeAccountAccountId20',
        real: 'SpRuntimeAccountAccountId20',
        forceProxyType: 'Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup150: pallet_maintenance::pallet::Call<T>
   **/
  PalletMaintenanceCall: {
    _enum: ['switch_maintenance_mode_on', 'switch_maintenance_mode_off', 'switch_upgradability_in_maintenance_mode_on', 'switch_upgradability_in_maintenance_mode_off']
  },
  /**
   * Lookup151: pallet_rolldown::pallet::Call<T>
   **/
  PalletRolldownCall: {
    _enum: {
      update_l2_from_l1: {
        requests: 'PalletRolldownMessagesL1Update',
      },
      __Unused1: 'Null',
      force_update_l2_from_l1: {
        update: 'PalletRolldownMessagesL1Update',
      },
      cancel_requests_from_l1: {
        chain: 'PalletRolldownMessagesChain',
        requestsToCancel: 'u128',
      },
      force_cancel_requests_from_l1: {
        chain: 'PalletRolldownMessagesChain',
        requestsToCancel: 'u128',
      },
      withdraw: {
        chain: 'PalletRolldownMessagesChain',
        recipient: '[u8;20]',
        tokenAddress: '[u8;20]',
        amount: 'u128',
      },
      create_batch: {
        chain: 'PalletRolldownMessagesChain',
        sequencerAccount: 'Option<SpRuntimeAccountAccountId20>',
      },
      set_manual_batch_extra_fee: {
        balance: 'u128',
      },
      refund_failed_deposit: {
        chain: 'PalletRolldownMessagesChain',
        requestId: 'u128',
      },
      force_create_batch: {
        chain: 'PalletRolldownMessagesChain',
        range: '(u128,u128)',
        sequencerAccount: 'SpRuntimeAccountAccountId20'
      }
    }
  },
  /**
   * Lookup152: pallet_rolldown::messages::L1Update
   **/
  PalletRolldownMessagesL1Update: {
    chain: 'PalletRolldownMessagesChain',
    pendingDeposits: 'Vec<PalletRolldownMessagesDeposit>',
    pendingCancelResolutions: 'Vec<PalletRolldownMessagesCancelResolution>'
  },
  /**
   * Lookup154: pallet_rolldown::messages::Deposit
   **/
  PalletRolldownMessagesDeposit: {
    requestId: 'PalletRolldownMessagesRequestId',
    depositRecipient: '[u8;20]',
    tokenAddress: '[u8;20]',
    amount: 'U256',
    timeStamp: 'U256'
  },
  /**
   * Lookup158: pallet_rolldown::messages::CancelResolution
   **/
  PalletRolldownMessagesCancelResolution: {
    requestId: 'PalletRolldownMessagesRequestId',
    l2RequestId: 'u128',
    cancelJustified: 'bool',
    timeStamp: 'U256'
  },
  /**
   * Lookup159: pallet_metamask_signature::pallet::Call<T>
   **/
  PalletMetamaskSignatureCall: {
    _enum: {
      update: {
        name: 'Option<Bytes>',
        version: 'Option<Bytes>',
        chainId: 'Option<u64>',
        decodeUrl: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup160: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'SpRuntimeAccountAccountId20',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'SpRuntimeAccountAccountId20',
        currencyId: 'u32',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'SpRuntimeAccountAccountId20',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'SpRuntimeAccountAccountId20',
        dest: 'SpRuntimeAccountAccountId20',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'SpRuntimeAccountAccountId20',
        currencyId: 'u32',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      create: {
        who: 'SpRuntimeAccountAccountId20',
        amount: 'Compact<u128>',
      },
      mint: {
        currencyId: 'u32',
        who: 'SpRuntimeAccountAccountId20',
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup161: pallet_xyk::pallet::Call<T>
   **/
  PalletXykCall: {
    _enum: {
      create_pool: {
        firstAssetId: 'u32',
        firstAssetAmount: 'u128',
        secondAssetId: 'u32',
        secondAssetAmount: 'u128',
      },
      sell_asset: {
        soldAssetId: 'u32',
        boughtAssetId: 'u32',
        soldAssetAmount: 'u128',
        minAmountOut: 'u128',
      },
      multiswap_sell_asset: {
        swapTokenList: 'Vec<u32>',
        soldAssetAmount: 'u128',
        minAmountOut: 'u128',
      },
      buy_asset: {
        soldAssetId: 'u32',
        boughtAssetId: 'u32',
        boughtAssetAmount: 'u128',
        maxAmountIn: 'u128',
      },
      multiswap_buy_asset: {
        swapTokenList: 'Vec<u32>',
        boughtAssetAmount: 'u128',
        maxAmountIn: 'u128',
      },
      mint_liquidity_using_vesting_native_tokens_by_vesting_index: {
        nativeAssetVestingIndex: 'u32',
        vestingNativeAssetUnlockSomeAmountOrAll: 'Option<u128>',
        secondAssetId: 'u32',
        expectedSecondAssetAmount: 'u128',
      },
      mint_liquidity_using_vesting_native_tokens: {
        vestingNativeAssetAmount: 'u128',
        secondAssetId: 'u32',
        expectedSecondAssetAmount: 'u128',
      },
      mint_liquidity: {
        firstAssetId: 'u32',
        secondAssetId: 'u32',
        firstAssetAmount: 'u128',
        expectedSecondAssetAmount: 'u128',
      },
      compound_rewards: {
        liquidityAssetId: 'u32',
        amountPermille: 'Permill',
      },
      provide_liquidity_with_conversion: {
        liquidityAssetId: 'u32',
        providedAssetId: 'u32',
        providedAssetAmount: 'u128',
      },
      burn_liquidity: {
        firstAssetId: 'u32',
        secondAssetId: 'u32',
        liquidityAssetAmount: 'u128'
      }
    }
  },
  /**
   * Lookup164: pallet_proof_of_stake::pallet::Call<T>
   **/
  PalletProofOfStakeCall: {
    _enum: {
      claim_rewards_all: {
        liquidityTokenId: 'u32',
      },
      update_pool_promotion: {
        liquidityTokenId: 'u32',
        liquidityMiningIssuanceWeight: 'u8',
      },
      activate_liquidity: {
        liquidityTokenId: 'u32',
        amount: 'u128',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityActivateKind>',
      },
      deactivate_liquidity: {
        liquidityTokenId: 'u32',
        amount: 'u128',
      },
      reward_pool: {
        pool: '(u32,u32)',
        tokenId: 'u32',
        amount: 'u128',
        scheduleEnd: 'u32',
      },
      activate_liquidity_for_3rdparty_rewards: {
        liquidityTokenId: 'u32',
        amount: 'u128',
        rewardToken: 'u32',
        useBalanceFrom: 'Option<PalletProofOfStakeThirdPartyActivationKind>',
      },
      deactivate_liquidity_for_3rdparty_rewards: {
        liquidityTokenId: 'u32',
        amount: 'u128',
        rewardToken: 'u32',
      },
      claim_3rdparty_rewards: {
        liquidityTokenId: 'u32',
        rewardToken: 'u32',
      },
      activate_liquidity_for_native_rewards: {
        liquidityTokenId: 'u32',
        amount: 'u128',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityActivateKind>',
      },
      deactivate_liquidity_for_native_rewards: {
        liquidityTokenId: 'u32',
        amount: 'u128',
      },
      claim_native_rewards: {
        liquidityTokenId: 'u32'
      }
    }
  },
  /**
   * Lookup166: mangata_types::multipurpose_liquidity::ActivateKind
   **/
  MangataTypesMultipurposeLiquidityActivateKind: {
    _enum: ['AvailableBalance', 'StakedUnactivatedReserves', 'UnspentReserves']
  },
  /**
   * Lookup168: pallet_proof_of_stake::ThirdPartyActivationKind<CurrencyId>
   **/
  PalletProofOfStakeThirdPartyActivationKind: {
    _enum: {
      ActivateKind: 'Option<MangataTypesMultipurposeLiquidityActivateKind>',
      ActivatedLiquidity: 'u32',
      NativeRewardsLiquidity: 'Null'
    }
  },
  /**
   * Lookup169: pallet_fee_lock::pallet::Call<T>
   **/
  PalletFeeLockCall: {
    _enum: {
      update_fee_lock_metadata: {
        periodLength: 'Option<u32>',
        feeLockAmount: 'Option<u128>',
        swapValueThreshold: 'Option<u128>',
        shouldBeWhitelisted: 'Option<Vec<(u32,bool)>>',
      },
      unlock_fee: 'Null'
    }
  },
  /**
   * Lookup173: pallet_vesting_mangata::pallet::Call<T>
   **/
  PalletVestingMangataCall: {
    _enum: {
      vest: {
        tokenId: 'u32',
      },
      vest_other: {
        tokenId: 'u32',
        target: 'SpRuntimeAccountAccountId20',
      },
      force_vested_transfer: {
        tokenId: 'u32',
        source: 'SpRuntimeAccountAccountId20',
        target: 'SpRuntimeAccountAccountId20',
        schedule: 'PalletVestingMangataVestingInfo',
      },
      merge_schedules: {
        tokenId: 'u32',
        schedule1Index: 'u32',
        schedule2Index: 'u32',
      },
      sudo_unlock_all_vesting_tokens: {
        target: 'SpRuntimeAccountAccountId20',
        tokenId: 'u32'
      }
    }
  },
  /**
   * Lookup174: pallet_vesting_mangata::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingMangataVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup175: pallet_crowdloan_rewards::pallet::Call<T>
   **/
  PalletCrowdloanRewardsCall: {
    _enum: {
      associate_native_identity: {
        rewardAccount: 'SpRuntimeAccountAccountId20',
        relayAccount: 'SpRuntimeAccountAccountId20',
        proof: 'SpRuntimeAccountEthereumSignature',
      },
      change_association_with_relay_keys: {
        rewardAccount: 'SpRuntimeAccountAccountId20',
        previousAccount: 'SpRuntimeAccountAccountId20',
        proofs: 'Vec<(SpRuntimeAccountAccountId20,SpRuntimeAccountEthereumSignature)>',
      },
      claim: {
        crowdloanId: 'Option<u32>',
      },
      update_reward_address: {
        newRewardAccount: 'SpRuntimeAccountAccountId20',
        crowdloanId: 'Option<u32>',
      },
      complete_initialization: {
        leaseStartBlock: 'u32',
        leaseEndingBlock: 'u32',
      },
      set_crowdloan_allocation: {
        crowdloanAllocationAmount: 'u128',
      },
      initialize_reward_vec: {
        rewards: 'Vec<(SpRuntimeAccountAccountId20,Option<SpRuntimeAccountAccountId20>,u128)>'
      }
    }
  },
  /**
   * Lookup176: sp_runtime::account::EthereumSignature
   **/
  SpRuntimeAccountEthereumSignature: 'SpCoreEcdsaSignature',
  /**
   * Lookup177: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup183: pallet_issuance::pallet::Call<T>
   **/
  PalletIssuanceCall: {
    _enum: {
      init_issuance_config: 'Null',
      finalize_tge: 'Null',
      execute_tge: {
        tgeInfos: 'Vec<PalletIssuanceTgeInfo>'
      }
    }
  },
  /**
   * Lookup185: pallet_multipurpose_liquidity::pallet::Call<T>
   **/
  PalletMultipurposeLiquidityCall: {
    _enum: {
      reserve_vesting_liquidity_tokens_by_vesting_index: {
        liquidityTokenId: 'u32',
        liquidityTokenVestingIndex: 'u32',
        liquidityTokenUnlockSomeAmountOrAll: 'Option<u128>',
      },
      reserve_vesting_native_tokens_by_vesting_index: {
        liquidityTokenVestingIndex: 'u32',
        liquidityTokenUnlockSomeAmountOrAll: 'Option<u128>',
      },
      reserve_vesting_liquidity_tokens: {
        liquidityTokenId: 'u32',
        liquidityTokenAmount: 'u128',
      },
      unreserve_and_relock_instance: {
        liquidityTokenId: 'u32',
        relockInstanceIndex: 'u32'
      }
    }
  },
  /**
   * Lookup186: pallet_bootstrap::pallet::Call<T>
   **/
  PalletBootstrapCall: {
    _enum: {
      provision: {
        tokenId: 'u32',
        amount: 'u128',
      },
      whitelist_accounts: {
        accounts: 'Vec<SpRuntimeAccountAccountId20>',
      },
      schedule_bootstrap: {
        firstTokenId: 'u32',
        secondTokenId: 'u32',
        idoStart: 'u32',
        whitelistPhaseLength: 'Option<u32>',
        publicPhaseLength: 'u32',
        maxFirstToSecondRatio: 'Option<(u128,u128)>',
        promoteBootstrapPool: 'bool',
      },
      cancel_bootstrap: 'Null',
      update_promote_bootstrap_pool: {
        promoteBootstrapPool: 'bool',
      },
      claim_liquidity_tokens: 'Null',
      claim_and_activate_liquidity_tokens: 'Null',
      pre_finalize: 'Null',
      finalize: 'Null',
      claim_liquidity_tokens_for_account: {
        account: 'SpRuntimeAccountAccountId20',
        activateRewards: 'bool'
      }
    }
  },
  /**
   * Lookup188: parachain_staking::pallet::Call<T>
   **/
  ParachainStakingCall: {
    _enum: {
      set_total_selected: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_collator_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      join_candidates: {
        bond: 'u128',
        liquidityToken: 'u32',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityBondKind>',
        candidateCount: 'u32',
        liquidityTokenCount: 'u32',
      },
      schedule_leave_candidates: {
        candidateCount: 'u32',
      },
      execute_leave_candidates: {
        candidate: 'SpRuntimeAccountAccountId20',
        candidateDelegationCount: 'u32',
      },
      cancel_leave_candidates: {
        candidateCount: 'u32',
      },
      go_offline: 'Null',
      go_online: 'Null',
      schedule_candidate_bond_more: {
        more: 'u128',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityBondKind>',
      },
      schedule_candidate_bond_less: {
        less: 'u128',
      },
      execute_candidate_bond_request: {
        candidate: 'SpRuntimeAccountAccountId20',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityBondKind>',
      },
      cancel_candidate_bond_request: 'Null',
      delegate: {
        collator: 'SpRuntimeAccountAccountId20',
        amount: 'u128',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityBondKind>',
        candidateDelegationCount: 'u32',
        delegationCount: 'u32',
      },
      schedule_leave_delegators: 'Null',
      execute_leave_delegators: {
        delegator: 'SpRuntimeAccountAccountId20',
        delegationCount: 'u32',
      },
      cancel_leave_delegators: 'Null',
      schedule_revoke_delegation: {
        collator: 'SpRuntimeAccountAccountId20',
      },
      schedule_delegator_bond_more: {
        candidate: 'SpRuntimeAccountAccountId20',
        more: 'u128',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityBondKind>',
      },
      schedule_delegator_bond_less: {
        candidate: 'SpRuntimeAccountAccountId20',
        less: 'u128',
      },
      execute_delegation_request: {
        delegator: 'SpRuntimeAccountAccountId20',
        candidate: 'SpRuntimeAccountAccountId20',
        useBalanceFrom: 'Option<MangataTypesMultipurposeLiquidityBondKind>',
      },
      cancel_delegation_request: {
        candidate: 'SpRuntimeAccountAccountId20',
      },
      add_staking_liquidity_token: {
        pairedOrLiquidityToken: 'ParachainStakingPairedOrLiquidityToken',
        currentLiquidityTokens: 'u32',
      },
      remove_staking_liquidity_token: {
        pairedOrLiquidityToken: 'ParachainStakingPairedOrLiquidityToken',
        currentLiquidityTokens: 'u32',
      },
      aggregator_update_metadata: {
        collatorCandidates: 'Vec<SpRuntimeAccountAccountId20>',
        action: 'ParachainStakingMetadataUpdateAction',
      },
      update_candidate_aggregator: {
        maybeAggregator: 'Option<SpRuntimeAccountAccountId20>',
      },
      payout_collator_rewards: {
        collator: 'SpRuntimeAccountAccountId20',
        numberOfSesisons: 'Option<u32>',
      },
      payout_delegator_reward: {
        round: 'u32',
        collator: 'SpRuntimeAccountAccountId20',
        delegator: 'SpRuntimeAccountAccountId20'
      }
    }
  },
  /**
   * Lookup190: mangata_types::multipurpose_liquidity::BondKind
   **/
  MangataTypesMultipurposeLiquidityBondKind: {
    _enum: ['AvailableBalance', 'ActivatedUnstakedReserves', 'UnspentReserves']
  },
  /**
   * Lookup191: parachain_staking::pallet::PairedOrLiquidityToken<CurrencyId>
   **/
  ParachainStakingPairedOrLiquidityToken: {
    _enum: {
      Paired: 'u32',
      Liquidity: 'u32'
    }
  },
  /**
   * Lookup192: parachain_staking::MetadataUpdateAction
   **/
  ParachainStakingMetadataUpdateAction: {
    _enum: ['ExtendApprovedCollators', 'RemoveApprovedCollators']
  },
  /**
   * Lookup193: pallet_sequencer_staking::pallet::Call<T>
   **/
  PalletSequencerStakingCall: {
    _enum: {
      provide_sequencer_stake: {
        chain: 'PalletRolldownMessagesChain',
        stakeAmount: 'u128',
        aliasAccount: 'Option<SpRuntimeAccountAccountId20>',
        stakeAction: 'PalletSequencerStakingStakeAction',
      },
      leave_active_sequencers: {
        chain: 'PalletRolldownMessagesChain',
      },
      rejoin_active_sequencers: {
        chain: 'PalletRolldownMessagesChain',
      },
      unstake: {
        chain: 'PalletRolldownMessagesChain',
      },
      set_sequencer_configuration: {
        chain: 'PalletRolldownMessagesChain',
        minimalStakeAmount: 'u128',
        slashFineAmount: 'u128',
      },
      set_updater_account_for_sequencer: {
        chain: 'PalletRolldownMessagesChain',
        aliasAccount: 'Option<SpRuntimeAccountAccountId20>'
      }
    }
  },
  /**
   * Lookup194: pallet_sequencer_staking::StakeAction
   **/
  PalletSequencerStakingStakeAction: {
    _enum: ['StakeOnly', 'StakeAndJoinActiveSet']
  },
  /**
   * Lookup195: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'RollupRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup196: rollup_runtime::SessionKeys
   **/
  RollupRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public',
    grandpa: 'SpConsensusGrandpaAppPublic'
  },
  /**
   * Lookup197: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup198: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup199: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup200: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup201: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup202: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup203: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup204: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup205: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup208: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup209: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup211: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup212: orml_asset_registry::module::Call<T>
   **/
  OrmlAssetRegistryModuleCall: {
    _enum: {
      register_asset: {
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
        assetId: 'Option<u32>',
      },
      update_asset: {
        assetId: 'u32',
        decimals: 'Option<u32>',
        name: 'Option<Bytes>',
        symbol: 'Option<Bytes>',
        existentialDeposit: 'Option<u128>',
        location: 'Option<Option<StagingXcmVersionedMultiLocation>>',
        additional: 'Option<MangataTypesAssetsCustomMetadata>',
      },
      register_l1_asset: {
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
        assetId: 'Option<u32>',
        l1Asset: 'MangataTypesAssetsL1Asset',
      },
      update_l1_asset_data: {
        assetId: 'u32',
        l1Asset: 'Option<MangataTypesAssetsL1Asset>'
      }
    }
  },
  /**
   * Lookup216: mangata_types::assets::L1Asset
   **/
  MangataTypesAssetsL1Asset: {
    _enum: {
      Ethereum: '[u8;20]',
      Arbitrum: '[u8;20]'
    }
  },
  /**
   * Lookup218: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'SpRuntimeAccountAccountId20',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'SpRuntimeAccountAccountId20',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup219: pallet_sudo_mangata::pallet::Call<T>
   **/
  PalletSudoMangataCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpRuntimeAccountAccountId20',
      },
      sudo_as: {
        who: 'SpRuntimeAccountAccountId20',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup220: pallet_sudo_origin::pallet::Call<T>
   **/
  PalletSudoOriginCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      sudo_as: {
        who: 'SpRuntimeAccountAccountId20',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup221: pallet_collective_mangata::pallet::Call<T, I>
   **/
  PalletCollectiveMangataCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<SpRuntimeAccountAccountId20>',
        prime: 'Option<SpRuntimeAccountAccountId20>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup222: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'SpRuntimeAccountAccountId20',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(SpRuntimeAccountAccountId20,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'SpRuntimeAccountAccountId20',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'SpRuntimeAccountAccountId20',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'SpRuntimeAccountAccountId20',
      },
      add_sub: {
        sub: 'SpRuntimeAccountAccountId20',
        data: 'Data',
      },
      rename_sub: {
        sub: 'SpRuntimeAccountAccountId20',
        data: 'Data',
      },
      remove_sub: {
        sub: 'SpRuntimeAccountAccountId20',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup223: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup260: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup261: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup262: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup263: rollup_runtime::OriginCaller
   **/
  RollupRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      Void: 'SpCoreVoid',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      Council: 'PalletCollectiveMangataRawOrigin'
    }
  },
  /**
   * Lookup264: frame_support::dispatch::RawOrigin<sp_runtime::account::AccountId20>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'SpRuntimeAccountAccountId20',
      None: 'Null'
    }
  },
  /**
   * Lookup265: pallet_collective_mangata::RawOrigin<sp_runtime::account::AccountId20, I>
   **/
  PalletCollectiveMangataRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'SpRuntimeAccountAccountId20',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup266: pallet_utility_mangata::pallet::Error<T>
   **/
  PalletUtilityMangataError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup269: pallet_proxy::ProxyDefinition<sp_runtime::account::AccountId20, rollup_runtime::runtime_config::config::pallet_proxy::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'SpRuntimeAccountAccountId20',
    proxyType: 'RollupRuntimeRuntimeConfigConfigPalletProxyProxyType',
    delay: 'u32'
  },
  /**
   * Lookup273: pallet_proxy::Announcement<sp_runtime::account::AccountId20, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'SpRuntimeAccountAccountId20',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup275: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup276: pallet_maintenance::pallet::MaintenanceStatusInfo
   **/
  PalletMaintenanceMaintenanceStatusInfo: {
    isMaintenance: 'bool',
    isUpgradableInMaintenance: 'bool'
  },
  /**
   * Lookup277: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: {
    _enum: ['NotFoundationAccount', 'NotInMaintenanceMode', 'AlreadyInMaintenanceMode', 'AlreadyUpgradableInMaintenanceMode', 'AlreadyNotUpgradableInMaintenanceMode', 'UpgradeBlockedByMaintenance']
  },
  /**
   * Lookup286: pallet_rolldown::pallet::SequencerRights
   **/
  PalletRolldownSequencerRights: {
    readRights: 'u128',
    cancelRights: 'u128'
  },
  /**
   * Lookup291: pallet_rolldown::pallet::L2Request<sp_runtime::account::AccountId20>
   **/
  PalletRolldownL2Request: {
    _enum: {
      FailedDepositResolution: 'PalletRolldownMessagesFailedDepositResolution',
      Cancel: 'PalletRolldownMessagesCancel',
      Withdrawal: 'PalletRolldownMessagesWithdrawal'
    }
  },
  /**
   * Lookup292: pallet_rolldown::messages::FailedDepositResolution
   **/
  PalletRolldownMessagesFailedDepositResolution: {
    requestId: 'PalletRolldownMessagesRequestId',
    originRequestId: 'u128'
  },
  /**
   * Lookup293: pallet_rolldown::messages::Cancel<sp_runtime::account::AccountId20>
   **/
  PalletRolldownMessagesCancel: {
    _alias: {
      hash_: 'hash'
    },
    requestId: 'PalletRolldownMessagesRequestId',
    updater: 'SpRuntimeAccountAccountId20',
    canceler: 'SpRuntimeAccountAccountId20',
    range: {
      start: 'u128',
      end: 'u128'
    },
    hash_: 'H256'
  },
  /**
   * Lookup294: pallet_rolldown::messages::Withdrawal
   **/
  PalletRolldownMessagesWithdrawal: {
    requestId: 'PalletRolldownMessagesRequestId',
    withdrawalRecipient: '[u8;20]',
    tokenAddress: '[u8;20]',
    amount: 'U256'
  },
  /**
   * Lookup298: pallet_rolldown::pallet::DisputeRole
   **/
  PalletRolldownDisputeRole: {
    _enum: ['Canceler', 'Submitter']
  },
  /**
   * Lookup305: pallet_rolldown::pallet::Error<T>
   **/
  PalletRolldownError: {
    _enum: ['OperationFailed', 'ReadRightsExhausted', 'CancelRightsExhausted', 'EmptyUpdate', 'AddressDeserializationFailure', 'RequestDoesNotExist', 'NotEnoughAssets', 'BalanceOverflow', 'L1AssetCreationFailed', 'MathOverflow', 'TooManyRequests', 'InvalidUpdate', 'L1AssetNotFound', 'WrongRequestId', 'OnlySelectedSequencerisAllowedToUpdate', 'SequencerLastUpdateStillInDisputePeriod', 'SequencerAwaitingCancelResolution', 'MultipleUpdatesInSingleBlock', 'BlockedByMaintenanceMode', 'UnsupportedAsset', 'InvalidRange', 'NonExistingRequestId', 'UnknownAliasAccount', 'FailedDepositDoesExists', 'EmptyBatch', 'TokenDoesNotExist', 'NotDepositRecipient']
  },
  /**
   * Lookup306: pallet_metamask_signature::pallet::Error<T>
   **/
  PalletMetamaskSignatureError: {
    _enum: ['NothingToUpdate']
  },
  /**
   * Lookup309: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup311: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup313: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup315: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TokenIdNotExists', 'TooManyReserves']
  },
  /**
   * Lookup317: pallet_transaction_payment_mangata::Releases
   **/
  PalletTransactionPaymentMangataReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup319: pallet_xyk::pallet::Error<T>
   **/
  PalletXykError: {
    _enum: ['PoolAlreadyExists', 'NotEnoughAssets', 'NoSuchPool', 'NoSuchLiquidityAsset', 'NotEnoughReserve', 'ZeroAmount', 'InsufficientInputAmount', 'InsufficientOutputAmount', 'SameAsset', 'AssetAlreadyExists', 'AssetDoesNotExists', 'DivisionByZero', 'UnexpectedFailure', 'NotMangataLiquidityAsset', 'SecondAssetAmountExceededExpectations', 'MathOverflow', 'LiquidityTokenCreationFailed', 'NotEnoughRewardsEarned', 'NotAPromotedPool', 'PastTimeCalculation', 'PoolAlreadyPromoted', 'SoldAmountTooLow', 'FunctionNotAvailableForThisToken', 'DisallowedPool', 'LiquidityCheckpointMathError', 'CalculateRewardsMathError', 'CalculateCumulativeWorkMaxRatioMathError', 'CalculateRewardsAllMathError', 'NoRights', 'MultiswapShouldBeAtleastTwoHops', 'MultiBuyAssetCantHaveSamePoolAtomicSwaps', 'MultiSwapCantHaveSameTokenConsequetively', 'TradingBlockedByMaintenanceMode', 'PoolIsEmpty']
  },
  /**
   * Lookup320: pallet_proof_of_stake::reward_info::RewardInfo<Balance>
   **/
  PalletProofOfStakeRewardInfo: {
    activatedAmount: 'u128',
    rewardsNotYetClaimed: 'u128',
    rewardsAlreadyClaimed: 'u128',
    lastCheckpoint: 'u32',
    poolRatioAtLastCheckpoint: 'U256',
    missingAtLastCheckpoint: 'U256'
  },
  /**
   * Lookup322: pallet_proof_of_stake::pallet::PromotedPools
   **/
  PalletProofOfStakePromotedPools: {
    weight: 'u8',
    rewards: 'U256'
  },
  /**
   * Lookup326: pallet_proof_of_stake::schedule_rewards_calculator::ScheduleRewards<Balance>
   **/
  PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards: {
    pending: 'u128',
    pendingSessionId: 'u32',
    total: 'u128'
  },
  /**
   * Lookup333: pallet_proof_of_stake::SchedulesList
   **/
  PalletProofOfStakeSchedulesList: {
    head: 'Option<u64>',
    tail: 'Option<u64>',
    pos: 'Option<u64>',
    count: 'u64'
  },
  /**
   * Lookup335: pallet_proof_of_stake::Schedule<T>
   **/
  PalletProofOfStakeSchedule: {
    scheduledAt: 'u32',
    lastSession: 'u32',
    liqToken: 'u32',
    rewardToken: 'u32',
    amountPerSession: 'u128'
  },
  /**
   * Lookup336: pallet_proof_of_stake::schedule_rewards_calculator::ActivatedLiquidityPerSchedule<Balance>
   **/
  PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule: {
    pendingPositive: 'u128',
    pendingNegative: 'u128',
    pendingSessionId: 'u32',
    total: 'u128'
  },
  /**
   * Lookup338: pallet_proof_of_stake::pallet::Error<T>
   **/
  PalletProofOfStakeError: {
    _enum: ['NotEnoughAssets', 'MathOverflow', 'NotEnoughRewardsEarned', 'NotAPromotedPool', 'PastTimeCalculation', 'LiquidityCheckpointMathError', 'CalculateRewardsMathError', 'MathError', 'CalculateRewardsAllMathError', 'MissingRewardsInfoError', 'DeprecatedExtrinsic', 'CannotScheduleRewardsInPast', 'PoolDoesNotExist', 'TooManySchedules', 'TooLittleRewards', 'TooSmallVolume', 'LiquidityLockedIn3rdpartyRewards', 'NoThirdPartyPartyRewardsToClaim', 'SoloTokenPromotionForbiddenError']
  },
  /**
   * Lookup339: pallet_fee_lock::pallet::FeeLockMetadataInfo<T>
   **/
  PalletFeeLockFeeLockMetadataInfo: {
    periodLength: 'u32',
    feeLockAmount: 'u128',
    swapValueThreshold: 'u128',
    whitelistedTokens: 'BTreeSet<u32>'
  },
  /**
   * Lookup342: pallet_fee_lock::pallet::AccountFeeLockDataInfo<BlockNumber, Balance>
   **/
  PalletFeeLockAccountFeeLockDataInfo: {
    totalFeeLockAmount: 'u128',
    lastFeeLockBlock: 'u32'
  },
  /**
   * Lookup343: pallet_fee_lock::pallet::Error<T>
   **/
  PalletFeeLockError: {
    _enum: ['FeeLocksIncorrectlyInitialzed', 'InvalidFeeLockMetadata', 'FeeLocksNotInitialized', 'NotFeeLocked', 'CantUnlockFeeYet', 'MaxCuratedTokensLimitExceeded', 'UnexpectedFailure']
  },
  /**
   * Lookup346: pallet_vesting_mangata::Releases
   **/
  PalletVestingMangataReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup347: pallet_vesting_mangata::pallet::Error<T>
   **/
  PalletVestingMangataError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams', 'NoSuitableScheduleFound', 'SudoUnlockIsDisallowed', 'InvalidVestingIndex', 'MathError']
  },
  /**
   * Lookup349: pallet_crowdloan_rewards::pallet::RewardInfo<T>
   **/
  PalletCrowdloanRewardsRewardInfo: {
    totalReward: 'u128',
    claimedReward: 'u128',
    contributedRelayAddresses: 'Vec<SpRuntimeAccountAccountId20>'
  },
  /**
   * Lookup350: pallet_crowdloan_rewards::pallet::Error<T>
   **/
  PalletCrowdloanRewardsError: {
    _enum: ['AlreadyAssociated', 'BatchBeyondFundPot', 'FirstClaimAlreadyDone', 'RewardNotHighEnough', 'InvalidClaimSignature', 'InvalidFreeClaimSignature', 'NoAssociatedClaim', 'RewardsAlreadyClaimed', 'RewardVecAlreadyInitialized', 'RewardVecNotFullyInitializedYet', 'RewardsDoNotMatchFund', 'TooManyContributors', 'VestingPeriodNonValid', 'NonContributedAddressProvided', 'InsufficientNumberOfValidProofs', 'ClaimingLessThanED', 'MathOverflow', 'PeriodNotSet', 'AllocationDoesNotMatch']
  },
  /**
   * Lookup352: pallet_issuance::pallet::Error<T>
   **/
  PalletIssuanceError: {
    _enum: ['IssuanceConfigAlreadyInitialized', 'IssuanceConfigNotInitialized', 'TGENotFinalized', 'TGEIsAlreadyFinalized', 'IssuanceConfigInvalid', 'MathError', 'UnknownPool']
  },
  /**
   * Lookup353: pallet_multipurpose_liquidity::pallet::ReserveStatusInfo<Balance>
   **/
  PalletMultipurposeLiquidityReserveStatusInfo: {
    stakedUnactivatedReserves: 'u128',
    activatedUnstakedReserves: 'u128',
    stakedAndActivatedReserves: 'u128',
    unspentReserves: 'u128',
    relockAmount: 'u128'
  },
  /**
   * Lookup355: pallet_multipurpose_liquidity::pallet::RelockStatusInfo<Balance, BlockNumber>
   **/
  PalletMultipurposeLiquidityRelockStatusInfo: {
    amount: 'u128',
    startingBlock: 'u32',
    endingBlockAsBalance: 'u128'
  },
  /**
   * Lookup357: pallet_multipurpose_liquidity::pallet::Error<T>
   **/
  PalletMultipurposeLiquidityError: {
    _enum: ['NotALiquidityToken', 'RelockCountLimitExceeded', 'RelockInstanceIndexOOB', 'NotEnoughUnspentReserves', 'NotEnoughTokens', 'MathError']
  },
  /**
   * Lookup359: pallet_bootstrap::BootstrapPhase
   **/
  PalletBootstrapBootstrapPhase: {
    _enum: ['BeforeStart', 'Whitelist', 'Public', 'Finished']
  },
  /**
   * Lookup363: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup364: pallet_bootstrap::pallet::Error<T>
   **/
  PalletBootstrapError: {
    _enum: ['UnsupportedTokenId', 'NotEnoughAssets', 'NotEnoughVestedAssets', 'MathOverflow', 'Unauthorized', 'BootstrapStartInThePast', 'PhaseLengthCannotBeZero', 'AlreadyStarted', 'ValuationRatio', 'FirstProvisionInSecondTokenId', 'PoolAlreadyExists', 'NotFinishedYet', 'NothingToClaim', 'WrongRatio', 'BootstrapNotReadyToBeFinished', 'SameToken', 'TokenIdDoesNotExists', 'TokensActivationFailed', 'BootstrapNotSchduled', 'BootstrapFinished', 'TooLateToUpdateBootstrap', 'ProvisioningBlockedByMaintenanceMode', 'BootstrapMustBePreFinalized']
  },
  /**
   * Lookup365: parachain_staking::pallet::RoundInfo<BlockNumber>
   **/
  ParachainStakingRoundInfo: {
    current: 'u32',
    first: 'u32',
    length: 'u32'
  },
  /**
   * Lookup366: parachain_staking::pallet::Delegator<sp_runtime::account::AccountId20, Balance, CurrencyId>
   **/
  ParachainStakingDelegator: {
    id: 'SpRuntimeAccountAccountId20',
    delegations: 'ParachainStakingSetOrderedSetBond',
    requests: 'ParachainStakingPendingDelegationRequests',
    status: 'ParachainStakingDelegatorStatus'
  },
  /**
   * Lookup367: parachain_staking::set::OrderedSet<parachain_staking::pallet::Bond<sp_runtime::account::AccountId20, Balance, CurrencyId>>
   **/
  ParachainStakingSetOrderedSetBond: 'Vec<ParachainStakingBond>',
  /**
   * Lookup368: parachain_staking::pallet::Bond<sp_runtime::account::AccountId20, Balance, CurrencyId>
   **/
  ParachainStakingBond: {
    owner: 'SpRuntimeAccountAccountId20',
    amount: 'u128',
    liquidityToken: 'u32'
  },
  /**
   * Lookup370: parachain_staking::pallet::PendingDelegationRequests<sp_runtime::account::AccountId20, Balance>
   **/
  ParachainStakingPendingDelegationRequests: {
    requests: 'BTreeMap<SpRuntimeAccountAccountId20, ParachainStakingDelegationRequest>'
  },
  /**
   * Lookup374: parachain_staking::pallet::DelegatorStatus
   **/
  ParachainStakingDelegatorStatus: {
    _enum: {
      Active: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup375: parachain_staking::pallet::CollatorCandidate<sp_runtime::account::AccountId20, Balance, CurrencyId>
   **/
  ParachainStakingCollatorCandidate: {
    id: 'SpRuntimeAccountAccountId20',
    bond: 'u128',
    liquidityToken: 'u32',
    delegators: 'ParachainStakingSetOrderedSetAccountId20',
    topDelegations: 'Vec<ParachainStakingBond>',
    bottomDelegations: 'Vec<ParachainStakingBond>',
    totalCounted: 'u128',
    totalBacking: 'u128',
    request: 'Option<ParachainStakingCandidateBondRequest>',
    state: 'ParachainStakingCollatorStatus'
  },
  /**
   * Lookup376: parachain_staking::set::OrderedSet<sp_runtime::account::AccountId20>
   **/
  ParachainStakingSetOrderedSetAccountId20: 'Vec<SpRuntimeAccountAccountId20>',
  /**
   * Lookup378: parachain_staking::pallet::CollatorStatus
   **/
  ParachainStakingCollatorStatus: {
    _enum: {
      Active: 'Null',
      Idle: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup379: parachain_staking::pallet::CollatorSnapshot<sp_runtime::account::AccountId20, Balance, CurrencyId>
   **/
  ParachainStakingCollatorSnapshot: {
    bond: 'u128',
    delegations: 'Vec<ParachainStakingBond>',
    total: 'u128',
    liquidityToken: 'u32'
  },
  /**
   * Lookup386: parachain_staking::pallet::AggregatorMetadataType<sp_runtime::account::AccountId20, CurrencyId>
   **/
  ParachainStakingAggregatorMetadataType: {
    tokenCollatorMap: 'BTreeMap<u32, SpRuntimeAccountAccountId20>',
    approvedCandidates: 'BTreeSet<SpRuntimeAccountAccountId20>'
  },
  /**
   * Lookup396: parachain_staking::pallet::RoundCollatorRewardInfoType<sp_runtime::account::AccountId20, Balance>
   **/
  ParachainStakingRoundCollatorRewardInfoType: {
    collatorReward: 'u128',
    delegatorRewards: 'BTreeMap<SpRuntimeAccountAccountId20, u128>'
  },
  /**
   * Lookup397: parachain_staking::pallet::Error<T>
   **/
  ParachainStakingError: {
    _enum: ['DelegatorDNE', 'DelegatorDNEinTopNorBottom', 'DelegatorDNEInDelegatorSet', 'CandidateDNE', 'DelegationDNE', 'DelegatorExists', 'CandidateExists', 'CandidateBondBelowMin', 'InsufficientBalance', 'DelegationBelowMin', 'AlreadyOffline', 'AlreadyActive', 'DelegatorAlreadyLeaving', 'DelegatorNotLeaving', 'DelegatorCannotLeaveYet', 'CannotDelegateIfLeaving', 'CandidateAlreadyLeaving', 'CandidateNotLeaving', 'CandidateCannotLeaveYet', 'CannotGoOnlineIfLeaving', 'ExceedMaxDelegationsPerDelegator', 'AlreadyDelegatedCandidate', 'InvalidSchedule', 'CannotSetBelowMin', 'NoWritingSameValue', 'TooLowCandidateCountWeightHintJoinCandidates', 'TooLowCandidateCountWeightHintCancelLeaveCandidates', 'TooLowCandidateCountToLeaveCandidates', 'TooLowDelegationCountToDelegate', 'TooLowCandidateDelegationCountToDelegate', 'TooLowDelegationCountToLeaveDelegators', 'PendingCandidateRequestsDNE', 'PendingCandidateRequestAlreadyExists', 'PendingCandidateRequestNotDueYet', 'PendingDelegationRequestDNE', 'PendingDelegationRequestAlreadyExists', 'PendingDelegationRequestNotDueYet', 'StakingLiquidityTokenNotListed', 'TooLowCurrentStakingLiquidityTokensCount', 'StakingLiquidityTokenAlreadyListed', 'ExceedMaxCollatorCandidates', 'ExceedMaxTotalDelegatorsPerCandidate', 'CandidateNotAggregating', 'CandidateNotAggregatingUnderAggregator', 'CandidateAlreadyApprovedByAggregator', 'AggregatorExists', 'CollatorRoundRewardsDNE', 'DelegatorRewardsDNE', 'AggregatorDNE', 'TargettedAggregatorSameAsCurrent', 'CandidateNotApprovedByAggregator', 'AggregatorLiquidityTokenTaken', 'IncorrectRewardDelegatorCount', 'MathError']
  },
  /**
   * Lookup408: pallet_sequencer_staking::pallet::Error<T>
   **/
  PalletSequencerStakingError: {
    _enum: ['OperationFailed', 'MathOverflow', 'SequencerIsNotInActiveSet', 'SequencerAlreadyInActiveSet', 'CantUnstakeWhileInActiveSet', 'NotEnoughSequencerStake', 'MaxSequencersLimitReached', 'TestUnstakingError', 'UnknownChainId', 'NoStakeToUnStake', 'AddressInUse', 'AliasAccountIsActiveSequencer', 'SequencerAccountIsActiveSequencerAlias']
  },
  /**
   * Lookup412: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup413: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup417: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup418: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup420: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup421: orml_asset_registry::module::Error<T>
   **/
  OrmlAssetRegistryModuleError: {
    _enum: ['AssetNotFound', 'BadVersion', 'InvalidAssetId', 'ConflictingLocation', 'ConflictingAssetId', 'InvalidAssetString', 'ConflictingL1Asset']
  },
  /**
   * Lookup422: pallet_treasury::Proposal<sp_runtime::account::AccountId20, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'SpRuntimeAccountAccountId20',
    value: 'u128',
    beneficiary: 'SpRuntimeAccountAccountId20',
    bond: 'u128'
  },
  /**
   * Lookup424: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup425: pallet_sudo_mangata::pallet::Error<T>
   **/
  PalletSudoMangataError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup426: pallet_sudo_origin::pallet::Error<T>
   **/
  PalletSudoOriginError: 'Null',
  /**
   * Lookup428: pallet_collective_mangata::Votes<sp_runtime::account::AccountId20, BlockNumber>
   **/
  PalletCollectiveMangataVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<SpRuntimeAccountAccountId20>',
    nays: 'Vec<SpRuntimeAccountAccountId20>',
    end: 'u32'
  },
  /**
   * Lookup429: pallet_collective_mangata::pallet::Error<T, I>
   **/
  PalletCollectiveMangataError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooEarlyToCloseByNonFoundationAccount', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember', 'NotFoundationAccountOrRoot']
  },
  /**
   * Lookup430: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup438: pallet_identity::types::RegistrarInfo<Balance, sp_runtime::account::AccountId20>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'SpRuntimeAccountAccountId20',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup440: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup443: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup444: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup445: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup448: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup449: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup450: pallet_transaction_payment_mangata::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentMangataChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup451: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup452: rollup_runtime::Runtime
   **/
  RollupRuntimeRuntime: 'Null'
};
