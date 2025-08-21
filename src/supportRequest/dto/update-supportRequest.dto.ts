import { PartialType } from '@nestjs/swagger';
import { CreateSupportRequestDto } from './create-supportRequest.dto';

export class UpdateSupportRequest extends PartialType(CreateSupportRequestDto) {}
