import { PartialType } from '@nestjs/swagger';
import { CreateOrgpolicyDto } from './create-orgpolicy.dto';

export class UpdateOrgpoliocy extends PartialType(CreateOrgpolicyDto) {}
