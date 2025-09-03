import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class EmployeeShift {

    @Prop({ type: Types.ObjectId, ref: 'Employee' })
    employeeId: Types.ObjectId;

    @Prop()
    shift_from_date: Date;

    @Prop()
    shift_to_date: Date;

    @Prop({ type: Types.ObjectId, ref: '', default: null })
    shift_id: Types.ObjectId;

    // @Prop({ type: Types.ObjectId, ref: 'Employee', default: null })
    // employee_id: Types.ObjectId;
}

export const Employeeshiftschema = SchemaFactory.createForClass(EmployeeShift)
