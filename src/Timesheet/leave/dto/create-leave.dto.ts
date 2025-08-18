// create-leave.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDateString, IsOptional } from "class-validator";
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
  @IsString()
  @IsNotEmpty()
  days: string;

  @ApiProperty()
  @IsDateString() // ✅ Better validation for dates
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

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  addedBy?: string;
}
