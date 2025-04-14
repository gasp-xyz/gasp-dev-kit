import { AccountModule } from './modules/account';
import { getOrCreateInstance } from './utils/getOrCreateInstance';
import { PoolModule } from './modules/pool';
import { ApiPromise } from '@polkadot/api';
import { AssetModule } from './modules/asset/Asset';
import { MarketModule } from './modules/market';
import { RewardsModule } from './modules/rewards/Rewards';
import { RolldownModule } from './modules/rolldown/Rolldown';
import { Signer } from './types/common';
import { GaspLogger, Logger, emptyLogger } from './modules/core/Logger';
import { TxModule } from './modules/tx/TxModule';
import { GaspError } from './error/GaspError';
import { SignerModule } from './modules/signer/Signer';

interface SDKConfig {
  debug?: boolean;
  logger?: Logger;
}

export class Gasp {
  public readonly pool: PoolModule;
  public readonly account: AccountModule;
  public readonly asset: AssetModule;
  public readonly market: MarketModule;
  public readonly rewards: RewardsModule;
  public readonly rolldown: RolldownModule;

  public readonly tx: TxModule;
  public readonly signers: SignerModule;

  public readonly api: ApiPromise;

  public signer?: Signer;

  private constructor(api: ApiPromise, logger: Logger) {
    this.pool = new PoolModule(this, api, logger);
    this.account = new AccountModule(this, api, logger);
    this.asset = new AssetModule(this, api, logger);
    this.market = new MarketModule(this, api, logger);
    this.rewards = new RewardsModule(this, api, logger);
    this.rolldown = new RolldownModule(this, api, logger);

    this.tx = new TxModule(this, api, logger);
    this.signers = new SignerModule(this, api, logger);

    this.api = api;
  }

  setSigner(signer: Signer) {
    this.signer = signer;
  }

  static async create(_urls: string[] | string, config?: SDKConfig) {
    const urls = Array.isArray(_urls) ? _urls : [_urls];

    const api = await getOrCreateInstance(urls).catch((e) => {
      throw new GaspError(
        'Unable to initialize API',
        GaspError.error.INIT_ERROR,
        e
      );
    });

    const logger = config?.debug
      ? config?.logger ?? new GaspLogger()
      : emptyLogger;

    return new Gasp(api, logger);
  }
}
