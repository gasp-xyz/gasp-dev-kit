// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Null, Option, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { Call, H256, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { MangataTypesAssetsCustomMetadata, MangataTypesAssetsL1Asset, MangataTypesMultipurposeLiquidityActivateKind, MangataTypesMultipurposeLiquidityBondKind, OrmlTraitsAssetRegistryAssetMetadata, PalletIdentityJudgement, PalletIdentityLegacyIdentityInfo, PalletIssuanceTgeInfo, PalletProofOfStakeThirdPartyActivationKind, PalletRolldownMessagesChain, PalletRolldownMessagesL1Update, PalletRolldownMessagesRequestId, PalletSequencerStakingStakeAction, PalletVestingMangataVestingInfo, ParachainStakingMetadataUpdateAction, ParachainStakingPairedOrLiquidityToken, RollupRuntimeOriginCaller, RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, RollupRuntimeSessionKeys, SpConsensusGrandpaEquivocationProof, SpCoreVoid, SpRuntimeAccountAccountId20, SpRuntimeAccountEthereumSignature, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      registerAsset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | { decimals?: any; name?: any; symbol?: any; existentialDeposit?: any; additional?: any } | string | Uint8Array, assetId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<u32>]>;
      registerL1Asset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | { decimals?: any; name?: any; symbol?: any; existentialDeposit?: any; additional?: any } | string | Uint8Array, assetId: Option<u32> | null | Uint8Array | u32 | AnyNumber, l1Asset: MangataTypesAssetsL1Asset | { Ethereum: any } | { Arbitrum: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<u32>, MangataTypesAssetsL1Asset]>;
      updateAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, decimals: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, additional: Option<MangataTypesAssetsCustomMetadata> | null | Uint8Array | MangataTypesAssetsCustomMetadata | { xcm?: any; xyk?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>, Option<Bytes>, Option<Bytes>, Option<u128>, Option<MangataTypesAssetsCustomMetadata>]>;
      updateL1AssetData: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, l1Asset: Option<MangataTypesAssetsL1Asset> | null | Uint8Array | MangataTypesAssetsL1Asset | { Ethereum: any } | { Arbitrum: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<MangataTypesAssetsL1Asset>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bootstrap: {
      /**
       * Used to cancel active bootstrap. Can only be called before bootstrap is actually started
       **/
      cancelBootstrap: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * When bootstrap is in [`BootstrapPhase::Finished`] state user can claim his part of liquidity tokens comparing to `claim_liquidity_tokens` when calling `claim_and_activate_liquidity_tokens` tokens will be automatically activated.
       **/
      claimAndActivateLiquidityTokens: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * When bootstrap is in [`BootstrapPhase::Finished`] state user can claim his part of liquidity tokens.
       **/
      claimLiquidityTokens: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Allows claiming rewards for some account that haven't done that yet. The only difference between
       * calling [`Pallet::claim_liquidity_tokens_for_account`] by some other account and calling [`Pallet::claim_liquidity_tokens`] directly by that account is account that will be charged for transaction fee.
       * # Args:
       * - `other` - account in behalf of which liquidity tokens should be claimed
       **/
      claimLiquidityTokensForAccount: AugmentedSubmittable<(account: SpRuntimeAccountAccountId20 | string | Uint8Array, activateRewards: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, bool]>;
      /**
       * Used to complete resetting Bootstrap state and prepare it for running another bootstrap.
       * It should be called after pre_finalize has produced the [`Event::BootstrapReadyToBeFinalized`] event.
       **/
      finalize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Used to reset Bootstrap state of large storages and prepare it for running another bootstrap.
       * It should be called multiple times until it produces [`Event::BootstrapReadyToBeFinalized`] event.
       * 
       * **!!! Cleaning up storage is complex operation and pruning all storage items related to particular
       * bootstrap might not fit in a single block. As a result tx can be rejected !!!**
       **/
      preFinalize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Allows for provisioning one of the tokens from currently bootstrapped pair. Can only be called during:
       * - [`BootstrapPhase::Whitelist`]
       * - [`BootstrapPhase::Public`]
       * 
       * phases.
       * 
       * # Args:
       * - `token_id` - id of the token to provision (should be one of the currently bootstraped pair([`ActivePair`]))
       * - `amount` - amount of the token to provision
       **/
      provision: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Used for starting/scheduling new bootstrap
       * 
       * # Args:
       * - `first_token_id` - first token of the tokens pair
       * - `second_token_id`: second token of the tokens pair
       * - `ido_start` - number of block when bootstrap will be started (people will be allowed to participate)
       * - `whitelist_phase_length`: - length of whitelist phase
       * - `public_phase_lenght`- length of public phase
       * - `promote_bootstrap_pool`- whether liquidity pool created by bootstrap should be promoted
       * - `max_first_to_second_ratio` - represented as (numerator,denominator) - Ratio may be used to limit participations of second token id. Ratio between first and second token needs to be held during whole bootstrap. Whenever user tries to participate (using [`Pallet::provision`] extrinsic) the following conditions is check.
       * ```ignore
       * all previous first participations + first token participations             ratio numerator
       * ----------------------------------------------------------------------- <= ------------------
       * all previous second token participations + second token participations     ratio denominator
       * ```
       * and if it evaluates to `false` extrinsic will fail.
       * 
       * **Because of above equation only participations with first token of a bootstrap pair are limited!**
       * 
       * # Examples
       * Consider:
       * 
       * - user willing to participate 1000 of first token, when:
       * - ratio set during bootstrap schedule is is set to (1/2)
       * - sum of first token participations - 10_000
       * - sum of second token participations - 20_000
       * 
       * participation extrinsic will **fail** because ratio condition **is not met**
       * ```ignore
       * 10_000 + 10_000      1
       * --------------- <=  ---
       * 20_000           2
       * ```
       * 
       * - user willing to participate 1000 of first token, when:
       * - ratio set during bootstrap schedule is is set to (1/2)
       * - sum of first token participations - 10_000
       * - sum of second token participations - 40_000
       * 
       * participation extrinsic will **succeed** because ratio condition **is met**
       * ```ignore
       * 10_000 + 10_000      1
       * --------------- <=  ---
       * 40_000           2
       * ```
       * 
       * 
       * **If one doesn't want to limit participations in any way, ratio should be set to (u128::MAX,0) - then ratio requirements are always met**
       * 
       * ```ignore
       * all previous first participations + first token participations                u128::MAX
       * ----------------------------------------------------------------------- <= ------------------
       * all previous second token participations + second token participations            1
       * ```
       **/
      scheduleBootstrap: AugmentedSubmittable<(firstTokenId: u32 | AnyNumber | Uint8Array, secondTokenId: u32 | AnyNumber | Uint8Array, idoStart: u32 | AnyNumber | Uint8Array, whitelistPhaseLength: Option<u32> | null | Uint8Array | u32 | AnyNumber, publicPhaseLength: u32 | AnyNumber | Uint8Array, maxFirstToSecondRatio: Option<ITuple<[u128, u128]>> | null | Uint8Array | ITuple<[u128, u128]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], promoteBootstrapPool: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, Option<u32>, u32, Option<ITuple<[u128, u128]>>, bool]>;
      updatePromoteBootstrapPool: AugmentedSubmittable<(promoteBootstrapPool: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Allows for whitelisting accounts, so they can participate in during whitelist phase. The list of
       * account is extended with every subsequent call
       **/
      whitelistAccounts: AugmentedSubmittable<(accounts: Vec<SpRuntimeAccountAccountId20> | (SpRuntimeAccountAccountId20 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpRuntimeAccountAccountId20>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * ## Complexity
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
       * 
       * Must be called by the Root origin or a foundation account.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * ## Complexity
       * O(P) where P is the number of max proposals
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * ## Complexity:
       * - `O(B + M + P)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` members-count (code-bounded)
       * - `P` complexity of dispatching `proposal`
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * ## Complexity
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       * 
       * The dispatch of this call must be `SetMembersOrigin`.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # WARNING:
       * 
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       * 
       * ## Complexity:
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<SpRuntimeAccountAccountId20> | (SpRuntimeAccountAccountId20 | string | Uint8Array)[], prime: Option<SpRuntimeAccountAccountId20> | null | Uint8Array | SpRuntimeAccountAccountId20 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<SpRuntimeAccountAccountId20>, Option<SpRuntimeAccountAccountId20>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * ## Complexity
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    crowdloan: {
      /**
       * Associate a native rewards_destination identity with a crowdloan contribution.
       * 
       * The caller needs to provide the unassociated relay account and a proof to succeed
       * with the association
       * The proof is nothing but a signature over the reward_address using the relay keys
       **/
      associateNativeIdentity: AugmentedSubmittable<(rewardAccount: SpRuntimeAccountAccountId20 | string | Uint8Array, relayAccount: SpRuntimeAccountAccountId20 | string | Uint8Array, proof: SpRuntimeAccountEthereumSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, SpRuntimeAccountEthereumSignature]>;
      /**
       * Change reward account by submitting proofs from relay accounts
       * 
       * The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
       * The account to be changed needs to be submitted as 'previous_account'
       * Origin must be RewardAddressChangeOrigin
       **/
      changeAssociationWithRelayKeys: AugmentedSubmittable<(rewardAccount: SpRuntimeAccountAccountId20 | string | Uint8Array, previousAccount: SpRuntimeAccountAccountId20 | string | Uint8Array, proofs: Vec<ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountEthereumSignature]>> | ([SpRuntimeAccountAccountId20 | string | Uint8Array, SpRuntimeAccountEthereumSignature | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, Vec<ITuple<[SpRuntimeAccountAccountId20, SpRuntimeAccountEthereumSignature]>>]>;
      /**
       * Collect rewards from particular crowdloan.
       * If crowdloan_id is not set current [`CrowdloanId`] id will be used.
       * Caller is instantly rewarded with [`InitializationPayment`] % of available rewards,
       * remaining funds are locked according to schedule(using `pallet_mangata_vesting` configured
       * by [`Pallet::<T>::complete_initialization`] call.
       **/
      claim: AugmentedSubmittable<(crowdloanId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * This extrinsic completes the initialization if some checks are fullfiled. These checks are:
       * -The reward contribution money matches the crowdloan pot
       * -The end vesting block is higher than the init vesting block
       * -The initialization has not complete yet
       **/
      completeInitialization: AugmentedSubmittable<(leaseStartBlock: u32 | AnyNumber | Uint8Array, leaseEndingBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Initialize the reward distribution storage. It shortcuts whenever an error is found
       * This does not enforce any checks other than making sure we dont go over funds
       * complete_initialization should perform any additional
       **/
      initializeRewardVec: AugmentedSubmittable<(rewards: Vec<ITuple<[SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>, u128]>> | ([SpRuntimeAccountAccountId20 | string | Uint8Array, Option<SpRuntimeAccountAccountId20> | null | Uint8Array | SpRuntimeAccountAccountId20 | string, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>, u128]>>]>;
      /**
       * Initialize the reward distribution storage. It shortcuts whenever an error is found
       * Sets crowdloan allocation for:
       * - current round of crowdloan - if it has not been completed (`[Pallet::<T>::complete_initialization]`)
       * - following round of crowdloan rewards payment if previous one has been already
       * completed
       **/
      setCrowdloanAllocation: AugmentedSubmittable<(crowdloanAllocationAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Update reward address, proving that the caller owns the current native key
       **/
      updateRewardAddress: AugmentedSubmittable<(newRewardAccount: SpRuntimeAccountAccountId20 | string | Uint8Array, crowdloanId: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Option<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    feeLock: {
      unlockFee: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      updateFeeLockMetadata: AugmentedSubmittable<(periodLength: Option<u32> | null | Uint8Array | u32 | AnyNumber, feeLockAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, swapValueThreshold: Option<u128> | null | Uint8Array | u128 | AnyNumber, shouldBeWhitelisted: Option<Vec<ITuple<[u32, bool]>>> | null | Uint8Array | Vec<ITuple<[u32, bool]>> | ([u32 | AnyNumber | Uint8Array, bool | boolean | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Option<u32>, Option<u128>, Option<u128>, Option<Vec<ITuple<[u32, bool]>>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    foundationMembers: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<SpRuntimeAccountAccountId20> | (SpRuntimeAccountAccountId20 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpRuntimeAccountAccountId20>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: SpRuntimeAccountAccountId20 | string | Uint8Array, add: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has stalled.
       * 
       * This will trigger a forced authority set change at the beginning of the next session, to
       * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
       * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
       * The block production rate (which may be slowed down because of finality lagging) should
       * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
       * authority will start voting on top of `best_finalized_block_number` for new finalized
       * blocks. `best_finalized_block_number` should be the highest of the latest finalized
       * block of all validators of the new authority set.
       * 
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpCoreVoid]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpCoreVoid]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * Accept a given username that an `authority` granted. The call must include the full
       * username, as in `username.suffix`.
       **/
      acceptUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Add a registrar to the system.
       * 
       * The dispatch origin for this call must be `T::RegistrarOrigin`.
       * 
       * - `account`: the account of the registrar.
       * 
       * Emits `RegistrarAdded` if successful.
       **/
      addRegistrar: AugmentedSubmittable<(account: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Add the given account to the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      addSub: AugmentedSubmittable<(sub: SpRuntimeAccountAccountId20 | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Data]>;
      /**
       * Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
       * 
       * The authority can grant up to `allocation` usernames. To top up their allocation, they
       * should just issue (or request via governance) a new `add_username_authority` call.
       **/
      addUsernameAuthority: AugmentedSubmittable<(authority: SpRuntimeAccountAccountId20 | string | Uint8Array, suffix: Bytes | string | Uint8Array, allocation: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Bytes, u32]>;
      /**
       * Cancel a previous request.
       * 
       * Payment: A previously reserved deposit is returned on success.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is no longer requested.
       * 
       * Emits `JudgementUnrequested` if successful.
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Clear an account's identity info and all sub-accounts and return all deposits.
       * 
       * Payment: All reserved balances on the account are returned.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * Emits `IdentityCleared` if successful.
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove an account's identity and sub-account information and slash the deposits.
       * 
       * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
       * `Slash`. Verification request deposits are not returned; they should be cancelled
       * manually using `cancel_request`.
       * 
       * The dispatch origin for this call must match `T::ForceOrigin`.
       * 
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * 
       * Emits `IdentityKilled` if successful.
       **/
      killIdentity: AugmentedSubmittable<(target: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Provide a judgement for an account's identity.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `reg_index`.
       * 
       * - `reg_index`: the index of the registrar whose judgement is being made.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
       * - `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
       * provided.
       * 
       * Note: Judgements do not apply to a username.
       * 
       * Emits `JudgementGiven` if successful.
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: SpRuntimeAccountAccountId20 | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, SpRuntimeAccountAccountId20, PalletIdentityJudgement, H256]>;
      /**
       * Remove the sender as a sub-account.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender (*not* the original depositor).
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * super-identity.
       * 
       * NOTE: This should not normally be used, but is provided in the case that the non-
       * controller of an account is maliciously registered as a sub-account.
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a username that corresponds to an account with no identity. Exists when a user
       * gets a username but then calls `clear_identity`.
       **/
      removeDanglingUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Remove an expired username approval. The username was approved by an authority but never
       * accepted by the user and must now be beyond its expiration. The call must include the
       * full username, as in `username.suffix`.
       **/
      removeExpiredApproval: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Remove the given account from the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      removeSub: AugmentedSubmittable<(sub: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Remove `authority` from the username authorities.
       **/
      removeUsernameAuthority: AugmentedSubmittable<(authority: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Alter the associated name of the given sub-account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      renameSub: AugmentedSubmittable<(sub: SpRuntimeAccountAccountId20 | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Data]>;
      /**
       * Request a judgement from a registrar.
       * 
       * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
       * given.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is requested.
       * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
       * 
       * ```nocompile
       * Self::registrars().get(reg_index).unwrap().fee
       * ```
       * 
       * Emits `JudgementRequested` if successful.
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Change the account associated with a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `new`: the new account ID.
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, SpRuntimeAccountAccountId20]>;
      /**
       * Set the fee required for a judgement to be requested from a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fee`: the new fee.
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Set the field information for a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fields`: the fields that the registrar concerns themselves with.
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, u64]>;
      /**
       * Set an account's identity information and reserve the appropriate deposit.
       * 
       * If the account already has identity information, the deposit is taken as part payment
       * for the new deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `info`: The identity information.
       * 
       * Emits `IdentitySet` if successful.
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityLegacyIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityLegacyIdentityInfo]>;
      /**
       * Set a given username as the primary. The username should include the suffix.
       **/
      setPrimaryUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the sub-accounts of the sender.
       * 
       * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
       * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * - `subs`: The identity's (new) sub-accounts.
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[SpRuntimeAccountAccountId20, Data]>> | ([SpRuntimeAccountAccountId20 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpRuntimeAccountAccountId20, Data]>>]>;
      /**
       * Set the username for `who`. Must be called by a username authority.
       * 
       * The authority must have an `allocation`. Users can either pre-sign their usernames or
       * accept them later.
       * 
       * Usernames must:
       * - Only contain lowercase ASCII characters or digits.
       * - When combined with the suffix of the issuing authority be _less than_ the
       * `MaxUsernameLength`.
       **/
      setUsernameFor: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array, username: Bytes | string | Uint8Array, signature: Option<SpRuntimeAccountEthereumSignature> | null | Uint8Array | SpRuntimeAccountEthereumSignature | string) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Bytes, Option<SpRuntimeAccountEthereumSignature>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    issuance: {
      executeTge: AugmentedSubmittable<(tgeInfos: Vec<PalletIssuanceTgeInfo> | (PalletIssuanceTgeInfo | { who?: any; amount?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletIssuanceTgeInfo>]>;
      finalizeTge: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      initIssuanceConfig: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    maintenance: {
      switchMaintenanceModeOff: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      switchMaintenanceModeOn: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      switchUpgradabilityInMaintenanceModeOff: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      switchUpgradabilityInMaintenanceModeOn: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    metamask: {
      update: AugmentedSubmittable<(name: Option<Bytes> | null | Uint8Array | Bytes | string, version: Option<Bytes> | null | Uint8Array | Bytes | string, chainId: Option<u64> | null | Uint8Array | u64 | AnyNumber, decodeUrl: Option<Bytes> | null | Uint8Array | Bytes | string) => SubmittableExtrinsic<ApiType>, [Option<Bytes>, Option<Bytes>, Option<u64>, Option<Bytes>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiPurposeLiquidity: {
      reserveVestingLiquidityTokens: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityTokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Migrates vested liquidity tokens from Vested pallet to MPL. Information about
       * unlock schedule is preserved, so whenever one decides to move tokens back to
       * Vested pallet tokens can be unlocked.
       **/
      reserveVestingLiquidityTokensByVestingIndex: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityTokenVestingIndex: u32 | AnyNumber | Uint8Array, liquidityTokenUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, u32, Option<u128>]>;
      /**
       * Migrates vested MGX from Vested pallet to MPL. Information about unlock schedule is
       * preserved, so whenever one decides to move tokens back to Vested pallet tokens can be
       * unlocked.
       **/
      reserveVestingNativeTokensByVestingIndex: AugmentedSubmittable<(liquidityTokenVestingIndex: u32 | AnyNumber | Uint8Array, liquidityTokenUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>]>;
      unreserveAndRelockInstance: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, relockInstanceIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainStaking: {
      /**
       * Enables new staking token to be used for staking. Only tokens paired with MGX can be
       * used. Caller can pass the id of token for which MGX paired pool already exists or
       * liquidity token id itself. **Root only**
       **/
      addStakingLiquidityToken: AugmentedSubmittable<(pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken | { Paired: any } | { Liquidity: any } | string | Uint8Array, currentLiquidityTokens: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainStakingPairedOrLiquidityToken, u32]>;
      /**
       * Modifies aggregator metadata by extending or reducing list of approved candidates
       * Account may only become aggregator only if its not collator or delegator at the moment
       **/
      aggregatorUpdateMetadata: AugmentedSubmittable<(collatorCandidates: Vec<SpRuntimeAccountAccountId20> | (SpRuntimeAccountAccountId20 | string | Uint8Array)[], action: ParachainStakingMetadataUpdateAction | 'ExtendApprovedCollators' | 'RemoveApprovedCollators' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<SpRuntimeAccountAccountId20>, ParachainStakingMetadataUpdateAction]>;
      /**
       * Cancel pending request to adjust the collator candidate self bond
       **/
      cancelCandidateBondRequest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Cancel request to change an existing delegation.
       **/
      cancelDelegationRequest: AugmentedSubmittable<(candidate: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Cancel open request to leave candidates
       * - only callable by collator account
       * - result upon successful call is the candidate is active in the candidate pool
       **/
      cancelLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Cancel a pending request to exit the set of delegators. Success clears the pending exit
       * request (thereby resetting the delay upon another `leave_delegators` call).
       **/
      cancelLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * If caller is not a delegator and not a collator, then join the set of delegators
       * If caller is a delegator, then makes delegation to change their delegation state
       **/
      delegate: AugmentedSubmittable<(collator: SpRuntimeAccountAccountId20 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number, candidateDelegationCount: u32 | AnyNumber | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u128, Option<MangataTypesMultipurposeLiquidityBondKind>, u32, u32]>;
      /**
       * Execute pending request to adjust the collator candidate self bond
       **/
      executeCandidateBondRequest: AugmentedSubmittable<(candidate: SpRuntimeAccountAccountId20 | string | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * Execute pending request to change an existing delegation
       **/
      executeDelegationRequest: AugmentedSubmittable<(delegator: SpRuntimeAccountAccountId20 | string | Uint8Array, candidate: SpRuntimeAccountAccountId20 | string | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * Execute leave candidates request
       **/
      executeLeaveCandidates: AugmentedSubmittable<(candidate: SpRuntimeAccountAccountId20 | string | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Execute the right to exit the set of delegators and revoke all ongoing delegations.
       **/
      executeLeaveDelegators: AugmentedSubmittable<(delegator: SpRuntimeAccountAccountId20 | string | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Temporarily leave the set of collator candidates without unbonding
       **/
      goOffline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Rejoin the set of collator candidates if previously had called `go_offline`
       **/
      goOnline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Join the set of collator candidates
       **/
      joinCandidates: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array, liquidityToken: u32 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number, candidateCount: u32 | AnyNumber | Uint8Array, liquidityTokenCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, Option<MangataTypesMultipurposeLiquidityBondKind>, u32, u32]>;
      /**
       * This extrinsic should be used to distribute rewards for collator and assodiated
       * delegators. As round rewards are processed in random order its impossible predict
       * how many delegators (and assodiated transfer extrinsic calls) will be required so
       * worst case scenario (delegators_count = MaxCollatorCandidates) is assumed.
       * 
       * params:
       * - collator - account id
       * - limit - number of rewards periods that should be processed within extrinsic. Note
       * that limit assumes worst case scenario of (delegators_count = MaxCollatorCandidates)
       * so as a result, `limit` or more session round rewards may be distributed
       **/
      payoutCollatorRewards: AugmentedSubmittable<(collator: SpRuntimeAccountAccountId20 | string | Uint8Array, numberOfSesisons: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Option<u32>]>;
      /**
       * Payout delegator rewards only for particular round. Collators should rather use
       * [`Pallet::payout_collator_rewards`] but if collator is inresponsive one can claim
       * particular delegator rewards manually.
       **/
      payoutDelegatorReward: AugmentedSubmittable<(round: u32 | AnyNumber | Uint8Array, collator: SpRuntimeAccountAccountId20 | string | Uint8Array, delegator: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20]>;
      /**
       * Removes previously added liquidity token
       **/
      removeStakingLiquidityToken: AugmentedSubmittable<(pairedOrLiquidityToken: ParachainStakingPairedOrLiquidityToken | { Paired: any } | { Liquidity: any } | string | Uint8Array, currentLiquidityTokens: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainStakingPairedOrLiquidityToken, u32]>;
      /**
       * Request by collator candidate to decrease self bond by `less`
       **/
      scheduleCandidateBondLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Request by collator candidate to increase self bond by `more`
       **/
      scheduleCandidateBondMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [u128, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * Request bond less for delegators wrt a specific collator candidate.
       **/
      scheduleDelegatorBondLess: AugmentedSubmittable<(candidate: SpRuntimeAccountAccountId20 | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u128]>;
      /**
       * Request to bond more for delegators wrt a specific collator candidate.
       **/
      scheduleDelegatorBondMore: AugmentedSubmittable<(candidate: SpRuntimeAccountAccountId20 | string | Uint8Array, more: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityBondKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityBondKind | 'AvailableBalance' | 'ActivatedUnstakedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u128, Option<MangataTypesMultipurposeLiquidityBondKind>]>;
      /**
       * Request to leave the set of candidates. If successful, the account is immediately
       * removed from the candidate pool to prevent selection as a collator.
       **/
      scheduleLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Request to leave the set of delegators. If successful, the caller is scheduled
       * to be allowed to exit. Success forbids future delegator actions until the request is
       * invoked or cancelled.
       **/
      scheduleLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Request to revoke an existing delegation. If successful, the delegation is scheduled
       * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
       **/
      scheduleRevokeDelegation: AugmentedSubmittable<(collator: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Set the commission for all collators
       **/
      setCollatorCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Set the total number of collator candidates selected per round
       * - changes are not applied until the start of the next round
       **/
      setTotalSelected: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Assigns/replaces the candidate that given collator wants to aggregate under
       **/
      updateCandidateAggregator: AugmentedSubmittable<(maybeAggregator: Option<SpRuntimeAccountAccountId20> | null | Uint8Array | SpRuntimeAccountAccountId20 | string) => SubmittableExtrinsic<ApiType>, [Option<SpRuntimeAccountAccountId20>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proofOfStake: {
      /**
       * Increases number of tokens used for liquidity mining purposes.
       * 
       * Parameters:
       * - liquidity_token_id - id of the token
       * - amount - amount of the token
       * - use_balance_from - where from tokens should be used
       **/
      activateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityActivateKind | 'AvailableBalance' | 'StakedUnactivatedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [u32, u128, Option<MangataTypesMultipurposeLiquidityActivateKind>]>;
      /**
       * Increases number of tokens used for liquidity mining purposes.
       * 
       * Parameters:
       * - liquidity_token_id - id of the token
       * - amount - amount of the token
       * - use_balance_from - where from tokens should be used. If set to `None` then tokens will
       * be taken from available balance
       **/
      activateLiquidityFor3rdpartyRewards: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, rewardToken: u32 | AnyNumber | Uint8Array, useBalanceFrom: Option<PalletProofOfStakeThirdPartyActivationKind> | null | Uint8Array | PalletProofOfStakeThirdPartyActivationKind | { ActivateKind: any } | { ActivatedLiquidity: any } | { NativeRewardsLiquidity: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, Option<PalletProofOfStakeThirdPartyActivationKind>]>;
      /**
       * Increases number of tokens used for liquidity mining purposes.
       * 
       * Parameters:
       * - liquidity_token_id - id of the token
       * - amount - amount of the token
       * - use_balance_from - where from tokens should be used
       **/
      activateLiquidityForNativeRewards: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, useBalanceFrom: Option<MangataTypesMultipurposeLiquidityActivateKind> | null | Uint8Array | MangataTypesMultipurposeLiquidityActivateKind | 'AvailableBalance' | 'StakedUnactivatedReserves' | 'UnspentReserves' | number) => SubmittableExtrinsic<ApiType>, [u32, u128, Option<MangataTypesMultipurposeLiquidityActivateKind>]>;
      /**
       * Claims liquidity mining rewards
       * - tokens - pair of tokens
       * - amount - amount of the token
       * - reward_token - id of the token that is rewarded
       **/
      claim3rdpartyRewards: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, rewardToken: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      claimNativeRewards: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Claims liquidity mining rewards
       **/
      claimRewardsAll: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Decreases number of tokens used for liquidity mining purposes
       **/
      deactivateLiquidity: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Decreases number of tokens used for liquidity mining purposes.
       * 
       * Parameters:
       * - liquidity_token_id - id of the token
       * - amount - amount of the token
       * - use_balance_from - where from tokens should be used
       **/
      deactivateLiquidityFor3rdpartyRewards: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, rewardToken: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32]>;
      /**
       * Decreases number of tokens used for liquidity mining purposes
       **/
      deactivateLiquidityForNativeRewards: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Schedules rewards for selected liquidity token
       * - tokens - pair of tokens
       * - amount - amount of the token
       * - schedule_end - id of the last rewarded seession. Rewards will be distributedd equally between sessions in range (now ..
       * schedule_end). Distribution starts from the *next* session till `schedule_end`.
       **/
      rewardPool: AugmentedSubmittable<(pool: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], tokenId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, scheduleEnd: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, u32]>, u32, u128, u32]>;
      /**
       * Enables/disables pool for liquidity mining rewards
       **/
      updatePoolPromotion: AugmentedSubmittable<(liquidityTokenId: u32 | AnyNumber | Uint8Array, liquidityMiningIssuanceWeight: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u8]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * Register a proxy account for the sender that is able to make calls on its behalf.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to make a proxy.
       * - `proxy_type`: The permissions allowed for this proxy account.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       **/
      addProxy: AugmentedSubmittable<(delegate: SpRuntimeAccountAccountId20 | string | Uint8Array, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, u32]>;
      /**
       * Publish the hash of a proxy-call that will be made in the future.
       * 
       * This must be called some number of blocks before the corresponding `proxy` is attempted
       * if the delay associated with the proxy relationship is greater than zero.
       * 
       * No more than `MaxPending` announcements may be made at any one time.
       * 
       * This will take a deposit of `AnnouncementDepositFactor` as well as
       * `AnnouncementDepositBase` if there are no other pending announcements.
       * 
       * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      announce: AugmentedSubmittable<(real: SpRuntimeAccountAccountId20 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, H256]>;
      /**
       * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
       * initialize it with a proxy of `proxy_type` for `origin` sender.
       * 
       * Requires a `Signed` origin.
       * 
       * - `proxy_type`: The type of the proxy that the sender will be registered as over the
       * new account. This will almost always be the most permissive `ProxyType` possible to
       * allow for maximum flexibility.
       * - `index`: A disambiguation index, in case this is called multiple times in the same
       * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
       * want to use `0`.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       * 
       * Fails with `Duplicate` if this has already been called in this transaction, from the
       * same sender, with the same parameters.
       * 
       * Fails if there are insufficient funds to pay for deposit.
       **/
      createPure: AugmentedSubmittable<(proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, u32, u16]>;
      /**
       * Removes a previously spawned pure proxy.
       * 
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       * 
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `pure` with corresponding parameters.
       * 
       * - `spawner`: The account that originally called `pure` to create this account.
       * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `pure`.
       * - `height`: The height of the chain when the call to `pure` was processed.
       * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
       * 
       * Fails with `NoPermission` in case the caller is not a previously created pure
       * account whose `pure` call has corresponding parameters.
       **/
      killPure: AugmentedSubmittable<(spawner: SpRuntimeAccountAccountId20 | string | Uint8Array, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxy: AugmentedSubmittable<(real: SpRuntimeAccountAccountId20 | string | Uint8Array, forceProxyType: Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType> | null | Uint8Array | RollupRuntimeRuntimeConfigConfigPalletProxyProxyType | 'AutoCompound' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType>, Call]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorized for through
       * `add_proxy`.
       * 
       * Removes any corresponding announcement(s).
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: SpRuntimeAccountAccountId20 | string | Uint8Array, real: SpRuntimeAccountAccountId20 | string | Uint8Array, forceProxyType: Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType> | null | Uint8Array | RollupRuntimeRuntimeConfigConfigPalletProxyProxyType | 'AutoCompound' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, Option<RollupRuntimeRuntimeConfigConfigPalletProxyProxyType>, Call]>;
      /**
       * Remove the given announcement of a delegate.
       * 
       * May be called by a target (proxied) account to remove a call that one of their delegates
       * (`delegate`) has announced they want to execute. The deposit is returned.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `delegate`: The account that previously announced the call.
       * - `call_hash`: The hash of the call to be made.
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: SpRuntimeAccountAccountId20 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, H256]>;
      /**
       * Remove a given announcement.
       * 
       * May be called by a proxy account to remove a call they previously announced and return
       * the deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      removeAnnouncement: AugmentedSubmittable<(real: SpRuntimeAccountAccountId20 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, H256]>;
      /**
       * Unregister all proxy accounts for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * WARNING: This may be called on accounts created by `pure`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unregister a proxy account for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to remove as a proxy.
       * - `proxy_type`: The permissions currently enabled for the removed proxy account.
       **/
      removeProxy: AugmentedSubmittable<(delegate: SpRuntimeAccountAccountId20 | string | Uint8Array, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType | 'AutoCompound' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    rolldown: {
      cancelRequestsFromL1: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, requestsToCancel: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, u128]>;
      createBatch: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, sequencerAccount: Option<SpRuntimeAccountAccountId20> | null | Uint8Array | SpRuntimeAccountAccountId20 | string) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, Option<SpRuntimeAccountAccountId20>]>;
      ferryDeposit: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, requestId: PalletRolldownMessagesRequestId | { origin?: any; id?: any } | string | Uint8Array, depositRecipient: U8aFixed | string | Uint8Array, tokenAddress: U8aFixed | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, timestamp: u128 | AnyNumber | Uint8Array, ferryTip: u128 | AnyNumber | Uint8Array, depositHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, PalletRolldownMessagesRequestId, U8aFixed, U8aFixed, u128, u128, u128, H256]>;
      ferryDepositUnsafe: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, requestId: PalletRolldownMessagesRequestId | { origin?: any; id?: any } | string | Uint8Array, depositRecipient: U8aFixed | string | Uint8Array, tokenAddress: U8aFixed | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, timestamp: u128 | AnyNumber | Uint8Array, ferryTip: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, PalletRolldownMessagesRequestId, U8aFixed, U8aFixed, u128, u128, u128]>;
      forceCancelRequestsFromL1: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, requestsToCancel: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, u128]>;
      /**
       * Froce create batch and assigns it to provided sequencer
       * provided requests range must exists - otherwise `[Error::InvalidRange]` error will be returned
       **/
      forceCreateBatch: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, range: ITuple<[u128, u128]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], sequencerAccount: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, ITuple<[u128, u128]>, SpRuntimeAccountAccountId20]>;
      forceUpdateL2FromL1: AugmentedSubmittable<(update: PalletRolldownMessagesL1Update | { chain?: any; pendingDeposits?: any; pendingCancelResolutions?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesL1Update]>;
      /**
       * only deposit recipient can initiate refund failed deposit
       **/
      refundFailedDeposit: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, requestId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, u128]>;
      setManualBatchExtraFee: AugmentedSubmittable<(balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      updateL2FromL1: AugmentedSubmittable<(requests: PalletRolldownMessagesL1Update | { chain?: any; pendingDeposits?: any; pendingCancelResolutions?: any } | string | Uint8Array, updateHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesL1Update, H256]>;
      updateL2FromL1Unsafe: AugmentedSubmittable<(requests: PalletRolldownMessagesL1Update | { chain?: any; pendingDeposits?: any; pendingCancelResolutions?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesL1Update]>;
      withdraw: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, recipient: U8aFixed | string | Uint8Array, tokenAddress: U8aFixed | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, ferryTip: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, U8aFixed, U8aFixed, u128, Option<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sequencerStaking: {
      leaveActiveSequencers: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain]>;
      /**
       * This extrinsic should be used to distribute rewards for sequencer.
       * 
       * params:
       * - sequencer - account id
       * - number_of_sessions - number of rewards periods that should be processed within extrinsic.
       **/
      payoutSequencerRewards: AugmentedSubmittable<(sequencer: SpRuntimeAccountAccountId20 | string | Uint8Array, numberOfSessions: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Option<u32>]>;
      /**
       * provides stake for the purpose of becoming sequencers
       * 
       * - `chain` - chain for which to assign stake_amount
       * - `stake_amont` - amount of stake
       * - `alias_account` - optional parameter, alias account is eligible to create manual bataches
       * of updates in pallet-rolldown. Alias account can not be set to another
       * active sequencer or to some account that is already used as
       * alias_account for another sequencer
       * - `stake_action` - determines what are candidate expectations regarding joining active set,
       * * 'StakeOnly' - sequencer only provides stake, but does not join active set.
       * * 'StakeAndJoinActiveSet' - sequencer provides stake and joins active set. Fails if
       * candidate didnt join active set or if candidate is already in active set.
       * Candiate can also choose to call `rejoin_active_sequencers` later when there are free seats to
       * join active set
       **/
      provideSequencerStake: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, stakeAmount: u128 | AnyNumber | Uint8Array, aliasAccount: Option<SpRuntimeAccountAccountId20> | null | Uint8Array | SpRuntimeAccountAccountId20 | string, stakeAction: PalletSequencerStakingStakeAction | 'StakeOnly' | 'StakeAndJoinActiveSet' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, u128, Option<SpRuntimeAccountAccountId20>, PalletSequencerStakingStakeAction]>;
      rejoinActiveSequencers: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain]>;
      setSequencerConfiguration: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, minimalStakeAmount: u128 | AnyNumber | Uint8Array, slashFineAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, u128, u128]>;
      /**
       * Allows to configure alias_account for active sequencer. This extrinisic can only be called
       * by active sequencer
       * - `chain` -
       * - `alias_account` - optional parameter, alias account is eligible to create manual bataches
       * of updates in pallet-rolldown. Alias account can not be set to another
       * active sequencer or to some account that is already used as
       * alias_account for another sequencer
       **/
      setUpdaterAccountForSequencer: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array, aliasAccount: Option<SpRuntimeAccountAccountId20> | null | Uint8Array | SpRuntimeAccountAccountId20 | string) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain, Option<SpRuntimeAccountAccountId20>]>;
      unstake: AugmentedSubmittable<(chain: PalletRolldownMessagesChain | 'Ethereum' | 'Arbitrum' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRolldownMessagesChain]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * 
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be Signed and the account must be either be
       * convertible to a validator ID using the chain's typical addressing system (this usually
       * means being a controller account) or directly convertible into a validator ID (which
       * usually means being a stash account).
       * 
       * ## Complexity
       * - `O(1)` in number of key types. Actual cost depends on the number of length of
       * `T::Keys::key_ids()` which is fixed.
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * ## Complexity
       * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
       * fixed.
       **/
      setKeys: AugmentedSubmittable<(keys: RollupRuntimeSessionKeys | { aura?: any; grandpa?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [RollupRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * Permanently removes the sudo key.
       * 
       * **This cannot be un-done.**
       **/
      removeKey: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
       * key.
       **/
      setKey: AugmentedSubmittable<(updated: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      sudoAs: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudoOrigin: {
      /**
       * Authenticates the SudoOrigin and dispatches a function call with `Root` origin.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the SudoOrigin and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Call]>;
      /**
       * Authenticates the SudoOrigin and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * SudoOrigin to specify the weight of the call.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
       * 
       * If the authorization required a version check, this call will ensure the spec name
       * remains unchanged and that the spec version has increased.
       * 
       * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
       * the new `code` in the same block or attempt to schedule the upgrade.
       * 
       * All origins are allowed.
       **/
      applyAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * WARNING: This authorizes an upgrade that will take place without any safety checks, for
       * example that the spec name remains the same and that the version number increases. Not
       * recommended for normal use. Use `authorize_upgrade` instead.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgradeWithoutChecks: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Persists list of encoded txs into the storage queue. There is an dedicated
       * check in [Executive](https://storage.googleapis.com/mangata-docs-node/frame_executive/struct.Executive.html) that verifies that passed binary data can be
       * decoded into extrinsics.
       **/
      enqueueTxs: AugmentedSubmittable<(txs: Vec<ITuple<[Option<SpRuntimeAccountAccountId20>, Bytes]>> | ([Option<SpRuntimeAccountAccountId20> | null | Uint8Array | SpRuntimeAccountAccountId20 | string, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Option<SpRuntimeAccountAccountId20>, Bytes]>>]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * Make some on-chain remark.
       * 
       * Can be executed by every `origin`.
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * Note that runtime upgrades will not run if this is called with a not-increasing spec
       * version!
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * [`Config::MinimumPeriod`].
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
       * that changing the complexity of this call could result exhausting the resources in a
       * block to execute any other calls.
       * 
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      create: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, Compact<u128>]>;
      /**
       * Exactly as `transfer`, except the origin must be root and the source
       * account may be specified.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The sender of the transfer.
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      forceTransfer: AugmentedSubmittable<(source: SpRuntimeAccountAccountId20 | string | Uint8Array, dest: SpRuntimeAccountAccountId20 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u32, Compact<u128>]>;
      mint: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, who: SpRuntimeAccountAccountId20 | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, SpRuntimeAccountAccountId20, Compact<u128>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it
       * will also decrease the total issuance of the system
       * (`TotalIssuance`). If the new free or reserved balance is below the
       * existential deposit, it will reap the `AccountInfo`.
       * 
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<(who: SpRuntimeAccountAccountId20 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u32, Compact<u128>, Compact<u128>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the
       * `TransferFee`. If the sender's account is below the existential
       * deposit as a result of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transfer: AugmentedSubmittable<(dest: SpRuntimeAccountAccountId20 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u32, Compact<u128>]>;
      /**
       * Transfer all remaining balance to the given account.
       * 
       * NOTE: This function only attempts to transfer _transferable_
       * balances. This means that any locked, reserved, or existential
       * deposits (when `keep_alive` is `true`), will not be transferred by
       * this function. To ensure that this function results in a killed
       * account, you might need to prepare the account by removing any
       * reference counters, storage deposits, etc...
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `keep_alive`: A boolean to determine if the `transfer_all`
       * operation should send all of the funds the account has, causing
       * the sender account to be killed (false), or transfer everything
       * except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: SpRuntimeAccountAccountId20 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u32, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer
       * will not kill the origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: SpRuntimeAccountAccountId20 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u32, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * Approve a proposal.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::ApproveOrigin`].
       * 
       * ## Details
       * 
       * At a later time, the proposal will be allocated to the beneficiary and the original
       * deposit will be returned.
       * 
       * ### Complexity
       * - O(1).
       * 
       * ## Events
       * 
       * No events are emitted from this dispatch.
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Check the status of the spend and remove it from the storage if processed.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed.
       * 
       * ## Details
       * 
       * The status check is a prerequisite for retrying a failed payout.
       * If a spend has either succeeded or expired, it is removed from the storage by this
       * function. In such instances, transaction fees are refunded.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::PaymentFailed`] if the spend payout has failed.
       * Emits [`Event::SpendProcessed`] if the spend payout has succeed.
       **/
      checkStatus: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Claim a spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed.
       * 
       * ## Details
       * 
       * Spends must be claimed within some temporal bounds. A spend may be claimed within one
       * [`Config::PayoutPeriod`] from the `valid_from` block.
       * In case of a payout failure, the spend status must be updated with the `check_status`
       * dispatchable before retrying with the current function.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::Paid`] if successful.
       **/
      payout: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Put forward a suggestion for spending.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed.
       * 
       * ## Details
       * A deposit proportional to the value is reserved and slashed if the proposal is rejected.
       * It is returned once the proposal is awarded.
       * 
       * ### Complexity
       * - O(1)
       * 
       * ## Events
       * 
       * Emits [`Event::Proposed`] if successful.
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpRuntimeAccountAccountId20]>;
      /**
       * Reject a proposed spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * The original deposit will be slashed.
       * 
       * ### Complexity
       * - O(1)
       * 
       * ## Events
       * 
       * Emits [`Event::Rejected`] if successful.
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Force a previously approved proposal to be removed from the approval queue.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * 
       * The original deposit will no longer be returned.
       * 
       * ### Parameters
       * - `proposal_id`: The index of a proposal
       * 
       * ### Complexity
       * - O(A) where `A` is the number of approvals
       * 
       * ### Errors
       * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
       * approval queue, i.e., the proposal has not been approved. This could also mean the
       * proposal does not exist altogether, thus there is no way it would have been approved
       * in the first place.
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::SpendOrigin`] with the `Success` value being at least
       * `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
       * for assertion using the [`Config::BalanceConverter`].
       * 
       * ## Details
       * 
       * Create an approved spend for transferring a specific `amount` of `asset_kind` to a
       * designated beneficiary. The spend must be claimed using the `payout` dispatchable within
       * the [`Config::PayoutPeriod`].
       * 
       * ### Parameters
       * - `asset_kind`: An indicator of the specific asset class to be spent.
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The beneficiary of the spend.
       * - `valid_from`: The block number from which the spend can be claimed. It can refer to
       * the past if the resulting spend has not yet expired according to the
       * [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
       * approval.
       * 
       * ## Events
       * 
       * Emits [`Event::AssetSpendApproved`] if successful.
       **/
      spend: AugmentedSubmittable<(assetKind: Null | null, amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: SpRuntimeAccountAccountId20 | string | Uint8Array, validFrom: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Null, Compact<u128>, SpRuntimeAccountAccountId20, Option<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
       * 
       * ### Details
       * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
       * beneficiary.
       * 
       * ### Parameters
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The destination account for the transfer.
       * 
       * ## Events
       * 
       * Emits [`Event::SpendApproved`] if successful.
       **/
      spendLocal: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpRuntimeAccountAccountId20]>;
      /**
       * Void previously approved spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * 
       * A spend void is only possible if the payout has not been attempted yet.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::AssetSpendVoided`] if successful.
       **/
      voidSpend: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatches a function call with a provided origin.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * ## Complexity
       * - O(1).
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: RollupRuntimeOriginCaller | { system: any } | { Void: any } | { Council: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [RollupRuntimeOriginCaller, Call]>;
      /**
       * Send a batch of dispatch calls.
       * Unlike `batch`, it allows errors and won't interrupt.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatch without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatch a function call with a specified weight.
       * 
       * This function does not check the weight of the call, and instead allows the
       * Root origin to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Root_.
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * Force remove a vesting schedule
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `target`: An account that has a vesting schedule
       * - `schedule_index`: The vesting schedule index that should be removed
       **/
      forceRemoveVestingSchedule: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, target: SpRuntimeAccountAccountId20 | string | Uint8Array, scheduleIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, SpRuntimeAccountAccountId20, u32]>;
      /**
       * Force a vested transfer.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The account whose funds should be transferred.
       * - `target`: The account that should be transferred the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       * 
       * Emits `VestingCreated`.
       * 
       * NOTE: This will unlock all schedules through the current block.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      forceVestedTransfer: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, source: SpRuntimeAccountAccountId20 | string | Uint8Array, target: SpRuntimeAccountAccountId20 | string | Uint8Array, schedule: PalletVestingMangataVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, PalletVestingMangataVestingInfo]>;
      /**
       * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
       * the highest possible start and end blocks. If both schedules have already started the
       * current block will be used as the schedule start; with the caveat that if one schedule
       * is finished by the current block, the other will be treated as the new merged schedule,
       * unmodified.
       * 
       * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
       * NOTE: This will unlock all schedules through the current block prior to merging.
       * NOTE: If both schedules have ended by the current block, no new schedule will be created
       * and both will be removed.
       * 
       * Merged schedule attributes:
       * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
       * current_block)`.
       * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
       * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `schedule1_index`: index of the first schedule to merge.
       * - `schedule2_index`: index of the second schedule to merge.
       **/
      mergeSchedules: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      sudoUnlockAllVestingTokens: AugmentedSubmittable<(target: SpRuntimeAccountAccountId20 | string | Uint8Array, tokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeAccountAccountId20, u32]>;
      /**
       * Unlock any vested funds of the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vest: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Unlock any vested funds of a `target` account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account whose vested funds should be unlocked. Must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vestOther: AugmentedSubmittable<(tokenId: u32 | AnyNumber | Uint8Array, target: SpRuntimeAccountAccountId20 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, SpRuntimeAccountAccountId20]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xyk: {
      burnLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, liquidityAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * Executes buy_asset swap.
       * First the swap is prevalidated, if it is successful then the extrinsic is accepted. Beyond this point the exchange commission will be charged.
       * The bought of the bought asset is used to determine the sold asset amount.
       * If the sold asset amount is higher than the max_amount_in then it will fail on slippage.
       * The percentage exchange commission is still charged even if the swap fails on slippage. Though the swap itself will be a no-op.
       * The slippage is calculated based upon the sold asset amount.
       * Upon slippage failure, the extrinsic is marked "successful", but an event for the failure is emitted
       * 
       * 
       * # Args:
       * - `sold_asset_id` - The token being sold
       * - `bought_asset_id` - The token being bought
       * - `bought_asset_amount`: The amount of the bought token being bought
       * - `max_amount_in` - The maximum amount of sold asset that must be sold in order to not fail on slippage. Slippage failures still charge exchange commission.
       **/
      buyAsset: AugmentedSubmittable<(soldAssetId: u32 | AnyNumber | Uint8Array, boughtAssetId: u32 | AnyNumber | Uint8Array, boughtAssetAmount: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      compoundRewards: AugmentedSubmittable<(liquidityAssetId: u32 | AnyNumber | Uint8Array, amountPermille: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Permill]>;
      createPool: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, secondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
      mintLiquidity: AugmentedSubmittable<(firstAssetId: u32 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, firstAssetAmount: u128 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      mintLiquidityUsingVestingNativeTokens: AugmentedSubmittable<(vestingNativeAssetAmount: u128 | AnyNumber | Uint8Array, secondAssetId: u32 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u128]>;
      mintLiquidityUsingVestingNativeTokensByVestingIndex: AugmentedSubmittable<(nativeAssetVestingIndex: u32 | AnyNumber | Uint8Array, vestingNativeAssetUnlockSomeAmountOrAll: Option<u128> | null | Uint8Array | u128 | AnyNumber, secondAssetId: u32 | AnyNumber | Uint8Array, expectedSecondAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>, u32, u128]>;
      /**
       * Executes a multiswap buy asset in a series of buy asset atomic swaps.
       * 
       * Multiswaps must fee lock instead of paying transaction fees.
       * 
       * First the multiswap is prevalidated, if it is successful then the extrinsic is accepted
       * and the exchange commission will be charged upon execution on the *first* swap using *max_amount_in*.
       * multiswap_buy_asset cannot have two (or more) atomic swaps on the same pool.
       * multiswap_buy_asset prevaildation only checks for whether there are enough funds to pay for the exchange commission.
       * Failure to have the required amount of first asset funds will result in failure (and charging of the exchange commission).
       * 
       * Upon failure of an atomic swap or bad slippage, all the atomic swaps are reverted and the exchange commission is charged.
       * Upon such a failure, the extrinsic is marked "successful", but an event for the failure is emitted
       * 
       * # Args:
       * - `swap_token_list` - This list of tokens is the route of the atomic swaps, starting with the asset sold and ends with the asset finally bought
       * - `bought_asset_amount`: The amount of the last asset bought
       * - `max_amount_in` - The maximum amount of first asset that can be sold in order to not fail on slippage. Slippage failures still charge exchange commission.
       **/
      multiswapBuyAsset: AugmentedSubmittable<(swapTokenList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], boughtAssetAmount: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<u32>, u128, u128]>;
      /**
       * Executes a multiswap sell asset in a series of sell asset atomic swaps.
       * 
       * Multiswaps must fee lock instead of paying transaction fees.
       * 
       * First the multiswap is prevalidated, if it is successful then the extrinsic is accepted
       * and the exchange commission will be charged upon execution on the **first** swap using **sold_asset_amount**.
       * 
       * Upon failure of an atomic swap or bad slippage, all the atomic swaps are reverted and the exchange commission is charged.
       * Upon such a failure, the extrinsic is marked "successful", but an event for the failure is emitted
       * 
       * # Args:
       * - `swap_token_list` - This list of tokens is the route of the atomic swaps, starting with the asset sold and ends with the asset finally bought
       * - `sold_asset_amount`: The amount of the first asset sold
       * - `min_amount_out` - The minimum amount of last asset that must be bought in order to not fail on slippage. Slippage failures still charge exchange commission.
       **/
      multiswapSellAsset: AugmentedSubmittable<(swapTokenList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], soldAssetAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<u32>, u128, u128]>;
      provideLiquidityWithConversion: AugmentedSubmittable<(liquidityAssetId: u32 | AnyNumber | Uint8Array, providedAssetId: u32 | AnyNumber | Uint8Array, providedAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * Executes sell_asset swap.
       * First the swap is prevalidated, if it is successful then the extrinsic is accepted. Beyond this point the exchange commission will be charged.
       * The sold amount of the sold asset is used to determine the bought asset amount.
       * If the bought asset amount is lower than the min_amount_out then it will fail on slippage.
       * The percentage exchange commission is still charged even if the swap fails on slippage. Though the swap itself will be a no-op.
       * The slippage is calculated based upon the sold_asset_amount.
       * Upon slippage failure, the extrinsic is marked "successful", but an event for the failure is emitted
       * 
       * 
       * # Args:
       * - `sold_asset_id` - The token being sold
       * - `bought_asset_id` - The token being bought
       * - `sold_asset_amount`: The amount of the sold token being sold
       * - `min_amount_out` - The minimum amount of bought asset that must be bought in order to not fail on slippage. Slippage failures still charge exchange commission.
       **/
      sellAsset: AugmentedSubmittable<(soldAssetId: u32 | AnyNumber | Uint8Array, boughtAssetId: u32 | AnyNumber | Uint8Array, soldAssetAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
