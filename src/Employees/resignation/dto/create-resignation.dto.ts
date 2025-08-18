import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateResignationDto {
  @ApiProperty({ example: 'Shubham Kadam' })
  @IsString()
  @IsNotEmpty()
  employeeName: string;


  @ApiProperty({ example: '12-May-2022' })
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  noticeDate: string;


  @ApiProperty({ example: '12-May-2022' })
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  resignationDate: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  addedBy: string;

  @ApiProperty({ example: 'Accepted' })
  @IsString()
  @IsNotEmpty()
  approvalStatus: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  comment: string;
}