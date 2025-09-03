import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeLocationDto } from './create-employee-location.dto';

export class UpdateEmployeeLocationDto extends PartialType(CreateEmployeeLocationDto) {}
