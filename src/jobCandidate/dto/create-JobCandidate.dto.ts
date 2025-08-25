import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDateString, IsOptional, IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class CreateJobCandidateDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    jobTitle: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    applyDate: string;
}
