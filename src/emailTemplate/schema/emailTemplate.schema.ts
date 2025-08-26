import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmailTemplateDocument = EmailTemplate & Document;

@Schema()
export class EmailTemplate {
    @Prop()
    templateName: string;

    @Prop()
    status: string;

    @Prop()
    subject: string;
}

export const EmailTemplateSchema = SchemaFactory.createForClass(EmailTemplate);
