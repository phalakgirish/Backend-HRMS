import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types  } from "mongoose";

export class Attendance {
    @Prop({ type: Types.ObjectId, ref: 'Employee', default:null }) // Reference to Location collection
    employee_id:Types.ObjectId;

    @Prop()
    attendance_date:Date;

    @Prop()
    attendance_clock_in:String;

    @Prop()
    attendacne_clock_out:String;

    @Prop()
    attencance_late:String;

    @Prop()
    attendance_early_leaving:String;

    @Prop()
    attendance_overtime:String;

    @Prop()
    attendance_total_work:String;

    @Prop()
    attendance_total_rest:String;

    @Prop()
    attendance_status:String;

}

export const Attendanceschema = SchemaFactory.createForClass(Attendance)
