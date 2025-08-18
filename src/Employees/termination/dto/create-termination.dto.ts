import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateTerminationDto {
    @ApiProperty({ example: 'Shubham Kadam' })
    @IsString()
    @IsNotEmpty()
    employee: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    terminationType: string;

    @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    noticeDate: string;

    @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    terminationDate: string;

    @ApiProperty({ example: 'Accepted' })
    @IsString()
    @IsNotEmpty()
    approvalStatus: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

}

function moment(value: any) {
    throw new Error("Function not implemented.");
}
