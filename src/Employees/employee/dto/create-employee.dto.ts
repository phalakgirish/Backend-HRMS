import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import * as mongoose from "mongoose";
export class CreateEmployeeDto {

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    id?: string;


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
    company: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: 'Accepted' })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    role: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    designation: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    employeeCtc: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    monthlyCtc: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    department: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    dateofBirth: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    joiningDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    maritalStatus: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    contactNumber: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    employeeCategory: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    reportingTo: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    probationDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    confirmationDate: string;

    @ApiProperty()
    @IsString()
    approvalByOne: string;

     @ApiProperty()
    @IsString()
    approvalByTwo: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bloodGroup: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    religion: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cast: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    locationName: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    grade?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    confirmPassword: string;
}

function moment(value: any) {
    throw new Error("Function not implemented.");
}
