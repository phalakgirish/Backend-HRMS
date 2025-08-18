import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTravelDto {

    @ApiProperty({ example: 'Shubham Kadam' })
    @IsString()
    @IsNotEmpty()
    employeeName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    purposeOfVisit: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    placOfVisit: string;

    @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate: string;

    @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    travelMode: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    arrangementType: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    expectedTravelBudget: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    actualTravelBudget: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    approvalStatus: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    addedBy: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}

