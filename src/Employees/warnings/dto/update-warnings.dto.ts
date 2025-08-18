import { PartialType } from '@nestjs/swagger';
import { CreateWarningsDto } from './create-warnings.dto';

export class UpdateWarnings extends PartialType(CreateWarningsDto) {}
