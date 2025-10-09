import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LeaveDocument = Leave & Document;

@Schema({ timestamps: true })
export class Leave {
  @Prop({ required: true })
  employee: string;

  @Prop({ required: true })
  employeeId: string;

  @Prop({ required: true })
  employeeCode: string;

  @Prop({ required: true })
  leaveType: string;

  @Prop({ required: true })
  requestDuration: string;

  @Prop({ required: true, type: Number })
  days: number;

  @Prop({ type: Date, required: true })
  appliedOn: Date;

  @Prop({ type: Date, required: true })
  endDate: Date;


  @Prop({
    type: String,
    set: (value: string) =>
      value
        ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        : value,
  })
  reason: string;

  @Prop({ default: "Pending" })
  status: string;


  @Prop()
  addedBy?: string;

  @Prop()
  remarks?: string;
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);
