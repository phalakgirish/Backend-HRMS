import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTrainersListDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastName: string;

    // @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    // fullName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    contactNo: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    designation: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    expertise: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;
}
