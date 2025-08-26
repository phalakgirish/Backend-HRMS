import { PartialType } from '@nestjs/swagger';
import { CreateEmailTemplateDto } from './craete-emailTemplate.dto';

export class UpdateEmailTemplateDto extends PartialType(CreateEmailTemplateDto) {}
