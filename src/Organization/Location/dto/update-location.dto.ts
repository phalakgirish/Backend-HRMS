import { PartialType } from '@nestjs/swagger';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocation extends PartialType(CreateLocationDto) {}
