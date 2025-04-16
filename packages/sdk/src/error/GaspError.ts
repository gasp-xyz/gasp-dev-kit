import { Logger } from '../modules/core/Logger';

export enum GaspErrorType {
  API_RESPONSE_ERROR = 'API_RESPONSE_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  TRANSACTION_ERROR = 'TRANSACTION_ERROR',
  ALREADY_EXISTS = 'ALREADY_EXISTS',
  PARSING_ERROR = 'PARSING_ERROR',
  ARGS_ERROR = 'ARGS_ERROR',
  INIT_ERROR = 'INIT_ERROR',
}

export class GaspError extends Error {
  public code: GaspErrorType;
  public context?: any;

  constructor(
    message: string,
    code: GaspErrorType,
    context?: any,
    logger?: Logger
  ) {
    super(message);
    this.code = code;
    this.context = context;

    logger?.error(`[${this.code}] ${message}`, context);

    Object.setPrototypeOf(this, new.target.prototype);
  }

  public static error = GaspErrorType;
}
