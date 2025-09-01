import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose"

export class EmployeeAssets {
    
    @Prop({type:Types.ObjectId, ref:'Assets',default:null})
    assets_type_id:Types.ObjectId;
    
    @Prop()
    assets_brand:String;
    
    @Prop()
    assets_model_no:String;
    
    @Prop()
    assets_serial_no:String;
    
    @Prop()
    assets_issued_date:Date;
    
    @Prop()
    assets_cost:String;
    
    @Prop()
    assets_quality:String;
    
    @Prop()
    assets_insurance:String;

    @Prop()
    assets_remark:String;

    @Prop({type:Types.ObjectId, ref:'Employee',default:null})
    employee_id:Types.ObjectId;

}

export const Employeeassetsschema = SchemaFactory.createForClass(EmployeeAssets)
