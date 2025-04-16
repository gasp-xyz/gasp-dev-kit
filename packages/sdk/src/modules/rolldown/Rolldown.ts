import { Signer } from '../../types/common';
import { BaseModule } from '../core/BaseModule';
import { WithdrawParams, withdraw } from './withdraw';

export class RolldownModule extends BaseModule {
  /**
   * Withdraws an asset from GASP.
   *
   * @param params - Configuration object containing withdrawal details.
   * @param params.asset - The asset to withdraw.
   * @param params.account - The account address that will be credited for the withdrawal.
   * @param params.recipient - The recipient address for the withdrawal.
   * @param params.chain - The chain to withdraw from.
   * @param params.amount - The amount to withdraw.
   * @param params.ferryTip - The ferry tip for the withdrawal.
   *
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the withdrawal result.
   *
   * @example
   *  ```typescript
   *  const result = await withdraw({
   *  asset: '0x123',
   *  account: '0x456',
   *  recipient: '0x789',
   *  chain: 'Ethereum',
   *  amount: '1000',
   *  ferryTip: '10',
   *  });
   *  ```
   */
  withdraw(params: WithdrawParams, signer?: Signer) {
    return withdraw(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }
}
