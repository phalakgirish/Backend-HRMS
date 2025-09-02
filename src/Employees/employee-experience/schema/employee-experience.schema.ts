import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types  } from "mongoose";

@Schema() 
export class EmployeeExperience {
     @Prop({ type: Types.ObjectId, ref: 'Employee' })
      employeeId: Types.ObjectId;

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

}

export const Employeeexperienceschema = SchemaFactory.createForClass(EmployeeExperience)
