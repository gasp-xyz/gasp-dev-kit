import { Signer } from '../../types/common';
import { BaseModule } from '../core/BaseModule';
import { Tx, TxOptions } from './Tx';

interface CreateTxModuleParams {
  account: string;
  signer: Signer;
  options?: TxOptions;
}

export class TxModule extends BaseModule {
  async create({ account, signer, options }: CreateTxModuleParams) {
    return new Tx(
      this.context.api,
      this.context.logger,
      this.getSigner(signer),
      account,
      options
    );
  }
}
