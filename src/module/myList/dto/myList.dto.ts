import { IsNotEmpty, IsUUID } from 'class-validator';

export class myListDto {
    @IsNotEmpty()
    @IsUUID()
    contentId: string;
}
