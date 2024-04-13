import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Post,
    Query,
    Req,
} from '@nestjs/common';
import { Request } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PaginationDto } from 'src/utils/pagination/dto/paginationQueryParam.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { Logger } from 'winston';
import { myListDto } from '../dto/myList.dto';
import { MyListService } from '../service/myList.service';

@Controller()
export class MyListController {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private myListService: MyListService,
    ) {}

    @Post('')
    @ResponseCustom('Content Added to the List')
    async addToMyList(@Body() addListData: myListDto, @Req() req: Request) {
        this.logger.info('MyListController :: add  :: Body', { addListData });

        const userId = req.headers?.['userid'] as string;

        await this.myListService.addListService(addListData.contentId, userId);
    }

    @Get('')
    async getAllMyListContent(
        @Query() paginationDTo: PaginationDto,
        @Req() req: Request,
    ) {
        this.logger.info('MyListController :: get list ');

        const userId = req.headers?.['userid'] as string;

        return await this.myListService.getAllMyListService(
            userId,
            paginationDTo,
        );
    }

    @Delete(':contentId')
    @ResponseCustom('Content Added to the List')
    async removeContent(@Param() addListData: myListDto, @Req() req: Request) {
        this.logger.info('MyListController :: remove content ');

        const userId = req.headers?.['userid'] as string;

        return await this.myListService.removeMyListService(
            addListData.contentId,
            userId,
        );
    }
}
