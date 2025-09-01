import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types  } from "mongoose";

@Schema() 

export class EmployeeQualification {
    @Prop()
    employee_school_university:String;

    @Prop()
    employee_education_level:String;

    @Prop()
    employee_passout_year:String;

    @Prop()
    education_desc:String;

    // @Prop({type:Types.ObjectId})
    // employee_id:Types.ObjectId;

      @Prop({ required: true })
       employeeId: string;
}
// export type EmployeeQualificationDocument = EmployeeQualification & Document;

export const Employeequalificationschema = SchemaFactory.createForClass(EmployeeQualification)
