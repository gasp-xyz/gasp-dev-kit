import { ILogObj, Logger as _Logger } from 'tslog';

export interface Logger {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

export class GaspLogger implements Logger {
  private logger = new _Logger<ILogObj>({
    name: 'GaspSDK',
    type: 'hidden',
    prettyLogTimeZone: 'UTC',
    hideLogPositionForProduction: true,
    stylePrettyLogs: true,
    prettyLogStyles: {
      dateIsoStr: 'blue',
      filePathWithLine: 'yellow',
      fileName: ['yellow'],
    },
  });

  debug(...args: unknown[]) {
    this.logger.debug(...args);
  }

  info(...args: unknown[]) {
    this.logger.info(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }

  error(...args: unknown[]) {
    this.logger.error(...args);
  }
}

export const emptyLogger: Logger = {
  debug: () => null,
  info: () => null,
  warn: () => null,
  error: () => null,
};
