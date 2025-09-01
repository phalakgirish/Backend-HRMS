import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export class EmployeeShift {

    @Prop()
    shift_from_date:Date;

    @Prop()
    shift_to_date:Date;

    @Prop({ type: Types.ObjectId, ref: '', default:null})
    shift_id:Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Employee', default:null})
    employee_id:Types.ObjectId;
}

export const Employeeshiftschema = SchemaFactory.createForClass(EmployeeShift)
