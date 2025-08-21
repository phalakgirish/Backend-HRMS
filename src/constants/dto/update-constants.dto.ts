import { PartialType } from '@nestjs/swagger';
import { CreateConstantsDto } from './create-constants.dto';

export class UpdateConstants extends PartialType(CreateConstantsDto) {}
