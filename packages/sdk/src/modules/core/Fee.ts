import { FrameSystemEventRecord } from '@polkadot/types/lookup';

export interface FeeInfo {
  asset: string;
  amount: string;
}

export interface FeeMetadata {
  fee: FeeInfo;
}

export class Fee {
  static parseFromEvent(event: FrameSystemEventRecord | null): FeeInfo | null {
    if (!event) {
      return null;
    }

    if (event.event.method !== 'TransactionFeePaid') {
      return null;
    }

    const [, asset, amount] = event.event.data;

    return {
      asset: asset.toString(),
      amount: amount.toString(),
    };
  }
}
