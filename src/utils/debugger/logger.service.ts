import { Inject, Injectable, Logger, Optional, Scope } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
    defaultInitial: string | undefined;

    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        @Optional()
        private readonly logger: WinstonLogger,
    ) {}

    setInitial(initial: Initial) {
        this.defaultInitial = Array.isArray(initial)
            ? initial.join(':: ')
            : initial;
    }

    getInitial(initial: Initial, userName?: string): string {
        const messageInitial = Array.isArray(initial)
            ? initial.join(':: ')
            : initial;

        return `${
            this.defaultInitial ? `${this.defaultInitial}:: ` : ''
        }${messageInitial}:: ${userName ? `userName ==> ${userName}:: ` : ''}`;
    }

    info(initial: Initial, param?: Record<string, any>, userName?: string) {
        const messageInitial = this.getInitial(initial, userName);

        if (this.logger) {
            this.logger.info(messageInitial, param);
        } else {
            // Fallback to the default logger if not provided
            Logger.log(messageInitial, [param]);
        }
    }

    debug(initial: Initial, param?: Record<string, any>, userName?: string) {
        const messageInitial = this.getInitial(initial, userName);

        if (this.logger) {
            this.logger.debug(messageInitial, param);
        } else {
            // Fallback to the default logger if not provided
            Logger.log(messageInitial, [param]);
        }
    }

    log(
        logLevel: LogLevel,
        initial: Initial,
        param?: Record<string, any>,
        userName?: string,
    ) {
        const messageInitial = this.getInitial(initial, userName);

        if (this.logger) {
            this.logger.log(logLevel, messageInitial, param);
        } else {
            // Fallback to the default logger if not provided
            Logger.log(messageInitial, [param]);
        }
    }

    error(
        initial: Initial,
        trace: string | Record<string, any>,
        userName?: string,
    ) {
        const messageInitial = this.getInitial(initial, userName);

        if (this.logger) {
            this.logger.error(messageInitial, trace);
        } else {
            // Fallback to the default logger if not provided
            Logger.error(initial, [trace]);
        }
    }
}

type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';
type Initial = string | string[];
