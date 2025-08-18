import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateUpdateAttendanceDto {
      @ApiProperty({ example: '12-May-2022' })
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    employee: string;

}