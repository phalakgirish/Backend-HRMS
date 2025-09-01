import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types  } from "mongoose";

export class EmployeeDocument {
    @Prop({ type: Types.ObjectId, ref: '', default:null })
    document_type_id:Types.ObjectId;

    @Prop()
    document_title:String;

    @Prop()
    document_doe:Date;

    @Prop()
    document_notification_email:String;

    @Prop()
    document_desc:String;

    @Prop()
    document_file:String;

    @Prop()
    is_sendnotification_doe:Boolean;

    @Prop({ type: Types.ObjectId, ref: 'Employee', default:null})
    employee_id:Types.ObjectId;
}

export const Employeedocumentschema = SchemaFactory.createForClass(EmployeeDocument)
