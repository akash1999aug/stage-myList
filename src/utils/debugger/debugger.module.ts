import { Module } from '@nestjs/common';
import { DebuggerService } from './debugger.service';
import { LoggerService } from './logger.service';

@Module({
    imports: [],
    providers: [DebuggerService, LoggerService],
    exports: [DebuggerService],
})
export class DebuggerModule {}
