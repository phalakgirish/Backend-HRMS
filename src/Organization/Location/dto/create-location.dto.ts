import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateLocationDto {
    @ApiProperty()
    @IsString()
    company: string;

    @ApiProperty()
    @IsString()
    locationName: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    phone: number;

    @ApiProperty()
    @IsString()
    faxNumber: string;

    @ApiProperty()
    @IsString()
    locationHead: string;

    @ApiProperty()
    @IsString()
    locationHrManager: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    state: string;

    @ApiProperty()
    @IsString()
    zipCode: number;

    @ApiProperty()
    @IsString()
    country: string;

    @ApiProperty()
    @IsString()
    bankBranch: string;

    @ApiProperty()
    @IsString()
    bankName: string;

    @ApiProperty()
    @IsString()
    bankCode: string;

    @ApiProperty()
    @IsString()
    bankAccountNo: string;

    @ApiProperty()
    @IsString()
    addedBy: string;

    @ApiProperty()
    @IsString()
    basiSalary: string;

    @ApiProperty()
    @IsString()
    hra: string;

    @ApiProperty()
    @IsString()
    lta: string;

    @ApiProperty()
    @IsString()
    allowance: string;

    @ApiProperty()
    @IsString()
    pfEmployer: string;

    @ApiProperty()
    @IsString()
    medical: string;

    @ApiProperty()
    @IsString()
    esc: string;

    @ApiProperty()
    @IsString()
    gratuity: string;

    @ApiProperty({ required: false })
    @IsString()
    id?: string;
}
