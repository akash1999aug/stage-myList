import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class PaginationDto {
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    offset?: number = 0;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    limit?: number;
}
