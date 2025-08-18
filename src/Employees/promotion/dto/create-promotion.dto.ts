import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreatePromotionDto {
    @ApiProperty({ example: 'Shubham Kadam' })
    @IsString()
    @IsNotEmpty()
    employeeName: string;

    @ApiProperty({ example: 'snr.manager' })
    @IsString()
    @IsNotEmpty()
    PromotionTitle: string;

    @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    PromotionDate: string;

    @ApiProperty({ example: 'Admin' })
    @IsString()
    @IsNotEmpty()
    addedBy: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}