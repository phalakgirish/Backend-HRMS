import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty({ description: 'Employee ObjectId' })
  readonly employee_id: Types.ObjectId;

  @ApiProperty({ description: 'Attendance date (YYYY-MM-DD)' })
  readonly attendance_date: Date;

  @ApiProperty({ description: 'Clock in time', example: '09:00' })
  readonly attendance_clock_in: string;

  @ApiProperty({ description: 'Clock out time', example: '18:00' })
  readonly attendance_clock_out: string;

  @ApiProperty({ description: 'Late duration', required: false })
  readonly attendance_late?: string;

  @ApiProperty({ description: 'Early leaving duration', required: false })
  readonly attendance_early_leaving?: string;

  @ApiProperty({ description: 'Overtime duration', required: false })
  readonly attendance_overtime?: string;

  @ApiProperty({ description: 'Total work duration', required: false })
  readonly attendance_total_work?: string;

  @ApiProperty({ description: 'Total rest duration', required: false })
  readonly attendance_total_rest?: string;

  @ApiProperty({ description: 'Attendance status', example: 'Present', required: false })
  readonly attendance_status?: string;
}
