import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreatePerformanceAppraisalDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    employee: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    designation: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    appraisalDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    department: string;

     @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    customerExperience: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    marketing: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    management: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    administration: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    presentationSkill: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    qualityOfWork: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    efficiency: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    integrity: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    professionalism: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    teamWork: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    criticalThinking: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    conflictManagement: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    attendance: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    abilityToMeetDeadline: string;

}