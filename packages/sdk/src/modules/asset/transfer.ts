import { Signer } from '../../types/common';
import { FeeMetadata } from '../core/Fee';
import {
  ModuleContext,
  SubmitHandler,
  SubmittableTx,
} from '../core/BaseModule';
import BN from 'bn.js';

export interface TransferParams {
  sender: string;
  recipient: string;
  asset: string;
  amount: BN | string;
}

export interface TransferResult extends FeeMetadata {
  asset: string;
  from: string;
  to: string;
  amount: BN;
}

export const transfer = (
  { api }: ModuleContext,
  { asset, sender, recipient, amount }: TransferParams,
  signer: Signer,
  submitHandler: SubmitHandler
): SubmittableTx<TransferResult> => {
  const extrinsic = api.tx.tokens.transfer(recipient, asset, amount);

  return submitHandler<TransferResult, typeof api.events.tokens.Transfer>({
    extrinsic,
    signer,
    account: sender,
    parseResponse: (data) => ({
      asset: data.currencyId.toString(),
      from: data.from.toString(),
      to: data.to.toString(),
      amount: new BN(data.amount),
    }),
    eventType: api.events.tokens.Transfer,
  });
};
