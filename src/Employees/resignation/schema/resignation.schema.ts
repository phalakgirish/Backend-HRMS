import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ResignationDocument = Resignation & Document;

@Schema()
export class Resignation{

@Prop()
employeeName:string;

@Prop()
noticeDate:string;

@Prop()
resignationDate:string;

@Prop()
addedBy:string;

@Prop()
approvalStatus:string;

@Prop()
description:string;

@Prop()
comment:string;
}

export const ResignationSchema =SchemaFactory.createForClass(Resignation);