import { PartialType } from '@nestjs/swagger';
import { CreatePerformanceAppraisalDto } from './create-performaceAppraisal.dto';

export class UpdatePerformanceAppraisal extends PartialType(CreatePerformanceAppraisalDto) {}
