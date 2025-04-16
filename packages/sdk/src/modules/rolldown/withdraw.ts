import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';
import BN from 'bn.js';

export type Chain = 'Arbitrum' | 'Ethereum' | 'Base' | 'Sonic';

export interface WithdrawParams {
  asset: string;
  account: string;
  recipient?: string;
  // TODO
  chain: Chain;
  amount: BN | string;
  ferryTip?: BN | string;
}

export interface WithdrawResult extends FeeMetadata {
  chain: string;
  requestId: string;
  recipient: string;
  tokenAddress: string;
  amount: BN;
  hash: string;
  ferryTip: BN;
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
      amount: new BN(data.amount),
      hash: data.hash_.toString(),
      ferryTip: new BN(data.ferryTip),
    }),
    eventType: api.events.rolldown.WithdrawalRequestCreated,
  });
};
