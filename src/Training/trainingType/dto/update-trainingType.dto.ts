import { PartialType } from '@nestjs/swagger';
import { CreateTrainingTypeDto } from './create-trainingType.dto';

export class UpdateTrainingTypeDto extends PartialType(CreateTrainingTypeDto) {}
