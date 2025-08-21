import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConstantsDocument = Constants & Document;

@Schema({ timestamps: true })
export class Constants {
  @Prop({ required: true }) // store which department/type it belongs to
  type: string;

  @Prop({ type: Object, required: true }) // store dynamic fields for that department
  value: Record<string, any>;
}

export const ConstantsSchema = SchemaFactory.createForClass(Constants);
