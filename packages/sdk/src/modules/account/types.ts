import BN from 'bn.js';

export interface Balance {
  asset: string;
  balance: {
    free: BN;
    reserved: BN;
    frozen: BN;
  };
}
