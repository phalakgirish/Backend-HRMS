import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeQualificationDto } from './create-employee-qualification.dto';

export class UpdateEmployeeQualificationDto extends PartialType(CreateEmployeeQualificationDto) {}
