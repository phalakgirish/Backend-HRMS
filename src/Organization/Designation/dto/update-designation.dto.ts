import { PartialType } from '@nestjs/swagger';
import { CreateDesignationDto } from './create-designation.dto';

export class UpdateDesignation extends PartialType(CreateDesignationDto) {}
