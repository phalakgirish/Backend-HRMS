import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";

@Schema({ timestamps: true })
export class Attendance extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employee_id: Types.ObjectId;

  @Prop({ required: true })
  attendance_date: Date;

  @Prop() attendance_clock_in: string;
  @Prop() attendance_clock_out: string;
  @Prop() attendance_late: string;
  @Prop() attendance_early_leaving: string;
  @Prop() attendance_overtime: string;
  @Prop() attendance_total_work: string;
  @Prop() attendance_total_rest: string;
  @Prop() attendance_status: string;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
