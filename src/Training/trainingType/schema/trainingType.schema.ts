import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainingTypeDocument = TrainingType & Document;

@Schema()
export class TrainingType {
    @Prop()
    trainingType: string;

}

export const TrainingTypeSchema = SchemaFactory.createForClass(TrainingType);
