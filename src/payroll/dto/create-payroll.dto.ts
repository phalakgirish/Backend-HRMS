import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreatePayrollDto {

    @IsString()
  empId: string;
  
    @ApiProperty()
    @IsString()
    tds: string;

    @ApiProperty()
    @IsString()
    advance: string;

   @ApiProperty()
    @IsString()
    arrierAdjustmentPlus: number;

    @ApiProperty()
    @IsString()
    arrierAdjustmentMinus: string;

    @ApiProperty()
    @IsString()
    bonus: string;

    @ApiProperty()
    @IsString()
    groupInsPremium:string

    @ApiProperty()
    @IsString()
    incentive:string

    @ApiProperty()
    @IsString()
    lwf:string

    @ApiProperty()
    @IsString()
    paymentMethod:string

    @ApiProperty()
    @IsString()
    comments:string
}