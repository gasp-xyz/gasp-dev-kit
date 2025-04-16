export enum ReserveSource {
  ActivateKind = 'ActivateKind',
  ActivatedLiquidity = 'ActivatedLiquidity',
  NativeRewardsLiquidity = 'NativeRewardsLiquidity',
  AvailableBalance = 'AvailableBalance',
  UnspentReserves = 'UnspentReserves',
  ActivatedUnstakedReserves = 'ActivatedUnstakedReserves',
  StakedUnactivatedReserves = 'StakedUnactivatedReserves',
}

export type ActivateLiquidityFor3rdPartyRewardsReserveSource =
  | ReserveSource.AvailableBalance
  | ReserveSource.UnspentReserves
  | ReserveSource.StakedUnactivatedReserves
  | ReserveSource.NativeRewardsLiquidity
  | ReserveSource.ActivatedLiquidity;

export type ActivateLiquidityReserveSource =
  | ReserveSource.AvailableBalance
  | ReserveSource.UnspentReserves
  | ReserveSource.StakedUnactivatedReserves;

export type StakeReserveSource =
  | ReserveSource.AvailableBalance
  | ReserveSource.UnspentReserves
  | ReserveSource.ActivatedUnstakedReserves;

export type AvailableBalanceReserveSource = ReserveSource.AvailableBalance;

export enum TxType {
  Swap = 'swap',
  AddLiquidity = 'addLiquidity',
  RemoveLiquidity = 'removeLiquidity',
  CreatePool = 'createPool',
  Claim = 'claim',
  ClaimAll = 'claimAll',
  ClaimPoolRewards = 'claimAllPoolRewards',
  Claim3rdParty = 'claim3rdParty',
  ActivateLP = 'activateLP',
  ActivateLPFor3rdPartyRewards = 'activateLPFor3rdPartyRewards',
  DeactivateLPFor3rdPartyRewards = 'deactivateLPFor3rdPartyRewards',
  DeactivateLP = 'deactivateLP',
  Deposit = 'deposit',
  Withdraw = 'withdraw',
  Stake = 'stake',
  StakeChangeLP = 'stakeChangeLP',
  ConfirmStakeIncreaseLP = 'confirmStakeIncreaseLP',
  ConfirmStakeDecreaseLP = 'confirmStakeDecreaseLP',
  StakeChange = 'stakeChange',
  ConfirmStakeIncrease = 'confirmStakeIncrease',
  ConfirmStakeDecrease = 'confirmStakeDecrease',
  ApproveContract = 'approveContract',
  RollupDeposit = 'rollupDeposit',
  RollupWithdrawal = 'rollupWithdrawal',
}
