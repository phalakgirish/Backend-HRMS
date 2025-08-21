// create-leave.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDateString, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

export class CreateFilesManagerDto {
  @ApiProperty({ example: 'Accounts' })
  @IsString()
  @IsNotEmpty()
  department: string;

  @ApiProperty({ example: 'salary.pdf' })
  @IsString()
  @IsNotEmpty()
  file: string;

  @ApiProperty({ example: '250 KB' })
  @IsString()
  @IsNotEmpty()
  size: string;

  @ApiProperty({ example: 'pdf' })
  @IsString()
  @IsNotEmpty()
  extension: string;

  @ApiProperty({ example: '2023-08-19T10:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  uploadedDate: string;

   @ApiProperty({ example: 'salary.pdf' })
  @IsString()
  @IsNotEmpty()
  originalName: string;  // original filename
}

