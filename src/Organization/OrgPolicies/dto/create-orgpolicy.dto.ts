import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateOrgpolicyDto {
    @ApiProperty({ example: 'UBI Services', description: 'The name of the company' })
    @IsString()
    @IsNotEmpty()
    company: string;

    @ApiProperty({ example: 'Smoke free work environment', description: 'title of policy' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'Date.now()', description: 'Timestamp when the record was created' })
    @IsString()
    @IsNotEmpty()
    createdAt: number;

    @ApiProperty({ example: 'Admin', description: 'added by' })
    @IsString()
    @IsNotEmpty()
    addedBy: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}