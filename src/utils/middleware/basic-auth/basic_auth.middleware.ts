import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { AUTH_ERROR } from 'src/constants/error';
import { UserEntity } from 'src/module/user/entity/user.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Logger } from 'winston';

@Injectable()
export class BasicAuthMiddleware implements NestMiddleware {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private configService: ConfigService,
    ) {}

    async use(req: Request, res: Response, next: NextFunction) {
        this.logger.info('Inside BasicAuthMiddleware Middleware');

        try {
            const userId = req.headers?.['userid'];

            const isUserValid = await UserEntity.findOne({
                where: { id: userId },
            });

            if (!isUserValid)
                throw new HttpExceptionWrapper(AUTH_ERROR.INVALID_USER);
        } catch {
            throw new HttpExceptionWrapper(AUTH_ERROR.INVALID_USER_ID);
        }

        next();
    }
}
