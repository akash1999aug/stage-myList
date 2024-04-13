import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BasicAuthMiddleware } from './basic-auth/basic_auth.middleware';

@Module({
    imports: [],
    providers: [],
})
export class MiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(BasicAuthMiddleware).forRoutes('*');
    }
}
