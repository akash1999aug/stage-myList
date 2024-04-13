import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { COMMON_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { PaginationDto } from 'src/utils/pagination/dto/paginationQueryParam.dto';
import { Logger } from 'winston';
import { MyListRepository } from '../repository/myList.repository';

@Injectable()
export class MyListService {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private myListRepository: MyListRepository,
    ) {}

    async addListService(contentId: string, userId: string) {
        const ifAlreadyPresent = await this.myListRepository.getContentInList(
            contentId,
            userId,
        );

        if (!!ifAlreadyPresent)
            throw new HttpExceptionWrapper(COMMON_ERROR.CUSTOM_ALREADY_EXISTS);

        return await this.myListRepository.addList(contentId, userId);
    }

    async getAllMyListService(userId: string, paginationDTo: PaginationDto) {
        return await this.myListRepository.getMyList(userId, paginationDTo);
    }

    async removeMyListService(contentId: string, userId: string) {
        const ifAlreadyPresent = await this.myListRepository.getContentInList(
            contentId,
            userId,
        );

        if (!ifAlreadyPresent)
            throw new HttpExceptionWrapper(COMMON_ERROR.CUSTOM_NOT_EXISTS);

        return await this.myListRepository.deleteMyList(contentId, userId);
    }
}
