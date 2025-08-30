import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainersListDocument = TrainersList & Document;

@Schema()
export class TrainersList {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    // @Prop()
    // fullName: string;

    @Prop()
    contactNo: string;

    @Prop()
    email: string;

    @Prop()
    designation: string;

    @Prop()
    expertise: string;

     @Prop({
           type: String,
           set: (value: string) =>
               value
                   ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                   : value,
       })
    address: string;
}

export const TrainersListSchema = SchemaFactory.createForClass(TrainersList);
