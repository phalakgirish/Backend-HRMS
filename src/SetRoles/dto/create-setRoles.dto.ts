import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateSetRolesDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    roleName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    menuPermission: string;

    @ApiProperty({ example: new Date().toISOString().split("T")[0] })
    readonly addedDate?: string;
}
