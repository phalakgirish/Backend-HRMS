import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateDesignationDto {
    @ApiProperty({ example: 'Accounts', description: 'The name of the department' })
    @IsString()
    @IsNotEmpty()
    department: string;

    @ApiProperty({ example: 'System Administration', description: 'The name of the designation' })
    @IsString()
    @IsNotEmpty()
    designation: string;

   @ApiProperty({ example: 3000, description: 'expense limit' })
@IsNumber()
@IsNotEmpty()
expenceLimit: number;

    @ApiProperty({ example: 'Admin', description: 'added by' })
    @IsString()
    @IsNotEmpty()
    addedBy: string;
}