import { Signer } from '../../types/common';
import { BaseModule } from '../core/BaseModule';
import { GetAssetParams, getAsset } from './getAsset';
import { getAssets } from './getAssets';
import { GetIssuanceParams, getIssuance } from './getIssuance';
import { TransferParams, transfer } from './transfer';

export class AssetModule extends BaseModule {
  /**
   * Retrieves the asset metadata for a specific asset.
   *
   * @param params - Configuration object containing the asset details.
   * @param params.asset - The asset id to query.
   *
   * @returns A promise that resolves with the asset metadata information.
   *
   * @example
   * ```typescript
   * const asset = '0';
   *
   * const result = await getAsset({ asset });
   * console.log(result);
   * ```
   */
  async getAsset(params: GetAssetParams) {
    return getAsset(this.context, params);
  }

  /**
   * Retrieves the metadata for all assets.
   *
   * @returns A promise that resolves with an array of asset metadata information.
   *
   * @example
   * ```typescript
   * const result = await getAssets();
   * console.log(result);
   * ```
   */
  async getAssets() {
    return getAssets(this.context);
  }

  /**
   * Retrieves the issuance information for a specific asset.
   *
   * @param params - Configuration object containing the asset details.
   * @param params.asset - The asset id to query.
   *
   * @returns A promise that resolves with the asset issuance information.
   *
   * @example
   * ```typescript
   * const asset = '0';
   *
   * const result = await getIssuance({ asset });
   * console.log(result);
   * ```
   */
  async getIssuance(params: GetIssuanceParams) {
    return getIssuance(this.context, params);
  }

  /**
   * Transfers an asset from one account to another on GASP network.
   *
   * @param params - Configuration object containing transfer details.
   * @param params.sender - The sender's account address.
   * @param params.recipient - The recipient's account address.
   * @param params.asset - The asset id to transfer.
   * @param params.amount - The amount of the asset to transfer.
   *
   * @param signer - Optional. The signer instance used to authorize the transaction.
   *                  Defaults to the signer used when initializing the SDK
   *
   * @returns A promise that resolves with the result of the signed transaction submission.
   *
   * @example
   * ```typescript
   * const result = await transfer({
   *  sender: '0x123',
   *  recipient: '0x456',
   *  asset: '0',
   *  amount: '100',
   *  }, signer);
   * console.log(result);
   *  ```
   */
  transfer(params: TransferParams, signer?: Signer) {
    return transfer(
      this.context,
      params,
      this.getSigner(signer),
      this.submitTx
    );
  }
}
