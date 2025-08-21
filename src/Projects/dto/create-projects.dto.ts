import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateProjectsDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    projectSummary: string;

//    @ApiProperty({ example: '12-May-2022' })
//     @IsNotEmpty()
//     startDate: string;

@Transform(({ value }) => {
  const d = new Date(value);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}, { toPlainOnly: true })
startDate: Date;


// @ApiProperty({ example: '12-May-2022' })
//     @IsNotEmpty()
//     endDate: string;

@Transform(({ value }) => {
  const d = new Date(value);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}, { toPlainOnly: true })
endDate: Date;


   @ApiProperty({ example: 50 })
@IsNumber()
@IsNotEmpty()
progress: number;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    assignedUsers: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    priority: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    clientName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    company: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    projectManager: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    remarks: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

}