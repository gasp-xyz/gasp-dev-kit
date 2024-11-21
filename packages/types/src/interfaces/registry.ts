// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemCodeUpgradeAuthorization, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, MangataTypesAssetsCustomMetadata, MangataTypesAssetsL1Asset, MangataTypesAssetsXcmMetadata, MangataTypesAssetsXykMetadata, MangataTypesMultipurposeLiquidityActivateKind, MangataTypesMultipurposeLiquidityBondKind, OrmlAssetRegistryModuleCall, OrmlAssetRegistryModuleError, OrmlAssetRegistryModuleEvent, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlTraitsAssetRegistryAssetMetadata, PalletBootstrapBootstrapPhase, PalletBootstrapCall, PalletBootstrapError, PalletBootstrapEvent, PalletCollectiveMangataCall, PalletCollectiveMangataError, PalletCollectiveMangataEvent, PalletCollectiveMangataRawOrigin, PalletCollectiveMangataVotes, PalletCrowdloanRewardsCall, PalletCrowdloanRewardsError, PalletCrowdloanRewardsEvent, PalletCrowdloanRewardsRewardInfo, PalletFeeLockAccountFeeLockDataInfo, PalletFeeLockCall, PalletFeeLockError, PalletFeeLockEvent, PalletFeeLockFeeLockMetadataInfo, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityAuthorityProperties, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityJudgement, PalletIdentityLegacyIdentityInfo, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletIssuanceCall, PalletIssuanceError, PalletIssuanceEvent, PalletIssuanceIssuanceInfo, PalletIssuanceTgeInfo, PalletMaintenanceCall, PalletMaintenanceError, PalletMaintenanceEvent, PalletMaintenanceMaintenanceStatusInfo, PalletMarketAtomicSwap, PalletMarketCall, PalletMarketError, PalletMarketEvent, PalletMarketPoolKind, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMetamaskSignatureCall, PalletMetamaskSignatureError, PalletMetamaskSignatureEvent, PalletMultipurposeLiquidityCall, PalletMultipurposeLiquidityError, PalletMultipurposeLiquidityEvent, PalletMultipurposeLiquidityRelockStatusInfo, PalletMultipurposeLiquidityReserveStatusInfo, PalletProofOfStakeCall, PalletProofOfStakeError, PalletProofOfStakeEvent, PalletProofOfStakePromotedPools, PalletProofOfStakeRewardInfo, PalletProofOfStakeSchedule, PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule, PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards, PalletProofOfStakeSchedulesList, PalletProofOfStakeThirdPartyActivationKind, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletRolldownBatchSource, PalletRolldownCall, PalletRolldownDisputeRole, PalletRolldownError, PalletRolldownEvent, PalletRolldownL1RequestProcessingError, PalletRolldownL2Request, PalletRolldownMessagesCancel, PalletRolldownMessagesCancelResolution, PalletRolldownMessagesChain, PalletRolldownMessagesDeposit, PalletRolldownMessagesFailedDepositResolution, PalletRolldownMessagesL1Update, PalletRolldownMessagesOrigin, PalletRolldownMessagesRequestId, PalletRolldownMessagesWithdrawal, PalletRolldownSequencerRights, PalletSequencerStakingCall, PalletSequencerStakingError, PalletSequencerStakingEvent, PalletSequencerStakingPayoutRounds, PalletSequencerStakingStakeAction, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletStableSwapError, PalletStableSwapEvent, PalletStableSwapPoolInfo, PalletSudoMangataCall, PalletSudoMangataError, PalletSudoMangataEvent, PalletSudoOriginCall, PalletSudoOriginError, PalletSudoOriginEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryPaymentState, PalletTreasuryProposal, PalletTreasurySpendStatus, PalletUtilityMangataCall, PalletUtilityMangataError, PalletUtilityMangataEvent, PalletVestingMangataCall, PalletVestingMangataError, PalletVestingMangataEvent, PalletVestingMangataReleases, PalletVestingMangataVestingInfo, PalletXykError, PalletXykEvent, ParachainStakingAggregatorMetadataType, ParachainStakingBond, ParachainStakingCall, ParachainStakingCandidateBondChange, ParachainStakingCandidateBondRequest, ParachainStakingCollatorCandidate, ParachainStakingCollatorSnapshot, ParachainStakingCollatorStatus, ParachainStakingDelegationChange, ParachainStakingDelegationRequest, ParachainStakingDelegator, ParachainStakingDelegatorAdded, ParachainStakingDelegatorStatus, ParachainStakingError, ParachainStakingEvent, ParachainStakingMetadataUpdateAction, ParachainStakingPairedOrLiquidityToken, ParachainStakingPayoutRounds, ParachainStakingPendingDelegationRequests, ParachainStakingRoundCollatorRewardInfoType, ParachainStakingRoundInfo, ParachainStakingSetOrderedSetAccountId20, ParachainStakingSetOrderedSetBond, RollupRuntimeOriginCaller, RollupRuntimeRuntime, RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, RollupRuntimeSessionKeys, SpArithmeticArithmeticError, SpConsensusAuraSr25519AppSr25519Public, SpConsensusGrandpaAppPublic, SpConsensusGrandpaAppSignature, SpConsensusGrandpaEquivocation, SpConsensusGrandpaEquivocationProof, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreVoid, SpRuntimeAccountAccountId20, SpRuntimeAccountEthereumSignature, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeTokenError, SpRuntimeTransactionalError, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
    FinalityGrandpaPrevote: FinalityGrandpaPrevote;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemCodeUpgradeAuthorization: FrameSystemCodeUpgradeAuthorization;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    MangataTypesAssetsCustomMetadata: MangataTypesAssetsCustomMetadata;
    MangataTypesAssetsL1Asset: MangataTypesAssetsL1Asset;
    MangataTypesAssetsXcmMetadata: MangataTypesAssetsXcmMetadata;
    MangataTypesAssetsXykMetadata: MangataTypesAssetsXykMetadata;
    MangataTypesMultipurposeLiquidityActivateKind: MangataTypesMultipurposeLiquidityActivateKind;
    MangataTypesMultipurposeLiquidityBondKind: MangataTypesMultipurposeLiquidityBondKind;
    OrmlAssetRegistryModuleCall: OrmlAssetRegistryModuleCall;
    OrmlAssetRegistryModuleError: OrmlAssetRegistryModuleError;
    OrmlAssetRegistryModuleEvent: OrmlAssetRegistryModuleEvent;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlTraitsAssetRegistryAssetMetadata: OrmlTraitsAssetRegistryAssetMetadata;
    PalletBootstrapBootstrapPhase: PalletBootstrapBootstrapPhase;
    PalletBootstrapCall: PalletBootstrapCall;
    PalletBootstrapError: PalletBootstrapError;
    PalletBootstrapEvent: PalletBootstrapEvent;
    PalletCollectiveMangataCall: PalletCollectiveMangataCall;
    PalletCollectiveMangataError: PalletCollectiveMangataError;
    PalletCollectiveMangataEvent: PalletCollectiveMangataEvent;
    PalletCollectiveMangataRawOrigin: PalletCollectiveMangataRawOrigin;
    PalletCollectiveMangataVotes: PalletCollectiveMangataVotes;
    PalletCrowdloanRewardsCall: PalletCrowdloanRewardsCall;
    PalletCrowdloanRewardsError: PalletCrowdloanRewardsError;
    PalletCrowdloanRewardsEvent: PalletCrowdloanRewardsEvent;
    PalletCrowdloanRewardsRewardInfo: PalletCrowdloanRewardsRewardInfo;
    PalletFeeLockAccountFeeLockDataInfo: PalletFeeLockAccountFeeLockDataInfo;
    PalletFeeLockCall: PalletFeeLockCall;
    PalletFeeLockError: PalletFeeLockError;
    PalletFeeLockEvent: PalletFeeLockEvent;
    PalletFeeLockFeeLockMetadataInfo: PalletFeeLockFeeLockMetadataInfo;
    PalletGrandpaCall: PalletGrandpaCall;
    PalletGrandpaError: PalletGrandpaError;
    PalletGrandpaEvent: PalletGrandpaEvent;
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
    PalletGrandpaStoredState: PalletGrandpaStoredState;
    PalletIdentityAuthorityProperties: PalletIdentityAuthorityProperties;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityLegacyIdentityInfo: PalletIdentityLegacyIdentityInfo;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletIssuanceCall: PalletIssuanceCall;
    PalletIssuanceError: PalletIssuanceError;
    PalletIssuanceEvent: PalletIssuanceEvent;
    PalletIssuanceIssuanceInfo: PalletIssuanceIssuanceInfo;
    PalletIssuanceTgeInfo: PalletIssuanceTgeInfo;
    PalletMaintenanceCall: PalletMaintenanceCall;
    PalletMaintenanceError: PalletMaintenanceError;
    PalletMaintenanceEvent: PalletMaintenanceEvent;
    PalletMaintenanceMaintenanceStatusInfo: PalletMaintenanceMaintenanceStatusInfo;
    PalletMarketAtomicSwap: PalletMarketAtomicSwap;
    PalletMarketCall: PalletMarketCall;
    PalletMarketError: PalletMarketError;
    PalletMarketEvent: PalletMarketEvent;
    PalletMarketPoolKind: PalletMarketPoolKind;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMetamaskSignatureCall: PalletMetamaskSignatureCall;
    PalletMetamaskSignatureError: PalletMetamaskSignatureError;
    PalletMetamaskSignatureEvent: PalletMetamaskSignatureEvent;
    PalletMultipurposeLiquidityCall: PalletMultipurposeLiquidityCall;
    PalletMultipurposeLiquidityError: PalletMultipurposeLiquidityError;
    PalletMultipurposeLiquidityEvent: PalletMultipurposeLiquidityEvent;
    PalletMultipurposeLiquidityRelockStatusInfo: PalletMultipurposeLiquidityRelockStatusInfo;
    PalletMultipurposeLiquidityReserveStatusInfo: PalletMultipurposeLiquidityReserveStatusInfo;
    PalletProofOfStakeCall: PalletProofOfStakeCall;
    PalletProofOfStakeError: PalletProofOfStakeError;
    PalletProofOfStakeEvent: PalletProofOfStakeEvent;
    PalletProofOfStakePromotedPools: PalletProofOfStakePromotedPools;
    PalletProofOfStakeRewardInfo: PalletProofOfStakeRewardInfo;
    PalletProofOfStakeSchedule: PalletProofOfStakeSchedule;
    PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule: PalletProofOfStakeScheduleRewardsCalculatorActivatedLiquidityPerSchedule;
    PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards: PalletProofOfStakeScheduleRewardsCalculatorScheduleRewards;
    PalletProofOfStakeSchedulesList: PalletProofOfStakeSchedulesList;
    PalletProofOfStakeThirdPartyActivationKind: PalletProofOfStakeThirdPartyActivationKind;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletRolldownBatchSource: PalletRolldownBatchSource;
    PalletRolldownCall: PalletRolldownCall;
    PalletRolldownDisputeRole: PalletRolldownDisputeRole;
    PalletRolldownError: PalletRolldownError;
    PalletRolldownEvent: PalletRolldownEvent;
    PalletRolldownL1RequestProcessingError: PalletRolldownL1RequestProcessingError;
    PalletRolldownL2Request: PalletRolldownL2Request;
    PalletRolldownMessagesCancel: PalletRolldownMessagesCancel;
    PalletRolldownMessagesCancelResolution: PalletRolldownMessagesCancelResolution;
    PalletRolldownMessagesChain: PalletRolldownMessagesChain;
    PalletRolldownMessagesDeposit: PalletRolldownMessagesDeposit;
    PalletRolldownMessagesFailedDepositResolution: PalletRolldownMessagesFailedDepositResolution;
    PalletRolldownMessagesL1Update: PalletRolldownMessagesL1Update;
    PalletRolldownMessagesOrigin: PalletRolldownMessagesOrigin;
    PalletRolldownMessagesRequestId: PalletRolldownMessagesRequestId;
    PalletRolldownMessagesWithdrawal: PalletRolldownMessagesWithdrawal;
    PalletRolldownSequencerRights: PalletRolldownSequencerRights;
    PalletSequencerStakingCall: PalletSequencerStakingCall;
    PalletSequencerStakingError: PalletSequencerStakingError;
    PalletSequencerStakingEvent: PalletSequencerStakingEvent;
    PalletSequencerStakingPayoutRounds: PalletSequencerStakingPayoutRounds;
    PalletSequencerStakingStakeAction: PalletSequencerStakingStakeAction;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletStableSwapError: PalletStableSwapError;
    PalletStableSwapEvent: PalletStableSwapEvent;
    PalletStableSwapPoolInfo: PalletStableSwapPoolInfo;
    PalletSudoMangataCall: PalletSudoMangataCall;
    PalletSudoMangataError: PalletSudoMangataError;
    PalletSudoMangataEvent: PalletSudoMangataEvent;
    PalletSudoOriginCall: PalletSudoOriginCall;
    PalletSudoOriginError: PalletSudoOriginError;
    PalletSudoOriginEvent: PalletSudoOriginEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryPaymentState: PalletTreasuryPaymentState;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletTreasurySpendStatus: PalletTreasurySpendStatus;
    PalletUtilityMangataCall: PalletUtilityMangataCall;
    PalletUtilityMangataError: PalletUtilityMangataError;
    PalletUtilityMangataEvent: PalletUtilityMangataEvent;
    PalletVestingMangataCall: PalletVestingMangataCall;
    PalletVestingMangataError: PalletVestingMangataError;
    PalletVestingMangataEvent: PalletVestingMangataEvent;
    PalletVestingMangataReleases: PalletVestingMangataReleases;
    PalletVestingMangataVestingInfo: PalletVestingMangataVestingInfo;
    PalletXykError: PalletXykError;
    PalletXykEvent: PalletXykEvent;
    ParachainStakingAggregatorMetadataType: ParachainStakingAggregatorMetadataType;
    ParachainStakingBond: ParachainStakingBond;
    ParachainStakingCall: ParachainStakingCall;
    ParachainStakingCandidateBondChange: ParachainStakingCandidateBondChange;
    ParachainStakingCandidateBondRequest: ParachainStakingCandidateBondRequest;
    ParachainStakingCollatorCandidate: ParachainStakingCollatorCandidate;
    ParachainStakingCollatorSnapshot: ParachainStakingCollatorSnapshot;
    ParachainStakingCollatorStatus: ParachainStakingCollatorStatus;
    ParachainStakingDelegationChange: ParachainStakingDelegationChange;
    ParachainStakingDelegationRequest: ParachainStakingDelegationRequest;
    ParachainStakingDelegator: ParachainStakingDelegator;
    ParachainStakingDelegatorAdded: ParachainStakingDelegatorAdded;
    ParachainStakingDelegatorStatus: ParachainStakingDelegatorStatus;
    ParachainStakingError: ParachainStakingError;
    ParachainStakingEvent: ParachainStakingEvent;
    ParachainStakingMetadataUpdateAction: ParachainStakingMetadataUpdateAction;
    ParachainStakingPairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken;
    ParachainStakingPayoutRounds: ParachainStakingPayoutRounds;
    ParachainStakingPendingDelegationRequests: ParachainStakingPendingDelegationRequests;
    ParachainStakingRoundCollatorRewardInfoType: ParachainStakingRoundCollatorRewardInfoType;
    ParachainStakingRoundInfo: ParachainStakingRoundInfo;
    ParachainStakingSetOrderedSetAccountId20: ParachainStakingSetOrderedSetAccountId20;
    ParachainStakingSetOrderedSetBond: ParachainStakingSetOrderedSetBond;
    RollupRuntimeOriginCaller: RollupRuntimeOriginCaller;
    RollupRuntimeRuntime: RollupRuntimeRuntime;
    RollupRuntimeRuntimeConfigConfigPalletProxyProxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType;
    RollupRuntimeSessionKeys: RollupRuntimeSessionKeys;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpConsensusGrandpaAppPublic: SpConsensusGrandpaAppPublic;
    SpConsensusGrandpaAppSignature: SpConsensusGrandpaAppSignature;
    SpConsensusGrandpaEquivocation: SpConsensusGrandpaEquivocation;
    SpConsensusGrandpaEquivocationProof: SpConsensusGrandpaEquivocationProof;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeAccountAccountId20: SpRuntimeAccountAccountId20;
    SpRuntimeAccountEthereumSignature: SpRuntimeAccountEthereumSignature;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
  } // InterfaceTypes
} // declare module
