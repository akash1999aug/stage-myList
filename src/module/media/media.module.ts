import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from 'src/utils/jwtService/jwt.module';
import { MediaController } from './controller/media.controller';

@Module({
    imports: [JwtModule, DatabaseModule],
    controllers: [MediaController],
    providers: [],
    exports: [],
})
export class MediaModule {}
