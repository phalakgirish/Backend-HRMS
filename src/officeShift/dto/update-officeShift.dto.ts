import { PartialType } from '@nestjs/swagger';
import { CreateOfficeShiftDto } from './create-officeShift.dto';

export class UpdateOfficeShift extends PartialType(CreateOfficeShiftDto) {}
