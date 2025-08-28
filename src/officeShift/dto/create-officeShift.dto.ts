import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class DayTimeDto  {
  @ApiProperty()
  @IsString()
  day: string;

  @ApiProperty()
  @IsString()
  inTime: string;

  @ApiProperty()
  @IsString()
  outTime: string;
}

export class CreateOfficeShiftDto {
  @ApiProperty({ example: "Morning Shift" })
  @IsString()
  @IsNotEmpty()
  shiftName: string;

  @ApiProperty({ type: [DayTimeDto] })
  days: DayTimeDto[];

}
