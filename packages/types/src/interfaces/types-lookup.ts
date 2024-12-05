// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Call, H256, Perbill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name SpRuntimeAccountAccountId20 (0) */
  interface SpRuntimeAccountAccountId20 extends U8aFixed {}

  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: Null;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (8) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (21) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (23) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (26) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (28) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: SpRuntimeAccountAccountId20;
      readonly hash_: H256;
    } & Struct;
    readonly isTxsEnqueued: boolean;
    readonly asTxsEnqueued: {
      readonly count: u64;
    } & Struct;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'TxsEnqueued' | 'UpgradeAuthorized';
  }

  /** @name FrameSupportDispatchDispatchInfo (29) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (30) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (31) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (32) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (33) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (34) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (35) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (36) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletUtilityMangataEvent (37) */
  interface PalletUtilityMangataEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletProxyEvent (39) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: SpRuntimeAccountAccountId20;
      readonly who: SpRuntimeAccountAccountId20;
      readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: SpRuntimeAccountAccountId20;
      readonly proxy: SpRuntimeAccountAccountId20;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: SpRuntimeAccountAccountId20;
      readonly delegatee: SpRuntimeAccountAccountId20;
      readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: SpRuntimeAccountAccountId20;
      readonly delegatee: SpRuntimeAccountAccountId20;
      readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name RollupRuntimeRuntimeConfigConfigPalletProxyProxyType (40) */
  interface RollupRuntimeRuntimeConfigConfigPalletProxyProxyType extends Enum {
    readonly isAutoCompound: boolean;
    readonly type: 'AutoCompound';
  }

  /** @name PalletMaintenanceEvent (42) */
  interface PalletMaintenanceEvent extends Enum {
    readonly isMaintenanceModeSwitchedOn: boolean;
    readonly asMaintenanceModeSwitchedOn: SpRuntimeAccountAccountId20;
    readonly isMaintenanceModeSwitchedOff: boolean;
    readonly asMaintenanceModeSwitchedOff: SpRuntimeAccountAccountId20;
    readonly isUpgradabilityInMaintenanceModeSwitchedOn: boolean;
    readonly asUpgradabilityInMaintenanceModeSwitchedOn: SpRuntimeAccountAccountId20;
    readonly isUpgradabilityInMaintenanceModeSwitchedOff: boolean;
    readonly asUpgradabilityInMaintenanceModeSwitchedOff: SpRuntimeAccountAccountId20;
    readonly isMaintenanceModeSwitchedOnExternally: boolean;
    readonly type: 'MaintenanceModeSwitchedOn' | 'MaintenanceModeSwitchedOff' | 'UpgradabilityInMaintenanceModeSwitchedOn' | 'UpgradabilityInMaintenanceModeSwitchedOff' | 'MaintenanceModeSwitchedOnExternally';
  }

  /** @name PalletRolldownEvent (43) */
  interface PalletRolldownEvent extends Enum {
    readonly isL1ReadStored: boolean;
    readonly asL1ReadStored: {
      readonly chain: PalletRolldownMessagesChain;
      readonly sequencer: SpRuntimeAccountAccountId20;
      readonly disputePeriodEnd: u128;
      readonly range: {
      readonly start: u128;
      readonly end: u128;
    } & Struct;
      readonly hash_: H256;
    } & Struct;
    readonly isRequestProcessedOnL2: boolean;
    readonly asRequestProcessedOnL2: {
      readonly chain: PalletRolldownMessagesChain;
      readonly requestId: u128;
      readonly status: Result<Null, PalletRolldownL1RequestProcessingError>;
    } & Struct;
    readonly isL1ReadCanceled: boolean;
    readonly asL1ReadCanceled: {
      readonly chain: PalletRolldownMessagesChain;
      readonly canceledSequencerUpdate: u128;
      readonly assignedId: PalletRolldownMessagesRequestId;
    } & Struct;
    readonly isTxBatchCreated: boolean;
    readonly asTxBatchCreated: {
      readonly chain: PalletRolldownMessagesChain;
      readonly source: PalletRolldownBatchSource;
      readonly assignee: SpRuntimeAccountAccountId20;
      readonly batchId: u128;
      readonly range: ITuple<[u128, u128]>;
    } & Struct;
    readonly isWithdrawalRequestCreated: boolean;
    readonly asWithdrawalRequestCreated: {
      readonly chain: PalletRolldownMessagesChain;
      readonly requestId: PalletRolldownMessagesRequestId;
      readonly recipient: U8aFixed;
      readonly tokenAddress: U8aFixed;
      readonly amount: u128;
      readonly hash_: H256;
      readonly ferryTip: u128;
    } & Struct;
    readonly isManualBatchExtraFeeSet: boolean;
    readonly asManualBatchExtraFeeSet: u128;
    readonly isDepositRefundCreated: boolean;
    readonly asDepositRefundCreated: {
      readonly chain: PalletRolldownMessagesChain;
      readonly refundedRequestId: PalletRolldownMessagesRequestId;
      readonly ferry: Option<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly isL1ReadScheduledForExecution: boolean;
    readonly asL1ReadScheduledForExecution: {
      readonly chain: PalletRolldownMessagesChain;
      readonly hash_: H256;
    } & Struct;
    readonly isL1ReadIgnoredBecauseOfMaintenanceMode: boolean;
    readonly asL1ReadIgnoredBecauseOfMaintenanceMode: {
      readonly chain: PalletRolldownMessagesChain;
      readonly hash_: H256;
    } & Struct;
    readonly isL1ReadIgnoredBecauseOfUnknownDisputePeriod: boolean;
    readonly asL1ReadIgnoredBecauseOfUnknownDisputePeriod: {
      readonly chain: PalletRolldownMessagesChain;
      readonly hash_: H256;
    } & Struct;
    readonly isDepositFerried: boolean;
    readonly asDepositFerried: {
      readonly chain: PalletRolldownMessagesChain;
      readonly deposit: PalletRolldownMessagesDeposit;
      readonly depositHash: H256;
    } & Struct;
    readonly isL1ReadExecuted: boolean;
    readonly asL1ReadExecuted: {
      readonly chain: PalletRolldownMessagesChain;
      readonly hash_: H256;
    } & Struct;
    readonly isDisputePeriodSet: boolean;
    readonly asDisputePeriodSet: {
      readonly chain: PalletRolldownMessagesChain;
      readonly disputePeriodLength: u128;
    } & Struct;
    readonly type: 'L1ReadStored' | 'RequestProcessedOnL2' | 'L1ReadCanceled' | 'TxBatchCreated' | 'WithdrawalRequestCreated' | 'ManualBatchExtraFeeSet' | 'DepositRefundCreated' | 'L1ReadScheduledForExecution' | 'L1ReadIgnoredBecauseOfMaintenanceMode' | 'L1ReadIgnoredBecauseOfUnknownDisputePeriod' | 'DepositFerried' | 'L1ReadExecuted' | 'DisputePeriodSet';
  }

  /** @name PalletRolldownMessagesChain (44) */
  interface PalletRolldownMessagesChain extends Enum {
    readonly isEthereum: boolean;
    readonly isArbitrum: boolean;
    readonly isBase: boolean;
    readonly type: 'Ethereum' | 'Arbitrum' | 'Base';
  }

  /** @name PalletRolldownL1RequestProcessingError (48) */
  interface PalletRolldownL1RequestProcessingError extends Enum {
    readonly isOverflow: boolean;
    readonly isAssetRegistrationProblem: boolean;
    readonly isMintError: boolean;
    readonly isNotEnoughtCancelRights: boolean;
    readonly isWrongCancelRequestId: boolean;
    readonly isSequencerNotSlashed: boolean;
    readonly type: 'Overflow' | 'AssetRegistrationProblem' | 'MintError' | 'NotEnoughtCancelRights' | 'WrongCancelRequestId' | 'SequencerNotSlashed';
  }

  /** @name PalletRolldownMessagesRequestId (49) */
  interface PalletRolldownMessagesRequestId extends Struct {
    readonly origin: PalletRolldownMessagesOrigin;
    readonly id: u128;
  }

  /** @name PalletRolldownMessagesOrigin (50) */
  interface PalletRolldownMessagesOrigin extends Enum {
    readonly isL1: boolean;
    readonly isL2: boolean;
    readonly type: 'L1' | 'L2';
  }

  /** @name PalletRolldownBatchSource (51) */
  interface PalletRolldownBatchSource extends Enum {
    readonly isManual: boolean;
    readonly isAutomaticSizeReached: boolean;
    readonly isPeriodReached: boolean;
    readonly type: 'Manual' | 'AutomaticSizeReached' | 'PeriodReached';
  }

  /** @name PalletRolldownMessagesDeposit (53) */
  interface PalletRolldownMessagesDeposit extends Struct {
    readonly requestId: PalletRolldownMessagesRequestId;
    readonly depositRecipient: U8aFixed;
    readonly tokenAddress: U8aFixed;
    readonly amount: U256;
    readonly timeStamp: U256;
    readonly ferryTip: U256;
  }

  /** @name PalletMetamaskSignatureEvent (56) */
  interface PalletMetamaskSignatureEvent extends Enum {
    readonly isMetadataUpdated: boolean;
    readonly asMetadataUpdated: {
      readonly name: Option<Bytes>;
      readonly version: Option<Bytes>;
      readonly chainId: Option<u64>;
      readonly decodeUrl: Option<Bytes>;
    } & Struct;
    readonly type: 'MetadataUpdated';
  }

  /** @name OrmlTokensModuleEvent (62) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly from: SpRuntimeAccountAccountId20;
      readonly to: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: u32;
      readonly from: SpRuntimeAccountAccountId20;
      readonly to: SpRuntimeAccountAccountId20;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: ITuple<[u32, SpRuntimeAccountAccountId20, u128]>;
    readonly isMinted: boolean;
    readonly asMinted: ITuple<[u32, SpRuntimeAccountAccountId20, u128]>;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: u128;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Created' | 'Minted' | 'Locked' | 'Unlocked' | 'Issued' | 'Rescinded';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (63) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (65) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly tokenId: u32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletStableSwapEvent (66) */
  interface PalletStableSwapEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly creator: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly lpToken: u32;
      readonly assets: Vec<u32>;
    } & Struct;
    readonly isLiquidityMinted: boolean;
    readonly asLiquidityMinted: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly amountsProvided: Vec<u128>;
      readonly lpToken: u32;
      readonly lpTokenMinted: u128;
      readonly totalSupply: u128;
      readonly fees: Vec<u128>;
    } & Struct;
    readonly isAssetsSwapped: boolean;
    readonly asAssetsSwapped: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly assetIn: u32;
      readonly amountIn: u128;
      readonly assetOut: u32;
      readonly amountOut: u128;
    } & Struct;
    readonly isLiquidityBurnedOne: boolean;
    readonly asLiquidityBurnedOne: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly assetId: u32;
      readonly amount: u128;
      readonly burnedAmount: u128;
      readonly totalSupply: u128;
    } & Struct;
    readonly isLiquidityBurned: boolean;
    readonly asLiquidityBurned: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly amounts: Vec<u128>;
      readonly burnedAmount: u128;
      readonly totalSupply: u128;
      readonly fees: Vec<u128>;
    } & Struct;
    readonly type: 'PoolCreated' | 'LiquidityMinted' | 'AssetsSwapped' | 'LiquidityBurnedOne' | 'LiquidityBurned';
  }

  /** @name PalletXykEvent (71) */
  interface PalletXykEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: ITuple<[SpRuntimeAccountAccountId20, u32, u128, u32, u128]>;
    readonly isAssetsSwapped: boolean;
    readonly asAssetsSwapped: ITuple<[SpRuntimeAccountAccountId20, Vec<u32>, u128, u128]>;
    readonly isSellAssetFailedDueToSlippage: boolean;
    readonly asSellAssetFailedDueToSlippage: ITuple<[SpRuntimeAccountAccountId20, u32, u128, u32, u128, u128]>;
    readonly isBuyAssetFailedDueToSlippage: boolean;
    readonly asBuyAssetFailedDueToSlippage: ITuple<[SpRuntimeAccountAccountId20, u32, u128, u32, u128, u128]>;
    readonly isLiquidityMinted: boolean;
    readonly asLiquidityMinted: ITuple<[SpRuntimeAccountAccountId20, u32, u128, u32, u128, u32, u128]>;
    readonly isLiquidityBurned: boolean;
    readonly asLiquidityBurned: ITuple<[SpRuntimeAccountAccountId20, u32, u128, u32, u128, u32, u128]>;
    readonly isPoolPromotionUpdated: boolean;
    readonly asPoolPromotionUpdated: ITuple<[u32, Option<u8>]>;
    readonly isLiquidityActivated: boolean;
    readonly asLiquidityActivated: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isLiquidityDeactivated: boolean;
    readonly asLiquidityDeactivated: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isMultiSwapAssetFailedOnAtomicSwap: boolean;
    readonly asMultiSwapAssetFailedOnAtomicSwap: ITuple<[SpRuntimeAccountAccountId20, Vec<u32>, u128, SpRuntimeModuleError]>;
    readonly type: 'PoolCreated' | 'AssetsSwapped' | 'SellAssetFailedDueToSlippage' | 'BuyAssetFailedDueToSlippage' | 'LiquidityMinted' | 'LiquidityBurned' | 'PoolPromotionUpdated' | 'LiquidityActivated' | 'LiquidityDeactivated' | 'RewardsClaimed' | 'MultiSwapAssetFailedOnAtomicSwap';
  }

  /** @name PalletProofOfStakeEvent (73) */
  interface PalletProofOfStakeEvent extends Enum {
    readonly isPoolPromotionUpdated: boolean;
    readonly asPoolPromotionUpdated: ITuple<[u32, Option<u8>]>;
    readonly isLiquidityActivated: boolean;
    readonly asLiquidityActivated: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isLiquidityDeactivated: boolean;
    readonly asLiquidityDeactivated: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isThirdPartyRewardsClaimed: boolean;
    readonly asThirdPartyRewardsClaimed: ITuple<[SpRuntimeAccountAccountId20, u32, u32, u128]>;
    readonly isThirdPartyLiquidityActivated: boolean;
    readonly asThirdPartyLiquidityActivated: ITuple<[SpRuntimeAccountAccountId20, u32, u32, u128]>;
    readonly isThirdPartyLiquidityDeactivated: boolean;
    readonly asThirdPartyLiquidityDeactivated: ITuple<[SpRuntimeAccountAccountId20, u32, u32, u128]>;
    readonly isThirdPartySuccessfulPoolPromotion: boolean;
    readonly asThirdPartySuccessfulPoolPromotion: ITuple<[SpRuntimeAccountAccountId20, u32, u32, u128]>;
    readonly type: 'PoolPromotionUpdated' | 'LiquidityActivated' | 'LiquidityDeactivated' | 'RewardsClaimed' | 'ThirdPartyRewardsClaimed' | 'ThirdPartyLiquidityActivated' | 'ThirdPartyLiquidityDeactivated' | 'ThirdPartySuccessfulPoolPromotion';
  }

  /** @name PalletFeeLockEvent (74) */
  interface PalletFeeLockEvent extends Enum {
    readonly isFeeLockMetadataUpdated: boolean;
    readonly isFeeLockUnlocked: boolean;
    readonly asFeeLockUnlocked: ITuple<[SpRuntimeAccountAccountId20, u128]>;
    readonly isFeeLocked: boolean;
    readonly asFeeLocked: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly lockAmount: u128;
      readonly totalLocked: u128;
    } & Struct;
    readonly type: 'FeeLockMetadataUpdated' | 'FeeLockUnlocked' | 'FeeLocked';
  }

  /** @name PalletVestingMangataEvent (75) */
  interface PalletVestingMangataEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: SpRuntimeAccountAccountId20;
      readonly tokenId: u32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: SpRuntimeAccountAccountId20;
      readonly tokenId: u32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletCrowdloanRewardsEvent (76) */
  interface PalletCrowdloanRewardsEvent extends Enum {
    readonly isInitialPaymentMade: boolean;
    readonly asInitialPaymentMade: ITuple<[SpRuntimeAccountAccountId20, u128]>;
    readonly isNativeIdentityAssociated: boolean;
    readonly asNativeIdentityAssociated: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128]>;
    readonly isRewardsPaid: boolean;
    readonly asRewardsPaid: ITuple<[SpRuntimeAccountAccountId20, u128]>;
    readonly isRewardAddressUpdated: boolean;
    readonly asRewardAddressUpdated: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20]>;
    readonly isInitializedAlreadyInitializedAccount: boolean;
    readonly asInitializedAlreadyInitializedAccount: ITuple<[SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>, u128]>;
    readonly isInitializedAccountWithNotEnoughContribution: boolean;
    readonly asInitializedAccountWithNotEnoughContribution: ITuple<[SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>, u128]>;
    readonly type: 'InitialPaymentMade' | 'NativeIdentityAssociated' | 'RewardsPaid' | 'RewardAddressUpdated' | 'InitializedAlreadyInitializedAccount' | 'InitializedAccountWithNotEnoughContribution';
  }

  /** @name PalletIssuanceEvent (77) */
  interface PalletIssuanceEvent extends Enum {
    readonly isSessionIssuanceIssued: boolean;
    readonly asSessionIssuanceIssued: ITuple<[u32, u128, u128, u128]>;
    readonly isSessionIssuanceRecorded: boolean;
    readonly asSessionIssuanceRecorded: ITuple<[u32, u128, u128, u128]>;
    readonly isIssuanceConfigInitialized: boolean;
    readonly asIssuanceConfigInitialized: PalletIssuanceIssuanceInfo;
    readonly isTgeFinalized: boolean;
    readonly isTgeInstanceFailed: boolean;
    readonly asTgeInstanceFailed: PalletIssuanceTgeInfo;
    readonly isTgeInstanceSucceeded: boolean;
    readonly asTgeInstanceSucceeded: PalletIssuanceTgeInfo;
    readonly type: 'SessionIssuanceIssued' | 'SessionIssuanceRecorded' | 'IssuanceConfigInitialized' | 'TgeFinalized' | 'TgeInstanceFailed' | 'TgeInstanceSucceeded';
  }

  /** @name PalletIssuanceIssuanceInfo (78) */
  interface PalletIssuanceIssuanceInfo extends Struct {
    readonly cap: u128;
    readonly issuanceAtInit: u128;
    readonly linearIssuanceBlocks: u32;
    readonly liquidityMiningSplit: Perbill;
    readonly stakingSplit: Perbill;
    readonly sequencersSplit: Perbill;
    readonly totalCrowdloanAllocation: u128;
  }

  /** @name PalletIssuanceTgeInfo (80) */
  interface PalletIssuanceTgeInfo extends Struct {
    readonly who: SpRuntimeAccountAccountId20;
    readonly amount: u128;
  }

  /** @name PalletMultipurposeLiquidityEvent (81) */
  interface PalletMultipurposeLiquidityEvent extends Enum {
    readonly isVestingTokensReserved: boolean;
    readonly asVestingTokensReserved: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isTokensRelockedFromReserve: boolean;
    readonly asTokensRelockedFromReserve: ITuple<[SpRuntimeAccountAccountId20, u32, u128, u128]>;
    readonly type: 'VestingTokensReserved' | 'TokensRelockedFromReserve';
  }

  /** @name PalletBootstrapEvent (82) */
  interface PalletBootstrapEvent extends Enum {
    readonly isProvisioned: boolean;
    readonly asProvisioned: ITuple<[u32, u128]>;
    readonly isVestedProvisioned: boolean;
    readonly asVestedProvisioned: ITuple<[u32, u128]>;
    readonly isRewardsLiquidityAcitvationFailed: boolean;
    readonly asRewardsLiquidityAcitvationFailed: ITuple<[SpRuntimeAccountAccountId20, u32, u128]>;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: ITuple<[u32, u128]>;
    readonly isAccountsWhitelisted: boolean;
    readonly isBootstrapParitallyPreFinalized: boolean;
    readonly isBootstrapReadyToBeFinalized: boolean;
    readonly isBootstrapFinalized: boolean;
    readonly type: 'Provisioned' | 'VestedProvisioned' | 'RewardsLiquidityAcitvationFailed' | 'RewardsClaimed' | 'AccountsWhitelisted' | 'BootstrapParitallyPreFinalized' | 'BootstrapReadyToBeFinalized' | 'BootstrapFinalized';
  }

  /** @name PalletMarketEvent (83) */
  interface PalletMarketEvent extends Enum {
    readonly isAssetsSwapped: boolean;
    readonly asAssetsSwapped: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly swaps: Vec<PalletMarketAtomicSwap>;
    } & Struct;
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly creator: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly lpToken: u32;
      readonly assets: ITuple<[u32, u32]>;
    } & Struct;
    readonly isLiquidityMinted: boolean;
    readonly asLiquidityMinted: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly amountsProvided: ITuple<[u128, u128]>;
      readonly lpToken: u32;
      readonly lpTokenMinted: u128;
      readonly totalSupply: u128;
    } & Struct;
    readonly isLiquidityBurned: boolean;
    readonly asLiquidityBurned: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly poolId: u32;
      readonly amounts: ITuple<[u128, u128]>;
      readonly burnedAmount: u128;
      readonly totalSupply: u128;
    } & Struct;
    readonly type: 'AssetsSwapped' | 'PoolCreated' | 'LiquidityMinted' | 'LiquidityBurned';
  }

  /** @name PalletMarketAtomicSwap (85) */
  interface PalletMarketAtomicSwap extends Struct {
    readonly poolId: u32;
    readonly kind: PalletMarketPoolKind;
    readonly assetIn: u32;
    readonly assetOut: u32;
    readonly amountIn: u128;
    readonly amountOut: u128;
  }

  /** @name PalletMarketPoolKind (86) */
  interface PalletMarketPoolKind extends Enum {
    readonly isXyk: boolean;
    readonly isStableSwap: boolean;
    readonly type: 'Xyk' | 'StableSwap';
  }

  /** @name ParachainStakingEvent (88) */
  interface ParachainStakingEvent extends Enum {
    readonly isNewRound: boolean;
    readonly asNewRound: ITuple<[u32, u32, u32, u128]>;
    readonly isJoinedCollatorCandidates: boolean;
    readonly asJoinedCollatorCandidates: ITuple<[SpRuntimeAccountAccountId20, u128, u128]>;
    readonly isCollatorChosen: boolean;
    readonly asCollatorChosen: ITuple<[u32, SpRuntimeAccountAccountId20, u128]>;
    readonly isCandidateBondMoreRequested: boolean;
    readonly asCandidateBondMoreRequested: ITuple<[SpRuntimeAccountAccountId20, u128, u32]>;
    readonly isCandidateBondLessRequested: boolean;
    readonly asCandidateBondLessRequested: ITuple<[SpRuntimeAccountAccountId20, u128, u32]>;
    readonly isCandidateBondedMore: boolean;
    readonly asCandidateBondedMore: ITuple<[SpRuntimeAccountAccountId20, u128, u128]>;
    readonly isCandidateBondedLess: boolean;
    readonly asCandidateBondedLess: ITuple<[SpRuntimeAccountAccountId20, u128, u128]>;
    readonly isCandidateWentOffline: boolean;
    readonly asCandidateWentOffline: ITuple<[u32, SpRuntimeAccountAccountId20]>;
    readonly isCandidateBackOnline: boolean;
    readonly asCandidateBackOnline: ITuple<[u32, SpRuntimeAccountAccountId20]>;
    readonly isCandidateScheduledExit: boolean;
    readonly asCandidateScheduledExit: ITuple<[u32, SpRuntimeAccountAccountId20, u32]>;
    readonly isCancelledCandidateExit: boolean;
    readonly asCancelledCandidateExit: SpRuntimeAccountAccountId20;
    readonly isCancelledCandidateBondChange: boolean;
    readonly asCancelledCandidateBondChange: ITuple<[SpRuntimeAccountAccountId20, ParachainStakingCandidateBondRequest]>;
    readonly isCandidateLeft: boolean;
    readonly asCandidateLeft: ITuple<[SpRuntimeAccountAccountId20, u128, u128]>;
    readonly isDelegationIncreaseScheduled: boolean;
    readonly asDelegationIncreaseScheduled: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, u32]>;
    readonly isDelegationDecreaseScheduled: boolean;
    readonly asDelegationDecreaseScheduled: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, u32]>;
    readonly isDelegationIncreased: boolean;
    readonly asDelegationIncreased: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, bool]>;
    readonly isDelegationDecreased: boolean;
    readonly asDelegationDecreased: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, bool]>;
    readonly isDelegatorExitScheduled: boolean;
    readonly asDelegatorExitScheduled: ITuple<[u32, SpRuntimeAccountAccountId20, u32]>;
    readonly isDelegationRevocationScheduled: boolean;
    readonly asDelegationRevocationScheduled: ITuple<[u32, SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u32]>;
    readonly isDelegatorLeft: boolean;
    readonly asDelegatorLeft: ITuple<[SpRuntimeAccountAccountId20, u128]>;
    readonly isDelegationRevoked: boolean;
    readonly asDelegationRevoked: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128]>;
    readonly isDelegatorExitCancelled: boolean;
    readonly asDelegatorExitCancelled: SpRuntimeAccountAccountId20;
    readonly isCancelledDelegationRequest: boolean;
    readonly asCancelledDelegationRequest: ITuple<[SpRuntimeAccountAccountId20, ParachainStakingDelegationRequest]>;
    readonly isDelegation: boolean;
    readonly asDelegation: ITuple<[SpRuntimeAccountAccountId20, u128, SpRuntimeAccountAccountId20, ParachainStakingDelegatorAdded]>;
    readonly isDelegatorLeftCandidate: boolean;
    readonly asDelegatorLeftCandidate: ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, u128]>;
    readonly isDelegatorDueReward: boolean;
    readonly asDelegatorDueReward: ITuple<[u32, SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[u32, SpRuntimeAccountAccountId20, u128]>;
    readonly isCollatorRewardsDistributed: boolean;
    readonly asCollatorRewardsDistributed: ITuple<[SpRuntimeAccountAccountId20, ParachainStakingPayoutRounds]>;
    readonly isStakeExpectationsSet: boolean;
    readonly asStakeExpectationsSet: ITuple<[u128, u128, u128]>;
    readonly isTotalSelectedSet: boolean;
    readonly asTotalSelectedSet: ITuple<[u32, u32]>;
    readonly isCollatorCommissionSet: boolean;
    readonly asCollatorCommissionSet: ITuple<[Perbill, Perbill]>;
    readonly isCandidateAggregatorUpdated: boolean;
    readonly asCandidateAggregatorUpdated: ITuple<[SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>]>;
    readonly isAggregatorMetadataUpdated: boolean;
    readonly asAggregatorMetadataUpdated: SpRuntimeAccountAccountId20;
    readonly type: 'NewRound' | 'JoinedCollatorCandidates' | 'CollatorChosen' | 'CandidateBondMoreRequested' | 'CandidateBondLessRequested' | 'CandidateBondedMore' | 'CandidateBondedLess' | 'CandidateWentOffline' | 'CandidateBackOnline' | 'CandidateScheduledExit' | 'CancelledCandidateExit' | 'CancelledCandidateBondChange' | 'CandidateLeft' | 'DelegationIncreaseScheduled' | 'DelegationDecreaseScheduled' | 'DelegationIncreased' | 'DelegationDecreased' | 'DelegatorExitScheduled' | 'DelegationRevocationScheduled' | 'DelegatorLeft' | 'DelegationRevoked' | 'DelegatorExitCancelled' | 'CancelledDelegationRequest' | 'Delegation' | 'DelegatorLeftCandidate' | 'DelegatorDueReward' | 'Rewarded' | 'CollatorRewardsDistributed' | 'StakeExpectationsSet' | 'TotalSelectedSet' | 'CollatorCommissionSet' | 'CandidateAggregatorUpdated' | 'AggregatorMetadataUpdated';
  }

  /** @name ParachainStakingCandidateBondRequest (89) */
  interface ParachainStakingCandidateBondRequest extends Struct {
    readonly amount: u128;
    readonly change: ParachainStakingCandidateBondChange;
    readonly whenExecutable: u32;
  }

  /** @name ParachainStakingCandidateBondChange (90) */
  interface ParachainStakingCandidateBondChange extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name ParachainStakingDelegationRequest (91) */
  interface ParachainStakingDelegationRequest extends Struct {
    readonly collator: SpRuntimeAccountAccountId20;
    readonly amount: u128;
    readonly whenExecutable: u32;
    readonly action: ParachainStakingDelegationChange;
  }

  /** @name ParachainStakingDelegationChange (92) */
  interface ParachainStakingDelegationChange extends Enum {
    readonly isRevoke: boolean;
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Revoke' | 'Increase' | 'Decrease';
  }

  /** @name ParachainStakingDelegatorAdded (93) */
  interface ParachainStakingDelegatorAdded extends Enum {
    readonly isAddedToTop: boolean;
    readonly asAddedToTop: {
      readonly newTotal: u128;
    } & Struct;
    readonly isAddedToBottom: boolean;
    readonly type: 'AddedToTop' | 'AddedToBottom';
  }

  /** @name ParachainStakingPayoutRounds (94) */
  interface ParachainStakingPayoutRounds extends Enum {
    readonly isAll: boolean;
    readonly isPartial: boolean;
    readonly asPartial: Vec<u32>;
    readonly type: 'All' | 'Partial';
  }

  /** @name PalletSequencerStakingEvent (95) */
  interface PalletSequencerStakingEvent extends Enum {
    readonly isSequencersRemovedFromActiveSet: boolean;
    readonly asSequencersRemovedFromActiveSet: ITuple<[PalletRolldownMessagesChain, Vec<SpRuntimeAccountAccountId20>]>;
    readonly isSequencerJoinedActiveSet: boolean;
    readonly asSequencerJoinedActiveSet: ITuple<[PalletRolldownMessagesChain, SpRuntimeAccountAccountId20]>;
    readonly isStakeProvided: boolean;
    readonly asStakeProvided: {
      readonly chain: PalletRolldownMessagesChain;
      readonly addedStake: u128;
      readonly totalStake: u128;
    } & Struct;
    readonly isStakeRemoved: boolean;
    readonly asStakeRemoved: {
      readonly chain: PalletRolldownMessagesChain;
      readonly removedStake: u128;
    } & Struct;
    readonly isSequencerRewardsDistributed: boolean;
    readonly asSequencerRewardsDistributed: ITuple<[SpRuntimeAccountAccountId20, PalletSequencerStakingPayoutRounds]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[u32, SpRuntimeAccountAccountId20, u128]>;
    readonly type: 'SequencersRemovedFromActiveSet' | 'SequencerJoinedActiveSet' | 'StakeProvided' | 'StakeRemoved' | 'SequencerRewardsDistributed' | 'Rewarded';
  }

  /** @name PalletSequencerStakingPayoutRounds (97) */
  interface PalletSequencerStakingPayoutRounds extends Enum {
    readonly isAll: boolean;
    readonly isPartial: boolean;
    readonly asPartial: Vec<u32>;
    readonly type: 'All' | 'Partial';
  }

  /** @name PalletSessionEvent (98) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletGrandpaEvent (99) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (102) */
  interface SpConsensusGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (103) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name OrmlAssetRegistryModuleEvent (104) */
  interface OrmlAssetRegistryModuleEvent extends Enum {
    readonly isRegisteredAsset: boolean;
    readonly asRegisteredAsset: {
      readonly assetId: u32;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly isUpdatedAsset: boolean;
    readonly asUpdatedAsset: {
      readonly assetId: u32;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly type: 'RegisteredAsset' | 'UpdatedAsset';
  }

  /** @name OrmlTraitsAssetRegistryAssetMetadata (105) */
  interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
    readonly decimals: u32;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly existentialDeposit: u128;
    readonly additional: MangataTypesAssetsCustomMetadata;
  }

  /** @name MangataTypesAssetsCustomMetadata (106) */
  interface MangataTypesAssetsCustomMetadata extends Struct {
    readonly xcm: Option<MangataTypesAssetsXcmMetadata>;
    readonly xyk: Option<MangataTypesAssetsXykMetadata>;
  }

  /** @name MangataTypesAssetsXcmMetadata (108) */
  interface MangataTypesAssetsXcmMetadata extends Struct {
    readonly feePerSecond: u128;
  }

  /** @name MangataTypesAssetsXykMetadata (110) */
  interface MangataTypesAssetsXykMetadata extends Struct {
    readonly operationsDisabled: bool;
  }

  /** @name PalletTreasuryEvent (112) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly isAssetSpendApproved: boolean;
    readonly asAssetSpendApproved: {
      readonly index: u32;
      readonly assetKind: Null;
      readonly amount: u128;
      readonly beneficiary: SpRuntimeAccountAccountId20;
      readonly validFrom: u32;
      readonly expireAt: u32;
    } & Struct;
    readonly isAssetSpendVoided: boolean;
    readonly asAssetSpendVoided: {
      readonly index: u32;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isPaymentFailed: boolean;
    readonly asPaymentFailed: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isSpendProcessed: boolean;
    readonly asSpendProcessed: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive' | 'AssetSpendApproved' | 'AssetSpendVoided' | 'Paid' | 'PaymentFailed' | 'SpendProcessed';
  }

  /** @name PalletSudoMangataEvent (113) */
  interface PalletSudoMangataEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly old: Option<SpRuntimeAccountAccountId20>;
      readonly new_: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isKeyRemoved: boolean;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'KeyRemoved' | 'SudoAsDone';
  }

  /** @name PalletSudoOriginEvent (114) */
  interface PalletSudoOriginEvent extends Enum {
    readonly isSuOriginDid: boolean;
    readonly asSuOriginDid: Result<Null, SpRuntimeDispatchError>;
    readonly isSuOriginDoAsDone: boolean;
    readonly asSuOriginDoAsDone: Result<Null, SpRuntimeDispatchError>;
    readonly type: 'SuOriginDid' | 'SuOriginDoAsDone';
  }

  /** @name PalletCollectiveMangataEvent (115) */
  interface PalletCollectiveMangataEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: SpRuntimeAccountAccountId20;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: SpRuntimeAccountAccountId20;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isMembersChanged: boolean;
    readonly asMembersChanged: {
      readonly newMembers: Vec<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly isPrimeSet: boolean;
    readonly asPrimeSet: {
      readonly newPrime: Option<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed' | 'MembersChanged' | 'PrimeSet';
  }

  /** @name PalletIdentityEvent (116) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: SpRuntimeAccountAccountId20;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: SpRuntimeAccountAccountId20;
      readonly main: SpRuntimeAccountAccountId20;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: SpRuntimeAccountAccountId20;
      readonly main: SpRuntimeAccountAccountId20;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: SpRuntimeAccountAccountId20;
      readonly main: SpRuntimeAccountAccountId20;
      readonly deposit: u128;
    } & Struct;
    readonly isAuthorityAdded: boolean;
    readonly asAuthorityAdded: {
      readonly authority: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isAuthorityRemoved: boolean;
    readonly asAuthorityRemoved: {
      readonly authority: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isUsernameSet: boolean;
    readonly asUsernameSet: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameQueued: boolean;
    readonly asUsernameQueued: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly username: Bytes;
      readonly expiration: u32;
    } & Struct;
    readonly isPreapprovalExpired: boolean;
    readonly asPreapprovalExpired: {
      readonly whose: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isPrimaryUsernameSet: boolean;
    readonly asPrimaryUsernameSet: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly username: Bytes;
    } & Struct;
    readonly isDanglingUsernameRemoved: boolean;
    readonly asDanglingUsernameRemoved: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly username: Bytes;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked' | 'AuthorityAdded' | 'AuthorityRemoved' | 'UsernameSet' | 'UsernameQueued' | 'PreapprovalExpired' | 'PrimaryUsernameSet' | 'DanglingUsernameRemoved';
  }

  /** @name PalletMembershipEvent (118) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name FrameSystemPhase (119) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (122) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCodeUpgradeAuthorization (125) */
  interface FrameSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name FrameSystemCall (126) */
  interface FrameSystemCall extends Enum {
    readonly isEnqueueTxs: boolean;
    readonly asEnqueueTxs: {
      readonly txs: Vec<ITuple<[Option<SpRuntimeAccountAccountId20>, Bytes]>>;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isAuthorizeUpgradeWithoutChecks: boolean;
    readonly asAuthorizeUpgradeWithoutChecks: {
      readonly codeHash: H256;
    } & Struct;
    readonly isApplyAuthorizedUpgrade: boolean;
    readonly asApplyAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'EnqueueTxs' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent' | 'AuthorizeUpgrade' | 'AuthorizeUpgradeWithoutChecks' | 'ApplyAuthorizedUpgrade';
  }

  /** @name FrameSystemLimitsBlockWeights (130) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (131) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (132) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (134) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (135) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (136) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (137) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (141) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly isStorageQueueFull: boolean;
    readonly isMultiBlockMigrationsOngoing: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'StorageQueueFull' | 'MultiBlockMigrationsOngoing' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletTimestampCall (142) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletUtilityMangataCall (143) */
  interface PalletUtilityMangataCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: RollupRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name PalletProxyCall (146) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: SpRuntimeAccountAccountId20;
      readonly forceProxyType: Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: SpRuntimeAccountAccountId20;
      readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: SpRuntimeAccountAccountId20;
      readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: SpRuntimeAccountAccountId20;
      readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: SpRuntimeAccountAccountId20;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: SpRuntimeAccountAccountId20;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: SpRuntimeAccountAccountId20;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: SpRuntimeAccountAccountId20;
      readonly real: SpRuntimeAccountAccountId20;
      readonly forceProxyType: Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletMaintenanceCall (148) */
  interface PalletMaintenanceCall extends Enum {
    readonly isSwitchMaintenanceModeOn: boolean;
    readonly isSwitchMaintenanceModeOff: boolean;
    readonly isSwitchUpgradabilityInMaintenanceModeOn: boolean;
    readonly isSwitchUpgradabilityInMaintenanceModeOff: boolean;
    readonly type: 'SwitchMaintenanceModeOn' | 'SwitchMaintenanceModeOff' | 'SwitchUpgradabilityInMaintenanceModeOn' | 'SwitchUpgradabilityInMaintenanceModeOff';
  }

  /** @name PalletRolldownCall (149) */
  interface PalletRolldownCall extends Enum {
    readonly isUpdateL2FromL1: boolean;
    readonly asUpdateL2FromL1: {
      readonly requests: PalletRolldownMessagesL1Update;
      readonly updateHash: H256;
    } & Struct;
    readonly isForceUpdateL2FromL1: boolean;
    readonly asForceUpdateL2FromL1: {
      readonly update: PalletRolldownMessagesL1Update;
    } & Struct;
    readonly isCancelRequestsFromL1: boolean;
    readonly asCancelRequestsFromL1: {
      readonly chain: PalletRolldownMessagesChain;
      readonly requestsToCancel: u128;
    } & Struct;
    readonly isForceCancelRequestsFromL1: boolean;
    readonly asForceCancelRequestsFromL1: {
      readonly chain: PalletRolldownMessagesChain;
      readonly requestsToCancel: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly chain: PalletRolldownMessagesChain;
      readonly recipient: U8aFixed;
      readonly tokenAddress: U8aFixed;
      readonly amount: u128;
      readonly ferryTip: Option<u128>;
    } & Struct;
    readonly isCreateBatch: boolean;
    readonly asCreateBatch: {
      readonly chain: PalletRolldownMessagesChain;
      readonly sequencerAccount: Option<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly isSetManualBatchExtraFee: boolean;
    readonly asSetManualBatchExtraFee: {
      readonly balance: u128;
    } & Struct;
    readonly isRefundFailedDeposit: boolean;
    readonly asRefundFailedDeposit: {
      readonly chain: PalletRolldownMessagesChain;
      readonly requestId: u128;
    } & Struct;
    readonly isForceCreateBatch: boolean;
    readonly asForceCreateBatch: {
      readonly chain: PalletRolldownMessagesChain;
      readonly range: ITuple<[u128, u128]>;
      readonly sequencerAccount: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isFerryDeposit: boolean;
    readonly asFerryDeposit: {
      readonly chain: PalletRolldownMessagesChain;
      readonly requestId: PalletRolldownMessagesRequestId;
      readonly depositRecipient: U8aFixed;
      readonly tokenAddress: U8aFixed;
      readonly amount: u128;
      readonly timestamp: u128;
      readonly ferryTip: u128;
      readonly depositHash: H256;
    } & Struct;
    readonly isFerryDepositUnsafe: boolean;
    readonly asFerryDepositUnsafe: {
      readonly chain: PalletRolldownMessagesChain;
      readonly requestId: PalletRolldownMessagesRequestId;
      readonly depositRecipient: U8aFixed;
      readonly tokenAddress: U8aFixed;
      readonly amount: u128;
      readonly timestamp: u128;
      readonly ferryTip: u128;
    } & Struct;
    readonly isUpdateL2FromL1Unsafe: boolean;
    readonly asUpdateL2FromL1Unsafe: {
      readonly requests: PalletRolldownMessagesL1Update;
    } & Struct;
    readonly isSetDisputePeriod: boolean;
    readonly asSetDisputePeriod: {
      readonly chain: PalletRolldownMessagesChain;
      readonly disputePeriodLength: u128;
    } & Struct;
    readonly type: 'UpdateL2FromL1' | 'ForceUpdateL2FromL1' | 'CancelRequestsFromL1' | 'ForceCancelRequestsFromL1' | 'Withdraw' | 'CreateBatch' | 'SetManualBatchExtraFee' | 'RefundFailedDeposit' | 'ForceCreateBatch' | 'FerryDeposit' | 'FerryDepositUnsafe' | 'UpdateL2FromL1Unsafe' | 'SetDisputePeriod';
  }

  /** @name PalletRolldownMessagesL1Update (150) */
  interface PalletRolldownMessagesL1Update extends Struct {
    readonly chain: PalletRolldownMessagesChain;
    readonly pendingDeposits: Vec<PalletRolldownMessagesDeposit>;
    readonly pendingCancelResolutions: Vec<PalletRolldownMessagesCancelResolution>;
  }

  /** @name PalletRolldownMessagesCancelResolution (153) */
  interface PalletRolldownMessagesCancelResolution extends Struct {
    readonly requestId: PalletRolldownMessagesRequestId;
    readonly l2RequestId: u128;
    readonly cancelJustified: bool;
    readonly timeStamp: U256;
  }

  /** @name PalletMetamaskSignatureCall (155) */
  interface PalletMetamaskSignatureCall extends Enum {
    readonly isUpdate: boolean;
    readonly asUpdate: {
      readonly name: Option<Bytes>;
      readonly version: Option<Bytes>;
      readonly chainId: Option<u64>;
      readonly decodeUrl: Option<Bytes>;
    } & Struct;
    readonly type: 'Update';
  }

  /** @name OrmlTokensModuleCall (156) */
  interface OrmlTokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: SpRuntimeAccountAccountId20;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: SpRuntimeAccountAccountId20;
      readonly currencyId: u32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: SpRuntimeAccountAccountId20;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: SpRuntimeAccountAccountId20;
      readonly dest: SpRuntimeAccountAccountId20;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly currencyId: u32;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly currencyId: u32;
      readonly who: SpRuntimeAccountAccountId20;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance' | 'Create' | 'Mint';
  }

  /** @name PalletProofOfStakeCall (158) */
  interface PalletProofOfStakeCall extends Enum {
    readonly isClaimRewardsAll: boolean;
    readonly asClaimRewardsAll: {
      readonly liquidityTokenId: u32;
    } & Struct;
    readonly isUpdatePoolPromotion: boolean;
    readonly asUpdatePoolPromotion: {
      readonly liquidityTokenId: u32;
      readonly liquidityMiningIssuanceWeight: u8;
    } & Struct;
    readonly isActivateLiquidity: boolean;
    readonly asActivateLiquidity: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind>;
    } & Struct;
    readonly isDeactivateLiquidity: boolean;
    readonly asDeactivateLiquidity: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRewardPool: boolean;
    readonly asRewardPool: {
      readonly pool: ITuple<[u32, u32]>;
      readonly tokenId: u32;
      readonly amount: u128;
      readonly scheduleEnd: u32;
    } & Struct;
    readonly isActivateLiquidityFor3rdpartyRewards: boolean;
    readonly asActivateLiquidityFor3rdpartyRewards: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
      readonly rewardToken: u32;
      readonly useBalanceFrom: Option<PalletProofOfStakeThirdPartyActivationKind>;
    } & Struct;
    readonly isDeactivateLiquidityFor3rdpartyRewards: boolean;
    readonly asDeactivateLiquidityFor3rdpartyRewards: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
      readonly rewardToken: u32;
    } & Struct;
    readonly isClaim3rdpartyRewards: boolean;
    readonly asClaim3rdpartyRewards: {
      readonly liquidityTokenId: u32;
      readonly rewardToken: u32;
    } & Struct;
    readonly isActivateLiquidityForNativeRewards: boolean;
    readonly asActivateLiquidityForNativeRewards: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind>;
    } & Struct;
    readonly isDeactivateLiquidityForNativeRewards: boolean;
    readonly asDeactivateLiquidityForNativeRewards: {
      readonly liquidityTokenId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isClaimNativeRewards: boolean;
    readonly asClaimNativeRewards: {
      readonly liquidityTokenId: u32;
    } & Struct;
    readonly type: 'ClaimRewardsAll' | 'UpdatePoolPromotion' | 'ActivateLiquidity' | 'DeactivateLiquidity' | 'RewardPool' | 'ActivateLiquidityFor3rdpartyRewards' | 'DeactivateLiquidityFor3rdpartyRewards' | 'Claim3rdpartyRewards' | 'ActivateLiquidityForNativeRewards' | 'DeactivateLiquidityForNativeRewards' | 'ClaimNativeRewards';
  }

  /** @name MangataTypesMultipurposeLiquidityActivateKind (160) */
  interface MangataTypesMultipurposeLiquidityActivateKind extends Enum {
    readonly isAvailableBalance: boolean;
    readonly isStakedUnactivatedReserves: boolean;
    readonly isUnspentReserves: boolean;
    readonly type: 'AvailableBalance' | 'StakedUnactivatedReserves' | 'UnspentReserves';
  }

  /** @name PalletProofOfStakeThirdPartyActivationKind (162) */
  interface PalletProofOfStakeThirdPartyActivationKind extends Enum {
    readonly isActivateKind: boolean;
    readonly asActivateKind: Option<MangataTypesMultipurposeLiquidityActivateKind>;
    readonly isActivatedLiquidity: boolean;
    readonly asActivatedLiquidity: u32;
    readonly isNativeRewardsLiquidity: boolean;
    readonly type: 'ActivateKind' | 'ActivatedLiquidity' | 'NativeRewardsLiquidity';
  }

  /** @name PalletFeeLockCall (163) */
  interface PalletFeeLockCall extends Enum {
    readonly isUpdateFeeLockMetadata: boolean;
    readonly asUpdateFeeLockMetadata: {
      readonly periodLength: Option<u32>;
      readonly feeLockAmount: Option<u128>;
      readonly swapValueThreshold: Option<u128>;
      readonly shouldBeWhitelisted: Option<Vec<ITuple<[u32, bool]>>>;
    } & Struct;
    readonly isUnlockFee: boolean;
    readonly type: 'UpdateFeeLockMetadata' | 'UnlockFee';
  }

  /** @name PalletVestingMangataCall (167) */
  interface PalletVestingMangataCall extends Enum {
    readonly isVest: boolean;
    readonly asVest: {
      readonly tokenId: u32;
    } & Struct;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly tokenId: u32;
      readonly target: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly tokenId: u32;
      readonly source: SpRuntimeAccountAccountId20;
      readonly target: SpRuntimeAccountAccountId20;
      readonly schedule: PalletVestingMangataVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly tokenId: u32;
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly isSudoUnlockAllVestingTokens: boolean;
    readonly asSudoUnlockAllVestingTokens: {
      readonly target: SpRuntimeAccountAccountId20;
      readonly tokenId: u32;
    } & Struct;
    readonly isForceRemoveVestingSchedule: boolean;
    readonly asForceRemoveVestingSchedule: {
      readonly tokenId: u32;
      readonly target: SpRuntimeAccountAccountId20;
      readonly scheduleIndex: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'ForceVestedTransfer' | 'MergeSchedules' | 'SudoUnlockAllVestingTokens' | 'ForceRemoveVestingSchedule';
  }

  /** @name PalletVestingMangataVestingInfo (168) */
  interface PalletVestingMangataVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletCrowdloanRewardsCall (169) */
  interface PalletCrowdloanRewardsCall extends Enum {
    readonly isAssociateNativeIdentity: boolean;
    readonly asAssociateNativeIdentity: {
      readonly rewardAccount: SpRuntimeAccountAccountId20;
      readonly relayAccount: SpRuntimeAccountAccountId20;
      readonly proof: SpRuntimeAccountEthereumSignature;
    } & Struct;
    readonly isChangeAssociationWithRelayKeys: boolean;
    readonly asChangeAssociationWithRelayKeys: {
      readonly rewardAccount: SpRuntimeAccountAccountId20;
      readonly previousAccount: SpRuntimeAccountAccountId20;
      readonly proofs: Vec<ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountEthereumSignature]>>;
    } & Struct;
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly crowdloanId: Option<u32>;
    } & Struct;
    readonly isUpdateRewardAddress: boolean;
    readonly asUpdateRewardAddress: {
      readonly newRewardAccount: SpRuntimeAccountAccountId20;
      readonly crowdloanId: Option<u32>;
    } & Struct;
    readonly isCompleteInitialization: boolean;
    readonly asCompleteInitialization: {
      readonly leaseStartBlock: u32;
      readonly leaseEndingBlock: u32;
    } & Struct;
    readonly isSetCrowdloanAllocation: boolean;
    readonly asSetCrowdloanAllocation: {
      readonly crowdloanAllocationAmount: u128;
    } & Struct;
    readonly isInitializeRewardVec: boolean;
    readonly asInitializeRewardVec: {
      readonly rewards: Vec<ITuple<[SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>, u128]>>;
    } & Struct;
    readonly type: 'AssociateNativeIdentity' | 'ChangeAssociationWithRelayKeys' | 'Claim' | 'UpdateRewardAddress' | 'CompleteInitialization' | 'SetCrowdloanAllocation' | 'InitializeRewardVec';
  }

  /** @name SpRuntimeAccountEthereumSignature (170) */
  interface SpRuntimeAccountEthereumSignature extends SpCoreEcdsaSignature {}

  /** @name SpCoreEcdsaSignature (171) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name PalletIssuanceCall (177) */
  interface PalletIssuanceCall extends Enum {
    readonly isInitIssuanceConfig: boolean;
    readonly isFinalizeTge: boolean;
    readonly isExecuteTge: boolean;
    readonly asExecuteTge: {
      readonly tgeInfos: Vec<PalletIssuanceTgeInfo>;
    } & Struct;
    readonly type: 'InitIssuanceConfig' | 'FinalizeTge' | 'ExecuteTge';
  }

  /** @name PalletMultipurposeLiquidityCall (179) */
  interface PalletMultipurposeLiquidityCall extends Enum {
    readonly isReserveVestingLiquidityTokensByVestingIndex: boolean;
    readonly asReserveVestingLiquidityTokensByVestingIndex: {
      readonly liquidityTokenId: u32;
      readonly liquidityTokenVestingIndex: u32;
      readonly liquidityTokenUnlockSomeAmountOrAll: Option<u128>;
    } & Struct;
    readonly isReserveVestingNativeTokensByVestingIndex: boolean;
    readonly asReserveVestingNativeTokensByVestingIndex: {
      readonly liquidityTokenVestingIndex: u32;
      readonly liquidityTokenUnlockSomeAmountOrAll: Option<u128>;
    } & Struct;
    readonly isReserveVestingLiquidityTokens: boolean;
    readonly asReserveVestingLiquidityTokens: {
      readonly liquidityTokenId: u32;
      readonly liquidityTokenAmount: u128;
    } & Struct;
    readonly isUnreserveAndRelockInstance: boolean;
    readonly asUnreserveAndRelockInstance: {
      readonly liquidityTokenId: u32;
      readonly relockInstanceIndex: u32;
    } & Struct;
    readonly type: 'ReserveVestingLiquidityTokensByVestingIndex' | 'ReserveVestingNativeTokensByVestingIndex' | 'ReserveVestingLiquidityTokens' | 'UnreserveAndRelockInstance';
  }

  /** @name PalletBootstrapCall (180) */
  interface PalletBootstrapCall extends Enum {
    readonly isProvision: boolean;
    readonly asProvision: {
      readonly tokenId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWhitelistAccounts: boolean;
    readonly asWhitelistAccounts: {
      readonly accounts: Vec<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly isScheduleBootstrap: boolean;
    readonly asScheduleBootstrap: {
      readonly firstTokenId: u32;
      readonly secondTokenId: u32;
      readonly idoStart: u32;
      readonly whitelistPhaseLength: Option<u32>;
      readonly publicPhaseLength: u32;
      readonly maxFirstToSecondRatio: Option<ITuple<[u128, u128]>>;
      readonly promoteBootstrapPool: bool;
    } & Struct;
    readonly isCancelBootstrap: boolean;
    readonly isUpdatePromoteBootstrapPool: boolean;
    readonly asUpdatePromoteBootstrapPool: {
      readonly promoteBootstrapPool: bool;
    } & Struct;
    readonly isClaimLiquidityTokens: boolean;
    readonly isClaimAndActivateLiquidityTokens: boolean;
    readonly isPreFinalize: boolean;
    readonly isFinalize: boolean;
    readonly isClaimLiquidityTokensForAccount: boolean;
    readonly asClaimLiquidityTokensForAccount: {
      readonly account: SpRuntimeAccountAccountId20;
      readonly activateRewards: bool;
    } & Struct;
    readonly type: 'Provision' | 'WhitelistAccounts' | 'ScheduleBootstrap' | 'CancelBootstrap' | 'UpdatePromoteBootstrapPool' | 'ClaimLiquidityTokens' | 'ClaimAndActivateLiquidityTokens' | 'PreFinalize' | 'Finalize' | 'ClaimLiquidityTokensForAccount';
  }

  /** @name PalletMarketCall (182) */
  interface PalletMarketCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly kind: PalletMarketPoolKind;
      readonly firstAssetId: u32;
      readonly firstAssetAmount: u128;
      readonly secondAssetId: u32;
      readonly secondAssetAmount: u128;
    } & Struct;
    readonly isMintLiquidity: boolean;
    readonly asMintLiquidity: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly assetAmount: u128;
      readonly maxOtherAssetAmount: u128;
    } & Struct;
    readonly isMintLiquidityFixedAmounts: boolean;
    readonly asMintLiquidityFixedAmounts: {
      readonly poolId: u32;
      readonly amounts: ITuple<[u128, u128]>;
      readonly minAmountLpTokens: u128;
    } & Struct;
    readonly isMintLiquidityUsingVestingNativeTokensByVestingIndex: boolean;
    readonly asMintLiquidityUsingVestingNativeTokensByVestingIndex: {
      readonly poolId: u32;
      readonly nativeAssetVestingIndex: u32;
      readonly vestingNativeAssetUnlockSomeAmountOrAll: Option<u128>;
      readonly maxOtherAssetAmount: u128;
    } & Struct;
    readonly isMintLiquidityUsingVestingNativeTokens: boolean;
    readonly asMintLiquidityUsingVestingNativeTokens: {
      readonly poolId: u32;
      readonly nativeAssetVestingAmount: u128;
      readonly maxOtherAssetAmount: u128;
    } & Struct;
    readonly isBurnLiquidity: boolean;
    readonly asBurnLiquidity: {
      readonly poolId: u32;
      readonly liquidityBurnAmount: u128;
      readonly minFirstAssetAmount: u128;
      readonly minSecondAssetAmount: u128;
    } & Struct;
    readonly isMultiswapAsset: boolean;
    readonly asMultiswapAsset: {
      readonly swapPoolList: Vec<u32>;
      readonly assetIdIn: u32;
      readonly assetAmountIn: u128;
      readonly assetIdOut: u32;
      readonly minAmountOut: u128;
    } & Struct;
    readonly isMultiswapAssetBuy: boolean;
    readonly asMultiswapAssetBuy: {
      readonly swapPoolList: Vec<u32>;
      readonly assetIdOut: u32;
      readonly assetAmountOut: u128;
      readonly assetIdIn: u32;
      readonly maxAmountIn: u128;
    } & Struct;
    readonly type: 'CreatePool' | 'MintLiquidity' | 'MintLiquidityFixedAmounts' | 'MintLiquidityUsingVestingNativeTokensByVestingIndex' | 'MintLiquidityUsingVestingNativeTokens' | 'BurnLiquidity' | 'MultiswapAsset' | 'MultiswapAssetBuy';
  }

  /** @name ParachainStakingCall (183) */
  interface ParachainStakingCall extends Enum {
    readonly isSetTotalSelected: boolean;
    readonly asSetTotalSelected: {
      readonly new_: u32;
    } & Struct;
    readonly isSetCollatorCommission: boolean;
    readonly asSetCollatorCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isJoinCandidates: boolean;
    readonly asJoinCandidates: {
      readonly bond: u128;
      readonly liquidityToken: u32;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
      readonly candidateCount: u32;
      readonly liquidityTokenCount: u32;
    } & Struct;
    readonly isScheduleLeaveCandidates: boolean;
    readonly asScheduleLeaveCandidates: {
      readonly candidateCount: u32;
    } & Struct;
    readonly isExecuteLeaveCandidates: boolean;
    readonly asExecuteLeaveCandidates: {
      readonly candidate: SpRuntimeAccountAccountId20;
      readonly candidateDelegationCount: u32;
    } & Struct;
    readonly isCancelLeaveCandidates: boolean;
    readonly asCancelLeaveCandidates: {
      readonly candidateCount: u32;
    } & Struct;
    readonly isGoOffline: boolean;
    readonly isGoOnline: boolean;
    readonly isScheduleCandidateBondMore: boolean;
    readonly asScheduleCandidateBondMore: {
      readonly more: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isScheduleCandidateBondLess: boolean;
    readonly asScheduleCandidateBondLess: {
      readonly less: u128;
    } & Struct;
    readonly isExecuteCandidateBondRequest: boolean;
    readonly asExecuteCandidateBondRequest: {
      readonly candidate: SpRuntimeAccountAccountId20;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isCancelCandidateBondRequest: boolean;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly collator: SpRuntimeAccountAccountId20;
      readonly amount: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
      readonly candidateDelegationCount: u32;
      readonly delegationCount: u32;
    } & Struct;
    readonly isScheduleLeaveDelegators: boolean;
    readonly isExecuteLeaveDelegators: boolean;
    readonly asExecuteLeaveDelegators: {
      readonly delegator: SpRuntimeAccountAccountId20;
      readonly delegationCount: u32;
    } & Struct;
    readonly isCancelLeaveDelegators: boolean;
    readonly isScheduleRevokeDelegation: boolean;
    readonly asScheduleRevokeDelegation: {
      readonly collator: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isScheduleDelegatorBondMore: boolean;
    readonly asScheduleDelegatorBondMore: {
      readonly candidate: SpRuntimeAccountAccountId20;
      readonly more: u128;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isScheduleDelegatorBondLess: boolean;
    readonly asScheduleDelegatorBondLess: {
      readonly candidate: SpRuntimeAccountAccountId20;
      readonly less: u128;
    } & Struct;
    readonly isExecuteDelegationRequest: boolean;
    readonly asExecuteDelegationRequest: {
      readonly delegator: SpRuntimeAccountAccountId20;
      readonly candidate: SpRuntimeAccountAccountId20;
      readonly useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind>;
    } & Struct;
    readonly isCancelDelegationRequest: boolean;
    readonly asCancelDelegationRequest: {
      readonly candidate: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isAddStakingLiquidityToken: boolean;
    readonly asAddStakingLiquidityToken: {
      readonly pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
      readonly currentLiquidityTokens: u32;
    } & Struct;
    readonly isRemoveStakingLiquidityToken: boolean;
    readonly asRemoveStakingLiquidityToken: {
      readonly pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
      readonly currentLiquidityTokens: u32;
    } & Struct;
    readonly isAggregatorUpdateMetadata: boolean;
    readonly asAggregatorUpdateMetadata: {
      readonly collatorCandidates: Vec<SpRuntimeAccountAccountId20>;
      readonly action: ParachainStakingMetadataUpdateAction;
    } & Struct;
    readonly isUpdateCandidateAggregator: boolean;
    readonly asUpdateCandidateAggregator: {
      readonly maybeAggregator: Option<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly isPayoutCollatorRewards: boolean;
    readonly asPayoutCollatorRewards: {
      readonly collator: SpRuntimeAccountAccountId20;
      readonly numberOfSesisons: Option<u32>;
    } & Struct;
    readonly isPayoutDelegatorReward: boolean;
    readonly asPayoutDelegatorReward: {
      readonly round: u32;
      readonly collator: SpRuntimeAccountAccountId20;
      readonly delegator: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly type: 'SetTotalSelected' | 'SetCollatorCommission' | 'JoinCandidates' | 'ScheduleLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'GoOffline' | 'GoOnline' | 'ScheduleCandidateBondMore' | 'ScheduleCandidateBondLess' | 'ExecuteCandidateBondRequest' | 'CancelCandidateBondRequest' | 'Delegate' | 'ScheduleLeaveDelegators' | 'ExecuteLeaveDelegators' | 'CancelLeaveDelegators' | 'ScheduleRevokeDelegation' | 'ScheduleDelegatorBondMore' | 'ScheduleDelegatorBondLess' | 'ExecuteDelegationRequest' | 'CancelDelegationRequest' | 'AddStakingLiquidityToken' | 'RemoveStakingLiquidityToken' | 'AggregatorUpdateMetadata' | 'UpdateCandidateAggregator' | 'PayoutCollatorRewards' | 'PayoutDelegatorReward';
  }

  /** @name MangataTypesMultipurposeLiquidityBondKind (185) */
  interface MangataTypesMultipurposeLiquidityBondKind extends Enum {
    readonly isAvailableBalance: boolean;
    readonly isActivatedUnstakedReserves: boolean;
    readonly isUnspentReserves: boolean;
    readonly type: 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves';
  }

  /** @name ParachainStakingPairedOrLiquidityToken (186) */
  interface ParachainStakingPairedOrLiquidityToken extends Enum {
    readonly isPaired: boolean;
    readonly asPaired: u32;
    readonly isLiquidity: boolean;
    readonly asLiquidity: u32;
    readonly type: 'Paired' | 'Liquidity';
  }

  /** @name ParachainStakingMetadataUpdateAction (187) */
  interface ParachainStakingMetadataUpdateAction extends Enum {
    readonly isExtendApprovedCollators: boolean;
    readonly isRemoveApprovedCollators: boolean;
    readonly type: 'ExtendApprovedCollators' | 'RemoveApprovedCollators';
  }

  /** @name PalletSequencerStakingCall (188) */
  interface PalletSequencerStakingCall extends Enum {
    readonly isProvideSequencerStake: boolean;
    readonly asProvideSequencerStake: {
      readonly chain: PalletRolldownMessagesChain;
      readonly stakeAmount: u128;
      readonly aliasAccount: Option<SpRuntimeAccountAccountId20>;
      readonly stakeAction: PalletSequencerStakingStakeAction;
    } & Struct;
    readonly isLeaveActiveSequencers: boolean;
    readonly asLeaveActiveSequencers: {
      readonly chain: PalletRolldownMessagesChain;
    } & Struct;
    readonly isRejoinActiveSequencers: boolean;
    readonly asRejoinActiveSequencers: {
      readonly chain: PalletRolldownMessagesChain;
    } & Struct;
    readonly isUnstake: boolean;
    readonly asUnstake: {
      readonly chain: PalletRolldownMessagesChain;
    } & Struct;
    readonly isSetSequencerConfiguration: boolean;
    readonly asSetSequencerConfiguration: {
      readonly chain: PalletRolldownMessagesChain;
      readonly minimalStakeAmount: u128;
      readonly slashFineAmount: u128;
    } & Struct;
    readonly isSetUpdaterAccountForSequencer: boolean;
    readonly asSetUpdaterAccountForSequencer: {
      readonly chain: PalletRolldownMessagesChain;
      readonly aliasAccount: Option<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly isPayoutSequencerRewards: boolean;
    readonly asPayoutSequencerRewards: {
      readonly sequencer: SpRuntimeAccountAccountId20;
      readonly numberOfSessions: Option<u32>;
    } & Struct;
    readonly type: 'ProvideSequencerStake' | 'LeaveActiveSequencers' | 'RejoinActiveSequencers' | 'Unstake' | 'SetSequencerConfiguration' | 'SetUpdaterAccountForSequencer' | 'PayoutSequencerRewards';
  }

  /** @name PalletSequencerStakingStakeAction (189) */
  interface PalletSequencerStakingStakeAction extends Enum {
    readonly isStakeOnly: boolean;
    readonly isStakeAndJoinActiveSet: boolean;
    readonly type: 'StakeOnly' | 'StakeAndJoinActiveSet';
  }

  /** @name PalletSessionCall (190) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: RollupRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name RollupRuntimeSessionKeys (191) */
  interface RollupRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    readonly grandpa: SpConsensusGrandpaAppPublic;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (192) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (193) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaCall (194) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (195) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (196) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (197) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (198) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpConsensusGrandpaAppSignature (199) */
  interface SpConsensusGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (200) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (203) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (204) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpCoreVoid (206) */
  type SpCoreVoid = Null;

  /** @name OrmlAssetRegistryModuleCall (207) */
  interface OrmlAssetRegistryModuleCall extends Enum {
    readonly isRegisterAsset: boolean;
    readonly asRegisterAsset: {
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
      readonly assetId: Option<u32>;
    } & Struct;
    readonly isUpdateAsset: boolean;
    readonly asUpdateAsset: {
      readonly assetId: u32;
      readonly decimals: Option<u32>;
      readonly name: Option<Bytes>;
      readonly symbol: Option<Bytes>;
      readonly existentialDeposit: Option<u128>;
      readonly additional: Option<MangataTypesAssetsCustomMetadata>;
    } & Struct;
    readonly isRegisterL1Asset: boolean;
    readonly asRegisterL1Asset: {
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
      readonly assetId: Option<u32>;
      readonly l1Asset: MangataTypesAssetsL1Asset;
    } & Struct;
    readonly isUpdateL1AssetData: boolean;
    readonly asUpdateL1AssetData: {
      readonly assetId: u32;
      readonly l1Asset: Option<MangataTypesAssetsL1Asset>;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAsset' | 'RegisterL1Asset' | 'UpdateL1AssetData';
  }

  /** @name MangataTypesAssetsL1Asset (210) */
  interface MangataTypesAssetsL1Asset extends Enum {
    readonly isEthereum: boolean;
    readonly asEthereum: U8aFixed;
    readonly isArbitrum: boolean;
    readonly asArbitrum: U8aFixed;
    readonly isBase: boolean;
    readonly asBase: U8aFixed;
    readonly type: 'Ethereum' | 'Arbitrum' | 'Base';
  }

  /** @name PalletTreasuryCall (212) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpendLocal: boolean;
    readonly asSpendLocal: {
      readonly amount: Compact<u128>;
      readonly beneficiary: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly assetKind: Null;
      readonly amount: Compact<u128>;
      readonly beneficiary: SpRuntimeAccountAccountId20;
      readonly validFrom: Option<u32>;
    } & Struct;
    readonly isPayout: boolean;
    readonly asPayout: {
      readonly index: u32;
    } & Struct;
    readonly isCheckStatus: boolean;
    readonly asCheckStatus: {
      readonly index: u32;
    } & Struct;
    readonly isVoidSpend: boolean;
    readonly asVoidSpend: {
      readonly index: u32;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'SpendLocal' | 'RemoveApproval' | 'Spend' | 'Payout' | 'CheckStatus' | 'VoidSpend';
  }

  /** @name PalletSudoMangataCall (213) */
  interface PalletSudoMangataCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly call: Call;
    } & Struct;
    readonly isRemoveKey: boolean;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs' | 'RemoveKey';
  }

  /** @name PalletSudoOriginCall (214) */
  interface PalletSudoOriginCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SudoAs';
  }

  /** @name PalletCollectiveMangataCall (215) */
  interface PalletCollectiveMangataCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<SpRuntimeAccountAccountId20>;
      readonly prime: Option<SpRuntimeAccountAccountId20>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletIdentityCall (216) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityLegacyIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[SpRuntimeAccountAccountId20, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: u64;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: SpRuntimeAccountAccountId20;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: SpRuntimeAccountAccountId20;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: SpRuntimeAccountAccountId20;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly isAddUsernameAuthority: boolean;
    readonly asAddUsernameAuthority: {
      readonly authority: SpRuntimeAccountAccountId20;
      readonly suffix: Bytes;
      readonly allocation: u32;
    } & Struct;
    readonly isRemoveUsernameAuthority: boolean;
    readonly asRemoveUsernameAuthority: {
      readonly authority: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isSetUsernameFor: boolean;
    readonly asSetUsernameFor: {
      readonly who: SpRuntimeAccountAccountId20;
      readonly username: Bytes;
      readonly signature: Option<SpRuntimeAccountEthereumSignature>;
    } & Struct;
    readonly isAcceptUsername: boolean;
    readonly asAcceptUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveExpiredApproval: boolean;
    readonly asRemoveExpiredApproval: {
      readonly username: Bytes;
    } & Struct;
    readonly isSetPrimaryUsername: boolean;
    readonly asSetPrimaryUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveDanglingUsername: boolean;
    readonly asRemoveDanglingUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub' | 'AddUsernameAuthority' | 'RemoveUsernameAuthority' | 'SetUsernameFor' | 'AcceptUsername' | 'RemoveExpiredApproval' | 'SetPrimaryUsername' | 'RemoveDanglingUsername';
  }

  /** @name PalletIdentityLegacyIdentityInfo (217) */
  interface PalletIdentityLegacyIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityJudgement (254) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletMembershipCall (256) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: SpRuntimeAccountAccountId20;
      readonly add: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<SpRuntimeAccountAccountId20>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: SpRuntimeAccountAccountId20;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name RollupRuntimeOriginCaller (257) */
  interface RollupRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveMangataRawOrigin;
    readonly type: 'System' | 'Void' | 'Council';
  }

  /** @name FrameSupportDispatchRawOrigin (258) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: SpRuntimeAccountAccountId20;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveMangataRawOrigin (259) */
  interface PalletCollectiveMangataRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: SpRuntimeAccountAccountId20;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletUtilityMangataError (260) */
  interface PalletUtilityMangataError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletProxyProxyDefinition (263) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: SpRuntimeAccountAccountId20;
    readonly proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (267) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: SpRuntimeAccountAccountId20;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (269) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMaintenanceMaintenanceStatusInfo (270) */
  interface PalletMaintenanceMaintenanceStatusInfo extends Struct {
    readonly isMaintenance: bool;
    readonly isUpgradableInMaintenance: bool;
  }

  /** @name PalletMaintenanceError (271) */
  interface PalletMaintenanceError extends Enum {
    readonly isNotFoundationAccount: boolean;
    readonly isNotInMaintenanceMode: boolean;
    readonly isAlreadyInMaintenanceMode: boolean;
    readonly isAlreadyUpgradableInMaintenanceMode: boolean;
    readonly isAlreadyNotUpgradableInMaintenanceMode: boolean;
    readonly isUpgradeBlockedByMaintenance: boolean;
    readonly type: 'NotFoundationAccount' | 'NotInMaintenanceMode' | 'AlreadyInMaintenanceMode' | 'AlreadyUpgradableInMaintenanceMode' | 'AlreadyNotUpgradableInMaintenanceMode' | 'UpgradeBlockedByMaintenance';
  }

  /** @name PalletRolldownUpdateMetadata (278) */
  interface PalletRolldownUpdateMetadata extends Struct {
    readonly maxId: u128;
    readonly minId: u128;
    readonly updateSize: u128;
    readonly sequencer: SpRuntimeAccountAccountId20;
    readonly updateHash: H256;
  }

  /** @name PalletRolldownSequencerRights (281) */
  interface PalletRolldownSequencerRights extends Struct {
    readonly readRights: u128;
    readonly cancelRights: u128;
  }

  /** @name PalletRolldownL2Request (286) */
  interface PalletRolldownL2Request extends Enum {
    readonly isFailedDepositResolution: boolean;
    readonly asFailedDepositResolution: PalletRolldownMessagesFailedDepositResolution;
    readonly isCancel: boolean;
    readonly asCancel: PalletRolldownMessagesCancel;
    readonly isWithdrawal: boolean;
    readonly asWithdrawal: PalletRolldownMessagesWithdrawal;
    readonly type: 'FailedDepositResolution' | 'Cancel' | 'Withdrawal';
  }

  /** @name PalletRolldownMessagesFailedDepositResolution (287) */
  interface PalletRolldownMessagesFailedDepositResolution extends Struct {
    readonly requestId: PalletRolldownMessagesRequestId;
    readonly originRequestId: u128;
    readonly ferry: U8aFixed;
  }

  /** @name PalletRolldownMessagesCancel (288) */
  interface PalletRolldownMessagesCancel extends Struct {
    readonly requestId: PalletRolldownMessagesRequestId;
    readonly updater: SpRuntimeAccountAccountId20;
    readonly canceler: SpRuntimeAccountAccountId20;
    readonly range: {
      readonly start: u128;
      readonly end: u128;
    } & Struct;
    readonly hash_: H256;
  }

  /** @name PalletRolldownMessagesWithdrawal (289) */
  interface PalletRolldownMessagesWithdrawal extends Struct {
    readonly requestId: PalletRolldownMessagesRequestId;
    readonly withdrawalRecipient: U8aFixed;
    readonly tokenAddress: U8aFixed;
    readonly amount: U256;
    readonly ferryTip: U256;
  }

  /** @name PalletRolldownDisputeRole (292) */
  interface PalletRolldownDisputeRole extends Enum {
    readonly isCanceler: boolean;
    readonly isSubmitter: boolean;
    readonly type: 'Canceler' | 'Submitter';
  }

  /** @name PalletRolldownError (300) */
  interface PalletRolldownError extends Enum {
    readonly isOperationFailed: boolean;
    readonly isReadRightsExhausted: boolean;
    readonly isCancelRightsExhausted: boolean;
    readonly isEmptyUpdate: boolean;
    readonly isAddressDeserializationFailure: boolean;
    readonly isRequestDoesNotExist: boolean;
    readonly isNotEnoughAssets: boolean;
    readonly isNotEnoughAssetsForFee: boolean;
    readonly isNotEnoughAssetsForFerryTip: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isL1AssetCreationFailed: boolean;
    readonly isMathOverflow: boolean;
    readonly isTooManyRequests: boolean;
    readonly isInvalidUpdate: boolean;
    readonly isL1AssetNotFound: boolean;
    readonly isWrongRequestId: boolean;
    readonly isOnlySelectedSequencerisAllowedToUpdate: boolean;
    readonly isSequencerLastUpdateStillInDisputePeriod: boolean;
    readonly isSequencerAwaitingCancelResolution: boolean;
    readonly isMultipleUpdatesInSingleBlock: boolean;
    readonly isBlockedByMaintenanceMode: boolean;
    readonly isUnsupportedAsset: boolean;
    readonly isInvalidRange: boolean;
    readonly isNonExistingRequestId: boolean;
    readonly isUnknownAliasAccount: boolean;
    readonly isFailedDepositDoesNotExist: boolean;
    readonly isEmptyBatch: boolean;
    readonly isTokenDoesNotExist: boolean;
    readonly isNotEligibleForRefund: boolean;
    readonly isFerryHashMismatch: boolean;
    readonly isMintError: boolean;
    readonly isAssetRegistrationProblem: boolean;
    readonly isUpdateHashMishmatch: boolean;
    readonly isAlreadyExecuted: boolean;
    readonly isUninitializedChainId: boolean;
    readonly isNontransferableToken: boolean;
    readonly type: 'OperationFailed' | 'ReadRightsExhausted' | 'CancelRightsExhausted' | 'EmptyUpdate' | 'AddressDeserializationFailure' | 'RequestDoesNotExist' | 'NotEnoughAssets' | 'NotEnoughAssetsForFee' | 'NotEnoughAssetsForFerryTip' | 'BalanceOverflow' | 'L1AssetCreationFailed' | 'MathOverflow' | 'TooManyRequests' | 'InvalidUpdate' | 'L1AssetNotFound' | 'WrongRequestId' | 'OnlySelectedSequencerisAllowedToUpdate' | 'SequencerLastUpdateStillInDisputePeriod' | 'SequencerAwaitingCancelResolution' | 'MultipleUpdatesInSingleBlock' | 'BlockedByMaintenanceMode' | 'UnsupportedAsset' | 'InvalidRange' | 'NonExistingRequestId' | 'UnknownAliasAccount' | 'FailedDepositDoesNotExist' | 'EmptyBatch' | 'TokenDoesNotExist' | 'NotEligibleForRefund' | 'FerryHashMismatch' | 'MintError' | 'AssetRegistrationProblem' | 'UpdateHashMishmatch' | 'AlreadyExecuted' | 'UninitializedChainId' | 'NontransferableToken';
  }

  /** @name PalletMetamaskSignatureError (301) */
  interface PalletMetamaskSignatureError extends Enum {
    readonly isNothingToUpdate: boolean;
    readonly type: 'NothingToUpdate';
  }

  /** @name OrmlTokensBalanceLock (304) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (306) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (308) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (310) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTokenIdNotExists: boolean;
    readonly isTooManyReserves: boolean;
    readonly isNontransferableToken: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TokenIdNotExists' | 'TooManyReserves' | 'NontransferableToken';
  }

  /** @name PalletTransactionPaymentReleases (312) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletStableSwapPoolInfo (313) */
  interface PalletStableSwapPoolInfo extends Struct {
    readonly lpToken: u32;
    readonly assets: Vec<u32>;
    readonly ampCoeff: u128;
    readonly rateMultipliers: Vec<u128>;
  }

  /** @name PalletStableSwapError (314) */
  interface PalletStableSwapError extends Enum {
    readonly isAmpCoeffOutOfRange: boolean;
    readonly isInitialPoolRateOutOfRange: boolean;
    readonly isTooManyAssets: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isAssetDoesNotExist: boolean;
    readonly isSameAsset: boolean;
    readonly isNoSuchPool: boolean;
    readonly isArgumentsLengthMismatch: boolean;
    readonly isPoolInvariantBroken: boolean;
    readonly isInitialLiquidityZeroAmount: boolean;
    readonly isNoSuchAssetInPool: boolean;
    readonly isUnexpectedFailure: boolean;
    readonly isInsufficientOutputAmount: boolean;
    readonly isInsufficientInputAmount: boolean;
    readonly isExcesiveOutputAmount: boolean;
    readonly isMathOverflow: boolean;
    readonly isLiquidityTokenCreationFailed: boolean;
    readonly type: 'AmpCoeffOutOfRange' | 'InitialPoolRateOutOfRange' | 'TooManyAssets' | 'PoolAlreadyExists' | 'AssetDoesNotExist' | 'SameAsset' | 'NoSuchPool' | 'ArgumentsLengthMismatch' | 'PoolInvariantBroken' | 'InitialLiquidityZeroAmount' | 'NoSuchAssetInPool' | 'UnexpectedFailure' | 'InsufficientOutputAmount' | 'InsufficientInputAmount' | 'ExcesiveOutputAmount' | 'MathOverflow' | 'LiquidityTokenCreationFailed';
  }

  /** @name PalletXykError (316) */
  interface PalletXykError extends Enum {
    readonly isPoolAlreadyExists: boolean;
    readonly isNotEnoughAssets: boolean;
    readonly isNoSuchPool: boolean;
    readonly isNoSuchLiquidityAsset: boolean;
    readonly isNotEnoughReserve: boolean;
    readonly isZeroAmount: boolean;
    readonly isInsufficientInputAmount: boolean;
    readonly isInsufficientOutputAmount: boolean;
    readonly isSameAsset: boolean;
    readonly isAssetAlreadyExists: boolean;
    readonly isAssetDoesNotExists: boolean;
    readonly isDivisionByZero: boolean;
    readonly isUnexpectedFailure: boolean;
    readonly isNotPairedWithNativeAsset: boolean;
    readonly isSecondAssetAmountExceededExpectations: boolean;
    readonly isMathOverflow: boolean;
    readonly isLiquidityTokenCreationFailed: boolean;
    readonly isNotEnoughRewardsEarned: boolean;
    readonly isNotAPromotedPool: boolean;
    readonly isPastTimeCalculation: boolean;
    readonly isPoolAlreadyPromoted: boolean;
    readonly isSoldAmountTooLow: boolean;
    readonly isFunctionNotAvailableForThisToken: boolean;
    readonly isDisallowedPool: boolean;
    readonly isLiquidityCheckpointMathError: boolean;
    readonly isCalculateRewardsMathError: boolean;
    readonly isCalculateCumulativeWorkMaxRatioMathError: boolean;
    readonly isCalculateRewardsAllMathError: boolean;
    readonly isNoRights: boolean;
    readonly isMultiswapShouldBeAtleastTwoHops: boolean;
    readonly isMultiBuyAssetCantHaveSamePoolAtomicSwaps: boolean;
    readonly isMultiSwapCantHaveSameTokenConsequetively: boolean;
    readonly isTradingBlockedByMaintenanceMode: boolean;
    readonly isPoolIsEmpty: boolean;
    readonly type: 'PoolAlreadyExists' | 'NotEnoughAssets' | 'NoSuchPool' | 'NoSuchLiquidityAsset' | 'NotEnoughReserve' | 'ZeroAmount' | 'InsufficientInputAmount' | 'InsufficientOutputAmount' | 'SameAsset' | 'AssetAlreadyExists' | 'AssetDoesNotExists' | 'DivisionByZero' | 'UnexpectedFailure' | 'NotPairedWithNativeAsset' | 'SecondAssetAmountExceededExpectations' | 'MathOverflow' | 'LiquidityTokenCreationFailed' | 'NotEnoughRewardsEarned' | 'NotAPromotedPool' | 'PastTimeCalculation' | 'PoolAlreadyPromoted' | 'SoldAmountTooLow' | 'FunctionNotAvailableForThisToken' | 'DisallowedPool' | 'LiquidityCheckpointMathError' | 'CalculateRewardsMathError' | 'CalculateCumulativeWorkMaxRatioMathError' | 'CalculateRewardsAllMathError' | 'NoRights' | 'MultiswapShouldBeAtleastTwoHops' | 'MultiBuyAssetCantHaveSamePoolAtomicSwaps' | 'MultiSwapCantHaveSameTokenConsequetively' | 'TradingBlockedByMaintenanceMode' | 'PoolIsEmpty';
  }

  /** @name PalletProofOfStakeRewardInfo (317) */
  interface PalletProofOfStakeRewardInfo extends Struct {
    readonly activatedAmount: u128;
    readonly rewardsNotYetClaimed: u128;
    readonly rewardsAlreadyClaimed: u128;
    readonly lastCheckpoint: u32;
    readonly poolRatioAtLastCheckpoint: U256;
    readonly missingAtLastCheckpoint: U256;
  }

  /** @name PalletProofOfStakePromotedPools (319) */
  interface PalletProofOfStakePromotedPools extends Struct {
    readonly weight: u8;
    readonly rewards: U256;
  }

  /** @name PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards (323) */
  interface PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards extends Struct {
    readonly pending: u128;
    readonly pendingSessionId: u32;
    readonly total: u128;
  }

  /** @name PalletProofOfStakeSchedulesList (330) */
  interface PalletProofOfStakeSchedulesList extends Struct {
    readonly head: Option<u64>;
    readonly tail: Option<u64>;
    readonly pos: Option<u64>;
    readonly count: u64;
  }

  /** @name PalletProofOfStakeSchedule (332) */
  interface PalletProofOfStakeSchedule extends Struct {
    readonly scheduledAt: u32;
    readonly lastSession: u32;
    readonly liqToken: u32;
    readonly rewardToken: u32;
    readonly amountPerSession: u128;
  }

  /** @name PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule (333) */
  interface PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule extends Struct {
    readonly pendingPositive: u128;
    readonly pendingNegative: u128;
    readonly pendingSessionId: u32;
    readonly total: u128;
  }

  /** @name PalletProofOfStakeError (335) */
  interface PalletProofOfStakeError extends Enum {
    readonly isNotEnoughAssets: boolean;
    readonly isMathOverflow: boolean;
    readonly isNotEnoughRewardsEarned: boolean;
    readonly isNotAPromotedPool: boolean;
    readonly isPastTimeCalculation: boolean;
    readonly isLiquidityCheckpointMathError: boolean;
    readonly isCalculateRewardsMathError: boolean;
    readonly isMathError: boolean;
    readonly isCalculateRewardsAllMathError: boolean;
    readonly isMissingRewardsInfoError: boolean;
    readonly isDeprecatedExtrinsic: boolean;
    readonly isCannotScheduleRewardsInPast: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isTooManySchedules: boolean;
    readonly isTooLittleRewards: boolean;
    readonly isTooSmallVolume: boolean;
    readonly isLiquidityLockedIn3rdpartyRewards: boolean;
    readonly isNoThirdPartyPartyRewardsToClaim: boolean;
    readonly isSoloTokenPromotionForbiddenError: boolean;
    readonly isNontransferableToken: boolean;
    readonly type: 'NotEnoughAssets' | 'MathOverflow' | 'NotEnoughRewardsEarned' | 'NotAPromotedPool' | 'PastTimeCalculation' | 'LiquidityCheckpointMathError' | 'CalculateRewardsMathError' | 'MathError' | 'CalculateRewardsAllMathError' | 'MissingRewardsInfoError' | 'DeprecatedExtrinsic' | 'CannotScheduleRewardsInPast' | 'PoolDoesNotExist' | 'TooManySchedules' | 'TooLittleRewards' | 'TooSmallVolume' | 'LiquidityLockedIn3rdpartyRewards' | 'NoThirdPartyPartyRewardsToClaim' | 'SoloTokenPromotionForbiddenError' | 'NontransferableToken';
  }

  /** @name PalletFeeLockFeeLockMetadataInfo (336) */
  interface PalletFeeLockFeeLockMetadataInfo extends Struct {
    readonly periodLength: u32;
    readonly feeLockAmount: u128;
    readonly swapValueThreshold: u128;
    readonly whitelistedTokens: BTreeSet<u32>;
  }

  /** @name PalletFeeLockAccountFeeLockDataInfo (339) */
  interface PalletFeeLockAccountFeeLockDataInfo extends Struct {
    readonly totalFeeLockAmount: u128;
    readonly lastFeeLockBlock: u32;
  }

  /** @name PalletFeeLockError (340) */
  interface PalletFeeLockError extends Enum {
    readonly isFeeLocksIncorrectlyInitialzed: boolean;
    readonly isInvalidFeeLockMetadata: boolean;
    readonly isFeeLocksNotInitialized: boolean;
    readonly isNotFeeLocked: boolean;
    readonly isCantUnlockFeeYet: boolean;
    readonly isMaxCuratedTokensLimitExceeded: boolean;
    readonly isUnexpectedFailure: boolean;
    readonly type: 'FeeLocksIncorrectlyInitialzed' | 'InvalidFeeLockMetadata' | 'FeeLocksNotInitialized' | 'NotFeeLocked' | 'CantUnlockFeeYet' | 'MaxCuratedTokensLimitExceeded' | 'UnexpectedFailure';
  }

  /** @name PalletVestingMangataReleases (343) */
  interface PalletVestingMangataReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingMangataError (344) */
  interface PalletVestingMangataError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly isNoSuitableScheduleFound: boolean;
    readonly isSudoUnlockIsDisallowed: boolean;
    readonly isInvalidVestingIndex: boolean;
    readonly isMathError: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams' | 'NoSuitableScheduleFound' | 'SudoUnlockIsDisallowed' | 'InvalidVestingIndex' | 'MathError';
  }

  /** @name PalletCrowdloanRewardsRewardInfo (346) */
  interface PalletCrowdloanRewardsRewardInfo extends Struct {
    readonly totalReward: u128;
    readonly claimedReward: u128;
    readonly contributedRelayAddresses: Vec<SpRuntimeAccountAccountId20>;
  }

  /** @name PalletCrowdloanRewardsError (347) */
  interface PalletCrowdloanRewardsError extends Enum {
    readonly isAlreadyAssociated: boolean;
    readonly isBatchBeyondFundPot: boolean;
    readonly isFirstClaimAlreadyDone: boolean;
    readonly isRewardNotHighEnough: boolean;
    readonly isInvalidClaimSignature: boolean;
    readonly isInvalidFreeClaimSignature: boolean;
    readonly isNoAssociatedClaim: boolean;
    readonly isRewardsAlreadyClaimed: boolean;
    readonly isRewardVecAlreadyInitialized: boolean;
    readonly isRewardVecNotFullyInitializedYet: boolean;
    readonly isRewardsDoNotMatchFund: boolean;
    readonly isTooManyContributors: boolean;
    readonly isVestingPeriodNonValid: boolean;
    readonly isNonContributedAddressProvided: boolean;
    readonly isInsufficientNumberOfValidProofs: boolean;
    readonly isClaimingLessThanED: boolean;
    readonly isMathOverflow: boolean;
    readonly isPeriodNotSet: boolean;
    readonly isAllocationDoesNotMatch: boolean;
    readonly type: 'AlreadyAssociated' | 'BatchBeyondFundPot' | 'FirstClaimAlreadyDone' | 'RewardNotHighEnough' | 'InvalidClaimSignature' | 'InvalidFreeClaimSignature' | 'NoAssociatedClaim' | 'RewardsAlreadyClaimed' | 'RewardVecAlreadyInitialized' | 'RewardVecNotFullyInitializedYet' | 'RewardsDoNotMatchFund' | 'TooManyContributors' | 'VestingPeriodNonValid' | 'NonContributedAddressProvided' | 'InsufficientNumberOfValidProofs' | 'ClaimingLessThanED' | 'MathOverflow' | 'PeriodNotSet' | 'AllocationDoesNotMatch';
  }

  /** @name PalletIssuanceError (351) */
  interface PalletIssuanceError extends Enum {
    readonly isIssuanceConfigAlreadyInitialized: boolean;
    readonly isIssuanceConfigNotInitialized: boolean;
    readonly isTgeNotFinalized: boolean;
    readonly isTgeIsAlreadyFinalized: boolean;
    readonly isIssuanceConfigInvalid: boolean;
    readonly isMathError: boolean;
    readonly isUnknownPool: boolean;
    readonly type: 'IssuanceConfigAlreadyInitialized' | 'IssuanceConfigNotInitialized' | 'TgeNotFinalized' | 'TgeIsAlreadyFinalized' | 'IssuanceConfigInvalid' | 'MathError' | 'UnknownPool';
  }

  /** @name PalletMultipurposeLiquidityReserveStatusInfo (352) */
  interface PalletMultipurposeLiquidityReserveStatusInfo extends Struct {
    readonly stakedUnactivatedReserves: u128;
    readonly activatedUnstakedReserves: u128;
    readonly stakedAndActivatedReserves: u128;
    readonly unspentReserves: u128;
    readonly relockAmount: u128;
  }

  /** @name PalletMultipurposeLiquidityRelockStatusInfo (354) */
  interface PalletMultipurposeLiquidityRelockStatusInfo extends Struct {
    readonly amount: u128;
    readonly startingBlock: u32;
    readonly endingBlockAsBalance: u128;
  }

  /** @name PalletMultipurposeLiquidityError (356) */
  interface PalletMultipurposeLiquidityError extends Enum {
    readonly isNotALiquidityToken: boolean;
    readonly isRelockCountLimitExceeded: boolean;
    readonly isRelockInstanceIndexOOB: boolean;
    readonly isNotEnoughUnspentReserves: boolean;
    readonly isNotEnoughTokens: boolean;
    readonly isMathError: boolean;
    readonly type: 'NotALiquidityToken' | 'RelockCountLimitExceeded' | 'RelockInstanceIndexOOB' | 'NotEnoughUnspentReserves' | 'NotEnoughTokens' | 'MathError';
  }

  /** @name PalletBootstrapBootstrapPhase (357) */
  interface PalletBootstrapBootstrapPhase extends Enum {
    readonly isBeforeStart: boolean;
    readonly isWhitelist: boolean;
    readonly isPublic: boolean;
    readonly isFinished: boolean;
    readonly type: 'BeforeStart' | 'Whitelist' | 'Public' | 'Finished';
  }

  /** @name FrameSupportPalletId (361) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletBootstrapError (362) */
  interface PalletBootstrapError extends Enum {
    readonly isUnsupportedTokenId: boolean;
    readonly isNotEnoughAssets: boolean;
    readonly isNotEnoughVestedAssets: boolean;
    readonly isMathOverflow: boolean;
    readonly isUnauthorized: boolean;
    readonly isBootstrapStartInThePast: boolean;
    readonly isPhaseLengthCannotBeZero: boolean;
    readonly isAlreadyStarted: boolean;
    readonly isValuationRatio: boolean;
    readonly isFirstProvisionInSecondTokenId: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isNotFinishedYet: boolean;
    readonly isNothingToClaim: boolean;
    readonly isWrongRatio: boolean;
    readonly isBootstrapNotReadyToBeFinished: boolean;
    readonly isSameToken: boolean;
    readonly isTokenIdDoesNotExists: boolean;
    readonly isTokensActivationFailed: boolean;
    readonly isBootstrapNotSchduled: boolean;
    readonly isBootstrapFinished: boolean;
    readonly isTooLateToUpdateBootstrap: boolean;
    readonly isProvisioningBlockedByMaintenanceMode: boolean;
    readonly isBootstrapMustBePreFinalized: boolean;
    readonly type: 'UnsupportedTokenId' | 'NotEnoughAssets' | 'NotEnoughVestedAssets' | 'MathOverflow' | 'Unauthorized' | 'BootstrapStartInThePast' | 'PhaseLengthCannotBeZero' | 'AlreadyStarted' | 'ValuationRatio' | 'FirstProvisionInSecondTokenId' | 'PoolAlreadyExists' | 'NotFinishedYet' | 'NothingToClaim' | 'WrongRatio' | 'BootstrapNotReadyToBeFinished' | 'SameToken' | 'TokenIdDoesNotExists' | 'TokensActivationFailed' | 'BootstrapNotSchduled' | 'BootstrapFinished' | 'TooLateToUpdateBootstrap' | 'ProvisioningBlockedByMaintenanceMode' | 'BootstrapMustBePreFinalized';
  }

  /** @name PalletMarketError (363) */
  interface PalletMarketError extends Enum {
    readonly isNoSuchPool: boolean;
    readonly isFunctionNotAvailableForThisToken: boolean;
    readonly isDisallowedPool: boolean;
    readonly isInsufficientOutputAmount: boolean;
    readonly isExcesiveInputAmount: boolean;
    readonly isNotPairedWithNativeAsset: boolean;
    readonly isNotAPromotedPool: boolean;
    readonly isAssetDoesNotExists: boolean;
    readonly isFunctionNotAvailableForThisPoolKind: boolean;
    readonly isTradingBlockedByMaintenanceMode: boolean;
    readonly isMultiSwapSamePool: boolean;
    readonly isMultiSwapPathInvalid: boolean;
    readonly isNontransferableToken: boolean;
    readonly type: 'NoSuchPool' | 'FunctionNotAvailableForThisToken' | 'DisallowedPool' | 'InsufficientOutputAmount' | 'ExcesiveInputAmount' | 'NotPairedWithNativeAsset' | 'NotAPromotedPool' | 'AssetDoesNotExists' | 'FunctionNotAvailableForThisPoolKind' | 'TradingBlockedByMaintenanceMode' | 'MultiSwapSamePool' | 'MultiSwapPathInvalid' | 'NontransferableToken';
  }

  /** @name ParachainStakingRoundInfo (364) */
  interface ParachainStakingRoundInfo extends Struct {
    readonly current: u32;
    readonly first: u32;
    readonly length: u32;
  }

  /** @name ParachainStakingDelegator (365) */
  interface ParachainStakingDelegator extends Struct {
    readonly id: SpRuntimeAccountAccountId20;
    readonly delegations: ParachainStakingSetOrderedSetBond;
    readonly requests: ParachainStakingPendingDelegationRequests;
    readonly status: ParachainStakingDelegatorStatus;
  }

  /** @name ParachainStakingSetOrderedSetBond (366) */
  interface ParachainStakingSetOrderedSetBond extends Vec<ParachainStakingBond> {}

  /** @name ParachainStakingBond (367) */
  interface ParachainStakingBond extends Struct {
    readonly owner: SpRuntimeAccountAccountId20;
    readonly amount: u128;
    readonly liquidityToken: u32;
  }

  /** @name ParachainStakingPendingDelegationRequests (369) */
  interface ParachainStakingPendingDelegationRequests extends Struct {
    readonly requests: BTreeMap<SpRuntimeAccountAccountId20, ParachainStakingDelegationRequest>;
  }

  /** @name ParachainStakingDelegatorStatus (373) */
  interface ParachainStakingDelegatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Leaving';
  }

  /** @name ParachainStakingCollatorCandidate (374) */
  interface ParachainStakingCollatorCandidate extends Struct {
    readonly id: SpRuntimeAccountAccountId20;
    readonly bond: u128;
    readonly liquidityToken: u32;
    readonly delegators: ParachainStakingSetOrderedSetAccountId20;
    readonly topDelegations: Vec<ParachainStakingBond>;
    readonly bottomDelegations: Vec<ParachainStakingBond>;
    readonly totalCounted: u128;
    readonly totalBacking: u128;
    readonly request: Option<ParachainStakingCandidateBondRequest>;
    readonly state: ParachainStakingCollatorStatus;
  }

  /** @name ParachainStakingSetOrderedSetAccountId20 (375) */
  interface ParachainStakingSetOrderedSetAccountId20 extends Vec<SpRuntimeAccountAccountId20> {}

  /** @name ParachainStakingCollatorStatus (377) */
  interface ParachainStakingCollatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isIdle: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Idle' | 'Leaving';
  }

  /** @name ParachainStakingCollatorSnapshot (378) */
  interface ParachainStakingCollatorSnapshot extends Struct {
    readonly bond: u128;
    readonly delegations: Vec<ParachainStakingBond>;
    readonly total: u128;
    readonly liquidityToken: u32;
  }

  /** @name ParachainStakingAggregatorMetadataType (385) */
  interface ParachainStakingAggregatorMetadataType extends Struct {
    readonly tokenCollatorMap: BTreeMap<u32, SpRuntimeAccountAccountId20>;
    readonly approvedCandidates: BTreeSet<SpRuntimeAccountAccountId20>;
  }

  /** @name ParachainStakingRoundCollatorRewardInfoType (395) */
  interface ParachainStakingRoundCollatorRewardInfoType extends Struct {
    readonly collatorReward: u128;
    readonly delegatorRewards: BTreeMap<SpRuntimeAccountAccountId20, u128>;
  }

  /** @name ParachainStakingError (396) */
  interface ParachainStakingError extends Enum {
    readonly isDelegatorDNE: boolean;
    readonly isDelegatorDNEinTopNorBottom: boolean;
    readonly isDelegatorDNEInDelegatorSet: boolean;
    readonly isCandidateDNE: boolean;
    readonly isDelegationDNE: boolean;
    readonly isDelegatorExists: boolean;
    readonly isCandidateExists: boolean;
    readonly isCandidateBondBelowMin: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isDelegationBelowMin: boolean;
    readonly isAlreadyOffline: boolean;
    readonly isAlreadyActive: boolean;
    readonly isDelegatorAlreadyLeaving: boolean;
    readonly isDelegatorNotLeaving: boolean;
    readonly isDelegatorCannotLeaveYet: boolean;
    readonly isCannotDelegateIfLeaving: boolean;
    readonly isCandidateAlreadyLeaving: boolean;
    readonly isCandidateNotLeaving: boolean;
    readonly isCandidateCannotLeaveYet: boolean;
    readonly isCannotGoOnlineIfLeaving: boolean;
    readonly isExceedMaxDelegationsPerDelegator: boolean;
    readonly isAlreadyDelegatedCandidate: boolean;
    readonly isInvalidSchedule: boolean;
    readonly isCannotSetBelowMin: boolean;
    readonly isNoWritingSameValue: boolean;
    readonly isTooLowCandidateCountWeightHintJoinCandidates: boolean;
    readonly isTooLowCandidateCountWeightHintCancelLeaveCandidates: boolean;
    readonly isTooLowCandidateCountToLeaveCandidates: boolean;
    readonly isTooLowDelegationCountToDelegate: boolean;
    readonly isTooLowCandidateDelegationCountToDelegate: boolean;
    readonly isTooLowDelegationCountToLeaveDelegators: boolean;
    readonly isPendingCandidateRequestsDNE: boolean;
    readonly isPendingCandidateRequestAlreadyExists: boolean;
    readonly isPendingCandidateRequestNotDueYet: boolean;
    readonly isPendingDelegationRequestDNE: boolean;
    readonly isPendingDelegationRequestAlreadyExists: boolean;
    readonly isPendingDelegationRequestNotDueYet: boolean;
    readonly isStakingLiquidityTokenNotListed: boolean;
    readonly isTooLowCurrentStakingLiquidityTokensCount: boolean;
    readonly isStakingLiquidityTokenAlreadyListed: boolean;
    readonly isExceedMaxCollatorCandidates: boolean;
    readonly isExceedMaxTotalDelegatorsPerCandidate: boolean;
    readonly isCandidateNotAggregating: boolean;
    readonly isCandidateNotAggregatingUnderAggregator: boolean;
    readonly isCandidateAlreadyApprovedByAggregator: boolean;
    readonly isAggregatorExists: boolean;
    readonly isCollatorRoundRewardsDNE: boolean;
    readonly isDelegatorRewardsDNE: boolean;
    readonly isAggregatorDNE: boolean;
    readonly isTargettedAggregatorSameAsCurrent: boolean;
    readonly isCandidateNotApprovedByAggregator: boolean;
    readonly isAggregatorLiquidityTokenTaken: boolean;
    readonly isIncorrectRewardDelegatorCount: boolean;
    readonly isMathError: boolean;
    readonly type: 'DelegatorDNE' | 'DelegatorDNEinTopNorBottom' | 'DelegatorDNEInDelegatorSet' | 'CandidateDNE' | 'DelegationDNE' | 'DelegatorExists' | 'CandidateExists' | 'CandidateBondBelowMin' | 'InsufficientBalance' | 'DelegationBelowMin' | 'AlreadyOffline' | 'AlreadyActive' | 'DelegatorAlreadyLeaving' | 'DelegatorNotLeaving' | 'DelegatorCannotLeaveYet' | 'CannotDelegateIfLeaving' | 'CandidateAlreadyLeaving' | 'CandidateNotLeaving' | 'CandidateCannotLeaveYet' | 'CannotGoOnlineIfLeaving' | 'ExceedMaxDelegationsPerDelegator' | 'AlreadyDelegatedCandidate' | 'InvalidSchedule' | 'CannotSetBelowMin' | 'NoWritingSameValue' | 'TooLowCandidateCountWeightHintJoinCandidates' | 'TooLowCandidateCountWeightHintCancelLeaveCandidates' | 'TooLowCandidateCountToLeaveCandidates' | 'TooLowDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToDelegate' | 'TooLowDelegationCountToLeaveDelegators' | 'PendingCandidateRequestsDNE' | 'PendingCandidateRequestAlreadyExists' | 'PendingCandidateRequestNotDueYet' | 'PendingDelegationRequestDNE' | 'PendingDelegationRequestAlreadyExists' | 'PendingDelegationRequestNotDueYet' | 'StakingLiquidityTokenNotListed' | 'TooLowCurrentStakingLiquidityTokensCount' | 'StakingLiquidityTokenAlreadyListed' | 'ExceedMaxCollatorCandidates' | 'ExceedMaxTotalDelegatorsPerCandidate' | 'CandidateNotAggregating' | 'CandidateNotAggregatingUnderAggregator' | 'CandidateAlreadyApprovedByAggregator' | 'AggregatorExists' | 'CollatorRoundRewardsDNE' | 'DelegatorRewardsDNE' | 'AggregatorDNE' | 'TargettedAggregatorSameAsCurrent' | 'CandidateNotApprovedByAggregator' | 'AggregatorLiquidityTokenTaken' | 'IncorrectRewardDelegatorCount' | 'MathError';
  }

  /** @name PalletSequencerStakingError (408) */
  interface PalletSequencerStakingError extends Enum {
    readonly isOperationFailed: boolean;
    readonly isMathOverflow: boolean;
    readonly isSequencerIsNotInActiveSet: boolean;
    readonly isSequencerAlreadyInActiveSet: boolean;
    readonly isCantUnstakeWhileInActiveSet: boolean;
    readonly isNotEnoughSequencerStake: boolean;
    readonly isMaxSequencersLimitReached: boolean;
    readonly isTestUnstakingError: boolean;
    readonly isUnknownChainId: boolean;
    readonly isNoStakeToUnStake: boolean;
    readonly isAddressInUse: boolean;
    readonly isAliasAccountIsActiveSequencer: boolean;
    readonly isSequencerAccountIsActiveSequencerAlias: boolean;
    readonly isSequencerRoundRewardsDNE: boolean;
    readonly type: 'OperationFailed' | 'MathOverflow' | 'SequencerIsNotInActiveSet' | 'SequencerAlreadyInActiveSet' | 'CantUnstakeWhileInActiveSet' | 'NotEnoughSequencerStake' | 'MaxSequencersLimitReached' | 'TestUnstakingError' | 'UnknownChainId' | 'NoStakeToUnStake' | 'AddressInUse' | 'AliasAccountIsActiveSequencer' | 'SequencerAccountIsActiveSequencerAlias' | 'SequencerRoundRewardsDNE';
  }

  /** @name SpCoreCryptoKeyTypeId (412) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (413) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletGrandpaStoredState (417) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (418) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaError (420) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name OrmlAssetRegistryModuleError (421) */
  interface OrmlAssetRegistryModuleError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isBadVersion: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isConflictingAssetId: boolean;
    readonly isInvalidAssetString: boolean;
    readonly isConflictingL1Asset: boolean;
    readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingAssetId' | 'InvalidAssetString' | 'ConflictingL1Asset';
  }

  /** @name PalletTreasuryProposal (422) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: SpRuntimeAccountAccountId20;
    readonly value: u128;
    readonly beneficiary: SpRuntimeAccountAccountId20;
    readonly bond: u128;
  }

  /** @name PalletTreasurySpendStatus (424) */
  interface PalletTreasurySpendStatus extends Struct {
    readonly assetKind: Null;
    readonly amount: u128;
    readonly beneficiary: SpRuntimeAccountAccountId20;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PalletTreasuryPaymentState;
  }

  /** @name PalletTreasuryPaymentState (425) */
  interface PalletTreasuryPaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: Null;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name PalletTreasuryError (426) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly isFailedToConvertBalance: boolean;
    readonly isSpendExpired: boolean;
    readonly isEarlyPayout: boolean;
    readonly isAlreadyAttempted: boolean;
    readonly isPayoutError: boolean;
    readonly isNotAttempted: boolean;
    readonly isInconclusive: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved' | 'FailedToConvertBalance' | 'SpendExpired' | 'EarlyPayout' | 'AlreadyAttempted' | 'PayoutError' | 'NotAttempted' | 'Inconclusive';
  }

  /** @name PalletSudoMangataError (427) */
  interface PalletSudoMangataError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletSudoOriginError (428) */
  type PalletSudoOriginError = Null;

  /** @name PalletCollectiveMangataVotes (430) */
  interface PalletCollectiveMangataVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<SpRuntimeAccountAccountId20>;
    readonly nays: Vec<SpRuntimeAccountAccountId20>;
    readonly end: u32;
  }

  /** @name PalletCollectiveMangataError (431) */
  interface PalletCollectiveMangataError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooEarlyToCloseByNonFoundationAccount: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly isNotFoundationAccountOrRoot: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooEarlyToCloseByNonFoundationAccount' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember' | 'NotFoundationAccountOrRoot';
  }

  /** @name PalletIdentityRegistration (433) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityLegacyIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (442) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: SpRuntimeAccountAccountId20;
    readonly fee: u128;
    readonly fields: u64;
  }

  /** @name PalletIdentityAuthorityProperties (444) */
  interface PalletIdentityAuthorityProperties extends Struct {
    readonly suffix: Bytes;
    readonly allocation: u32;
  }

  /** @name PalletIdentityError (446) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly isInvalidSuffix: boolean;
    readonly isNotUsernameAuthority: boolean;
    readonly isNoAllocation: boolean;
    readonly isInvalidSignature: boolean;
    readonly isRequiresSignature: boolean;
    readonly isInvalidUsername: boolean;
    readonly isUsernameTaken: boolean;
    readonly isNoUsername: boolean;
    readonly isNotExpired: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed' | 'InvalidSuffix' | 'NotUsernameAuthority' | 'NoAllocation' | 'InvalidSignature' | 'RequiresSignature' | 'InvalidUsername' | 'UsernameTaken' | 'NoUsername' | 'NotExpired';
  }

  /** @name PalletMembershipError (448) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name FrameSystemExtensionsCheckSpecVersion (451) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (452) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (453) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (456) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (457) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (458) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (459) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name RollupRuntimeRuntime (460) */
  type RollupRuntimeRuntime = Null;

} // declare module
