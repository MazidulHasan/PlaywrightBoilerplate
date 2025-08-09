import winston from 'winston';
import path from 'path';

export class Logger {
  constructor({ level = 'info' } = {}) {
    const logfile = path.resolve(process.cwd(), 'logs', `execution-${new Date().toISOString().slice(0,10)}.log`);
    this.logger = winston.createLogger({
      level,
      format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: logfile })
      ]
    });
  }

  info(msg) { this.logger.info(msg); }
  warn(msg) { this.logger.warn(msg); }
  error(msg) { this.logger.error(msg); }
  debug(msg) { this.logger.debug(msg); }
}