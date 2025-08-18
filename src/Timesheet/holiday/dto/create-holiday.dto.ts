import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateHolidayDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    location: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    eventName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    startDate: string;

     @ApiProperty()
    @IsString()
    @IsNotEmpty()
    endDate: string;

     @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    
}