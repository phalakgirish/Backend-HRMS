import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsArray, IsNotEmpty, IsString } from "class-validator";
export class CreateEmployeeExitDto {
    @ApiProperty({ example: 'Shubham Kadam' })
    @IsString()
    @IsNotEmpty()
    employee: string;

   @ApiProperty()
    @IsString()
    @IsNotEmpty()
    exitType: string;

   @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    exitDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    exitInterview: string;

    @ApiProperty({ example: 'Accepted' })
    @IsString()
    @IsNotEmpty()
    inactivateAccount: string;

  @ApiProperty({
  example: ['No Dues', 'Final Settlement', 'Experience Certificate'],
  type: [String],
})
@IsArray()
@IsString({ each: true })
@IsNotEmpty()
exitChecklist: string[];


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    addedBy: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}

function moment(value: any) {
    throw new Error("Function not implemented.");
}
