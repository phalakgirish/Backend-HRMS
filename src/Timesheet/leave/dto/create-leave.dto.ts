import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDateString, IsOptional, IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class CreateLeaveDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  employee: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  leaveType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  requestDuration: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  days: number;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  appliedOn: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  endDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  reason: string;

 @ApiProperty({ required: false })
@IsOptional()
@IsString()
status?: string;


  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  addedBy?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  remarks?: string;
}
