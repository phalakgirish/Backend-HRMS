import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LeaveDocument = Leave & Document;

@Schema({ timestamps: true })
export class Leave {
  @Prop({ required: true })
  employee: string;

  @Prop({ required: true })
  leaveType: string;

  @Prop({ required: true })
  requestDuration: string;

  @Prop({ required: true, type: Number })
  days: number;

  @Prop({ required: true })
  appliedOn: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ required: true })
  reason: string;

  @Prop({ default: "Pending" })
status: string;


  @Prop()
  addedBy?: string;

  @Prop()
  remarks?: string;
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);
