import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePayrollDto {
  @ApiProperty()
  @IsString()
  empId: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  arrierAdjustmentPlus: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  arrierAdjustmentMinus: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  bonus: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  employeeCtc?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  tds?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  advance?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  groupInsPremium: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  incentive: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  lwf: number;

  @ApiProperty()
  @IsString()
  paymentMethod: string;

  @ApiProperty()
  @IsString()
  comments: string;

  @ApiProperty()
  @IsNumber()
  basic: number;

  @ApiProperty()
  @IsNumber()
  hra: number;

  @ApiProperty()
  @IsNumber()
  lta: number;

  @ApiProperty()
  @IsNumber()
  allowance: number;

  @ApiProperty()
  @IsNumber()
  pfEmployer: number;

  @ApiProperty()
  @IsNumber()
  medical: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  esc: number;

  @ApiProperty()
  @IsNumber()
  gratuity: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  lop: number;

  @ApiProperty()
  @IsString()
  paymentStatus: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  pt: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  paidDate: Date;

  @ApiProperty()
  @IsString()
  month: string; 

  @ApiProperty()
  @IsNumber()
  year: number; 

  @ApiProperty()
  @IsString()
  paymentMonth: string; 

}
