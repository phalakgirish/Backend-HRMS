import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateAwardsDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    employeeId: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    employeeName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    awardName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gift: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    cashPrice: number;

   @ApiProperty()
       @IsNotEmpty()
       @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date: string;

    @ApiProperty()
    @IsNotEmpty()
       @Transform(({ value }) => new Date(value), { toClassOnly: true })
    monthYear: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    awardPhoto?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    awardInfo: string;
}