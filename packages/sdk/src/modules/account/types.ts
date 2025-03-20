export interface Balance {
  asset: string;
  balance: {
    free: string;
    reserved: string;
    frozen: string;
  };
}
