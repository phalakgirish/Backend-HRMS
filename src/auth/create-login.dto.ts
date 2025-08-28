import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'john123' })
  username: string;

  @ApiProperty({ example: 'mypassword' })
  password: string;
}