import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from 'src/utils/jwtService/jwt.module';
import { MyListController } from './controller/myList.controller';
import { MyListRepository } from './repository/myList.repository';
import { MyListService } from './service/myList.service';

@Module({
    imports: [JwtModule, DatabaseModule],
    controllers: [MyListController],
    providers: [MyListService, MyListRepository],
    exports: [],
})
export class MyListModule {}
