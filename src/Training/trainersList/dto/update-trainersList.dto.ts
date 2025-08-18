import { PartialType } from '@nestjs/swagger';
import { CreateTrainersListDto } from './create-trainersList.dto';

export class UpdateTrainersListDto extends PartialType(CreateTrainersListDto) {}
