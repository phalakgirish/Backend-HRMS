import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeBankAccountDto } from './create-employee-bankaccount.dto';

export class UpdateEmployeeBankAccountDto extends PartialType(CreateEmployeeBankAccountDto) {}
