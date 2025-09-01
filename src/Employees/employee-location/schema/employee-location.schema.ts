import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export class EmployeeLocation {
        @Prop()
        location_from_date:Date;
    
        @Prop()
        location_to_date:Date;
    
        @Prop({ type: Types.ObjectId, ref: '', default:null})
        location_id:Types.ObjectId;
    
        @Prop({ type: Types.ObjectId, ref: 'Employee', default:null})
        employee_id:Types.ObjectId;
}

export const Employeelocationschema = SchemaFactory.createForClass(EmployeeLocation)
