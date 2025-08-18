import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeExitDto } from './create-EmployeeExit.dto';

export class UpdatEmployeeExit extends PartialType(CreateEmployeeExitDto) {}
