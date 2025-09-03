import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeAssetsDto } from './create-employee-assets.dto';

export class UpdateEmployeeAssetsDto extends PartialType(CreateEmployeeAssetsDto) {}
