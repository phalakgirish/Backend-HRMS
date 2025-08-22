import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainingListDocument = TrainingList & Document;

@Schema()
export class TrainingList {
    @Prop()
    trainingType: string;

    @Prop()
    trainer: string;

    @Prop()
    trainingCost: number;

    @Prop()
    startDate: string;

    @Prop()
    endDate: string;

    @Prop()
    department: string;

    @Prop()
    employee: string[];

    @Prop()
    status: string;

     @Prop()
    description: string;

     @Prop()
    performance: string;

     @Prop()
    remarks: string;
}

export const TrainingListSchema = SchemaFactory.createForClass(TrainingList);
