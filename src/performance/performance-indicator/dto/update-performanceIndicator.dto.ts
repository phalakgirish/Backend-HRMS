import { PartialType } from '@nestjs/swagger';
import { CreatePerformanceIndicatorDto } from './create-performanceIndicator.dto';

export class UpdatePerformanceIndicator extends PartialType(CreatePerformanceIndicatorDto) {}
