import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateTransferDto {
    @ApiProperty({ example: 'Shubham Kadam' })
    @IsString()
    @IsNotEmpty()
    employeeName: string;

    @ApiProperty({ example: '12-May-2022' })
      @IsNotEmpty()
      @Transform(({ value }) => new Date(value), { toClassOnly: true })
    transferDate: string;

    @ApiProperty({ example: 'Accounts' })
    @IsString()
    @IsNotEmpty()
    transferToDepartment: string;

    @ApiProperty({ example: 'Bangalore' })
    @IsString()
    @IsNotEmpty()
    transferToLocation: string;

     @ApiProperty({ example: 'Accepted' })
    @IsString()
    @IsNotEmpty()
    status:string;

     @ApiProperty({ example: 'Admin' })
    @IsString()
    @IsNotEmpty()
    addedBy:string;

      @ApiProperty({ example: 'Admin' })
    @IsString()
    @IsNotEmpty()
    description:string;
}