import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types  } from "mongoose";

export class EmployeeExperience {
    @Prop()
    company_name:String;

    @Prop()
    designation:String;

    @Prop()
    from_date:Date;

    @Prop()
    to_date	:Date;

    @Prop()
    desc:String;

    @Prop({ type: Types.ObjectId, ref: 'Employee', default:null})
    emaployee_id:Types.ObjectId
}

export const Employeeexperienceschema = SchemaFactory.createForClass(EmployeeExperience)
