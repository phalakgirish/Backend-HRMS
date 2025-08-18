import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateWarningsDto {
    @ApiProperty({ example: 'Shubham Kadam' })
    @IsString()
    @IsNotEmpty()
    employee: string;

    @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    warningDate: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    subject: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    warningType: string;

    @ApiProperty({ example: 'Accepted' })
    @IsString()
    @IsNotEmpty()
    approvalStatus: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    warningBy: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    comment: string;
}

function moment(value: any) {
    throw new Error("Function not implemented.");
}
