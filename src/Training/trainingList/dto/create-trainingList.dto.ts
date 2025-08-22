import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateTrainingListDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  trainingType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  trainer: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  trainingCost: number;

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
  department: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsNotEmpty()
  employee: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  performance: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  remarks: string;
}
