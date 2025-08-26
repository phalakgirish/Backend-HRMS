import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailTemplate, EmailTemplateSchema } from './schema/emailTemplate.schema';
import { EmailTemplateService } from './emailTemplate.service';
import { EmailTemplateController } from './emailTemplate.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EmailTemplate.name, schema: EmailTemplateSchema }])
  ],
  controllers: [EmailTemplateController],
  providers: [EmailTemplateService],
})
export class EmailTemplateModule {}
