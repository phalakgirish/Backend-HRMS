import { PartialType } from '@nestjs/swagger';
import { CreateTrainingListDto } from './create-trainingList.dto';

export class UpdateTrainingListDto extends PartialType(CreateTrainingListDto) {}
