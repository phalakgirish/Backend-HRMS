import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ example: 'Minal', description: 'The name of the user' })
  @IsString()
  @IsNotEmpty()
  departmentName: string;

  @ApiProperty({ example: 'ubi services', description: 'The company of the user' })
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty({ example: 'mumbai', description: 'The location of the user' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: 'admin', description: 'The dept head of the user' })
  @IsString()
  @IsNotEmpty()
  departmentHead: string;
}
