import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { DatabaseService } from './database.service';
import { HashModule } from 'src/utils/hashing/hash.module';

@Module({
    imports: [HashModule],
    providers: [
        // Service
        DatabaseService,

        // Providers
        ...databaseProvider,
    ],
    exports: [...databaseProvider],
})
export class DatabaseModule {}
