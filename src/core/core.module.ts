import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { DatabaseModule } from 'src/database/database.module';
import { DebuggerModule } from 'src/utils/debugger/debugger.module';
import { DebuggerService } from 'src/utils/debugger/debugger.service';
import { ErrorModule } from 'src/utils/error/error.module';
import { RoleGuard } from 'src/utils/guards/role.guard';
import { MiddlewareModule } from 'src/utils/middleware/middleware.module';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import ConfigModule from './config.module';

@Module({
    imports: [
        // Config setup for environment file and values
        ConfigModule,

        // Winston setup for logging
        WinstonModule.forRootAsync({
            inject: [DebuggerService],
            imports: [DebuggerModule],
            useFactory: (debuggerService: DebuggerService) =>
                debuggerService.createLogger(),
        }),

        // Error Module
        ErrorModule,

        // Database Modules
        DatabaseModule,

        // Pagination Modules
        PaginationModule,

        //Middleware Module
        MiddlewareModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RoleGuard,
        },
    ],
})
export class CoreModule {}
