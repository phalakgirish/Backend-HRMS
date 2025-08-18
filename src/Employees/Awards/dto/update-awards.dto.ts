import { PartialType } from '@nestjs/swagger';
import { CreateAwardsDto } from './create-awards.dto';

export class UpdateAwards extends PartialType(CreateAwardsDto) {}
