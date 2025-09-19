import { PartialType } from '@nestjs/swagger';
import { CreatePayrollDto } from './create-payroll.dto';

export class UpdatePayroll extends PartialType(CreatePayrollDto) {}
