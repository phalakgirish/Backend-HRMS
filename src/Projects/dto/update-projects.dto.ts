import { PartialType } from '@nestjs/swagger';
import { CreateProjectsDto } from './create-projects.dto';

export class UpdateProjects extends PartialType(CreateProjectsDto) {}
