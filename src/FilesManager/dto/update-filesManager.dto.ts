import { PartialType } from '@nestjs/swagger';
import { CreateFilesManagerDto } from './create-filesManager.dto';

export class UpdateFilesManager extends PartialType(CreateFilesManagerDto) {}
