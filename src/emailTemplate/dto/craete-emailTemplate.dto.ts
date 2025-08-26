import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEmailTemplateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    templateName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    subject: string;
}
