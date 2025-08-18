import { PartialType } from '@nestjs/swagger';
import { CreateTerminationDto } from './create-termination.dto';

export class UpdateTermination extends PartialType(CreateTerminationDto) {}
