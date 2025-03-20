import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';

export type Chain = 'Arbitrum' | 'Ethereum' | 'Base' | 'Sonic';

export interface WithdrawParams {
  asset: string;
  account: string;
  recipient?: string;
  // TODO
  chain: Chain;
  amount: string;
  ferryTip?: string;
}

export interface WithdrawResult extends FeeMetadata {
  chain: string;
  requestId: string;
  recipient: string;
  tokenAddress: string;
  amount: string;
  hash: string;
  ferryTip: string;
}

export const withdraw = (
  { api }: ModuleContext,
  {
    asset,
    account,
    chain,
    recipient = account,
    amount,
    ferryTip = '0',
  }: WithdrawParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<WithdrawResult> => {
  const extrinsic = api.tx.rolldown.withdraw(
    chain,
    recipient,
    asset,
    amount,
    ferryTip
  );

  return submitHandler<
    WithdrawResult,
    typeof api.events.rolldown.WithdrawalRequestCreated
  >({
    extrinsic,
    signer,
    account,
    parseResponse: (data) => ({
      chain: data.chain.toString(),
      requestId: data.requestId.toString(),
      recipient: data.recipient.toString(),
      tokenAddress: data.tokenAddress.toString(),
      amount: data.amount.toString(),
      hash: data.hash_.toString(),
      ferryTip: data.ferryTip.toString(),
    }),
    eventType: api.events.rolldown.WithdrawalRequestCreated,
  });
};
