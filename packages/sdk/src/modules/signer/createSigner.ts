import { ApiPromise } from '@polkadot/api';
import { Signer } from '../../types/common';
import { Logger } from '../core/Logger';

type SignerConstructor<A extends any[], T extends Signer> = new (
  api: ApiPromise,
  logger: Logger,
  ...args: A
) => T;

export function createSigner<A extends any[], T extends Signer>(
  SignerClass: SignerConstructor<A, T>,
  api: ApiPromise,
  logger: Logger
): { create: (...params: A) => T } {
  return {
    create: (...params: A): T => new SignerClass(api, logger, ...params),
  };
}
