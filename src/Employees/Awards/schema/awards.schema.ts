import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Awards extends Document {
  @Prop({ required: true })
  employeeId: string;

  @Prop({ required: true })
  employeeName: string;

  @Prop({ required: true })
  awardName: string;

  @Prop({
    type: String,
    set: (value: string) =>
      value
        ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        : value,
  })
  gift: string;

    @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  cashPrice: number;

  @Prop({ required: true })
  monthYear: string;

  @Prop()
  awardPhoto?: string;

  @Prop()
  description?: string;

  @Prop()
  awardInfo:string;
}

export const AwardSchema = SchemaFactory.createForClass(Awards);
