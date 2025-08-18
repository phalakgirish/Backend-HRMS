import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateLocationDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    company: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    locationName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    phone: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    faxNumber: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    locationHead: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    locationHrManager: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    state: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    zipCode: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    country: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bankBranch: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bankName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bankCode: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bankAccountNo: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    addedBy: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    basiSalary: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    hra: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lta: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    allowance: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    pfEmployer: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    medical: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    esc: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gratuity: string;
}
