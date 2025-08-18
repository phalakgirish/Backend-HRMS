import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";
export class CreateExpenseDto {
    @ApiProperty({ example: 'Accounts' })
    @IsString()
    @IsNotEmpty()
    expense: string;

    @ApiProperty({ example: 'System Administration' })
    @IsString()
    @IsNotEmpty()
    employee: string;

    @ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    purchasedDate: string;

    @ApiProperty({ example: '4000' })
    @IsString()
    @IsNotEmpty()
    amount: number;

    @ApiProperty({ example: 'accept' })
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}