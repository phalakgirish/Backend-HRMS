// leave.schema.ts
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
  requestDuration: string; // Could be a string like "5 days" or "12 Dec - 15 Dec"

  @Prop({ required: true })
  days: string; // Just numeric string, e.g., "5"

  @Prop({ required: true })
  appliedOn: string; // Could store as Date

  @Prop({ required: true })
  endDate: string; // Could store as Date

  @Prop({ required: true })
  reason: string;

  @Prop({ required: true })
  status: string; // Approved, Pending, Rejected

  @Prop()
  addedBy?: string; // Optional if you want to store who created it
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);
