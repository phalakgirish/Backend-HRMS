import { PartialType } from '@nestjs/swagger';
import { CreateSetRolesDto } from './create-setRoles.dto';

export class UpdateSetRolesDto extends PartialType(CreateSetRolesDto) {}
