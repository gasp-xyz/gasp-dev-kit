import { ApiPromise } from '@polkadot/api';
import { TxOptions } from './Tx';
import { GaspError } from '../../error/GaspError';
import { ExtrinsicStatus, BlockHash } from '@polkadot/types/interfaces';
import { FrameSystemEventRecord } from '@polkadot/types/lookup';
import { GenericExtrinsic } from '@polkadot/types';
import { Logger } from './Logger';

export class ExtrinsicTracker {
  private static DEFAULT_TRACKING_TIMEOUT_MS = 60_000;
  private isSubscribed = false;

  constructor(
    private api: ApiPromise,
    private logger: Logger,
    private tx: GenericExtrinsic,
    private status: ExtrinsicStatus,
    private options?: TxOptions
  ) {}

  async track(): Promise<FrameSystemEventRecord[] | null> {
    try {
      this.options?.statusCallback?.({ status: this.status });

      if (
        (this.status.isInBlock || this.status.isFinalized) &&
        !this.isSubscribed
      ) {
        this.isSubscribed = true;
        const events = await this.waitForEvents(this.status);
        this.options?.extrinsicStatus?.(events);
        return events;
      }
      return null;
    } catch (e) {
      throw ExtrinsicTracker.trackingError(e);
    }
  }

  private async waitForEvents(
    status: ExtrinsicStatus
  ): Promise<FrameSystemEventRecord[]> {
    const inclusionBlockHash = status.isInBlock
      ? status.asInBlock.toString()
      : status.asFinalized.toString();

    const inclusionHeader = await this.api.rpc.chain
      .getHeader(inclusionBlockHash)
      .catch((e) => {
        throw new GaspError(
          'Failed to get header',
          GaspError.error.TRANSACTION_ERROR,
          e
        );
      });
    const inclusionBlockNumber = inclusionHeader.number.toBn();

    const stopAt = inclusionBlockNumber.addn(10);
    const currentBlockNr = inclusionBlockNumber.clone();

    const eventsPromise = new Promise<FrameSystemEventRecord[]>(
      // eslint-disable-next-line no-async-promise-executor
      async (resolve, reject) => {
        const unsub = await this.api.rpc.chain.subscribeNewHeads(
          async (header) => {
            try {
              const blockFromSub = header.number.toBn();

              if (currentBlockNr.gt(stopAt)) {
                this.logger.error(
                  `Tx not executed in blocks ${inclusionBlockNumber.toString()}...${stopAt}`
                );

                unsub();
                reject(
                  new GaspError(
                    `Tx not executed in blocks ${inclusionBlockNumber.toString()}...${stopAt}`,
                    GaspError.error.TRANSACTION_ERROR
                  )
                );
                return;
              }

              if (blockFromSub.gte(currentBlockNr)) {
                const blockHash = await this.api.rpc.chain
                  .getBlockHash(currentBlockNr)
                  .catch((e) => {
                    this.logger.error('Failed to get block hash', e);
                    throw new GaspError(
                      'Failed to get block hash',
                      GaspError.error.TRANSACTION_ERROR,
                      e
                    );
                  });

                const block = await this.api.rpc.chain
                  .getBlock(blockHash)
                  .catch((e) => {
                    this.logger.error('Failed to get block', e);
                    throw new GaspError(
                      'Failed to get block',
                      GaspError.error.TRANSACTION_ERROR,
                      [blockHash.toString(), e]
                    );
                  });

                const extrinsics = block.block.extrinsics;

                const index = extrinsics.findIndex(
                  (extrinsic) =>
                    extrinsic.hash.toString() === this.tx.hash.toString()
                );

                if (index < 0) {
                  return;
                }

                const events = this.findEventsAtBlock(blockHash, index);

                resolve(events);
              }
              currentBlockNr.iaddn(1);
            } catch (e) {
              unsub();
              reject(e);
            }
          }
        );
      }
    );

    return Promise.race([this.timeoutPromise, eventsPromise]);
  }

  private async findEventsAtBlock(hash: BlockHash, extrinsicIndex: number) {
    const api = await this.api.at(hash);

    const _events = await api.query.system.events().catch((e) => {
      this.logger.error(`Failed to fetch events at block hash ${hash}`, e);
      throw new GaspError(
        'Failed to fetch events at block hash',
        GaspError.error.TRANSACTION_ERROR,
        [hash.toString(), e]
      );
    });

    const events = _events.filter(
      (e) =>
        e.phase.isApplyExtrinsic &&
        e.phase.asApplyExtrinsic.toNumber() === extrinsicIndex
    );

    return events;
  }

  private get timeoutPromise() {
    return new Promise<FrameSystemEventRecord[]>((_, reject) =>
      setTimeout(() => {
        reject(
          new GaspError(
            `Tx tracking timed out after ${this.options?.timeoutMs}ms`,
            GaspError.error.TRANSACTION_ERROR
          )
        );
      }, this.options?.timeoutMs || ExtrinsicTracker.DEFAULT_TRACKING_TIMEOUT_MS)
    );
  }

  private static trackingError(e: unknown) {
    throw new GaspError(
      'Tx tracking error',
      GaspError.error.TRANSACTION_ERROR,
      e
    );
  }
}
