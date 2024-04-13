import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Sequelize } from 'sequelize';
import { PaginationDto } from 'src/utils/pagination/dto/paginationQueryParam.dto';
import { Logger } from 'winston';
import { MyListEntity } from '../entity/myList.entity';

@Injectable()
export class MyListRepository {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        @Inject('SEQUELIZE') private readonly sequelize: Sequelize,
    ) {}

    async addList(contentId: string, userId: string) {
        return await MyListEntity.create({
            contentId,
            userId,
        });
    }

    async getContentInList(contentId: string, userId: string) {
        return await MyListEntity.findOne({ where: { userId, contentId } });
    }

    async getMyList(userId: string, paginationDTo: PaginationDto) {
        return await MyListEntity.findAll({
            where: { userId },
            limit: paginationDTo?.limit,
            offset: paginationDTo?.offset,
        });
    }

    async deleteMyList(contentId: string, userId: string) {
        return await MyListEntity.destroy({ where: { contentId, userId } });
    }
}
