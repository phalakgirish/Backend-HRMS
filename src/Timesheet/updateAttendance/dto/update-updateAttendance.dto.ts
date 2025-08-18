import { PartialType } from '@nestjs/swagger';
import { CreateUpdateAttendanceDto } from './create-updateAttendance.dto';

export class UpdateUpdateAttendance extends PartialType(CreateUpdateAttendanceDto) {}
