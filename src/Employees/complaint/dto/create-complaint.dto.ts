import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateComplaintDto {
  @ApiProperty({ example: 'Admin Admin' })
  @IsString()
  @IsNotEmpty()
  complaintFrom: string;

  @ApiProperty({
    example: ['Shubham Kadam', 'Amit Kumar'],
    description: 'List of employees complaint is against',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  complaintAgainst: string[];

  @ApiProperty({ example: 'Misbehave' })
  @IsString()
  @IsNotEmpty()
  complaintTitle: string;

  @ApiProperty({ example: '12-May-2022' })
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  complaintDate: string;

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