import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types  } from "mongoose";
import { Employee } from "src/Employees/employee/schema/employee.schema";

@Schema() 
export class EmployeeFamily {

     @Prop({ required: true })
  employeeId: string;
    @Prop()
    family_relation:String;

    @Prop()
    family_name:String;

    @Prop()
    family_primary_contact:Boolean;

    @Prop()
    family_dependent_contact:Boolean;

    @Prop({default:''})
    family_email_work:String;

    @Prop()
    family_email_personal:String;

    @Prop()
    family_address:String;

    @Prop()
    family_mobile:String;

    @Prop({default:''})
    family_phone_work:String;

    @Prop()
    family_city:String;

    @Prop()
    family_state:String;

    @Prop()
    family_pincode:String;

    @Prop()
    family_country:String;

    @Prop()
    family_dob:Date;
    
    // @Prop({ type: Types.ObjectId, ref: 'Employee', default:null })
    // employee_id:Types.ObjectId;

    // @Prop({ type: Types.ObjectId, ref: "Employee", required: true })
    // employee_id: Types.ObjectId;
}

export const Employeefamilyschema = SchemaFactory.createForClass(EmployeeFamily)
