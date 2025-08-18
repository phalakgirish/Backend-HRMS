import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TransferDocument = Transfer & Document;

@Schema()
export class Transfer{

@Prop()
employeeName:string;

@Prop()
transferDate:string;

@Prop()
transferToDepartment:string;

@Prop()
transferToLocation:string;

@Prop()
status:string;

@Prop()
addedBy:string;

@Prop()
description:string;
}

export const TransferSchema =SchemaFactory.createForClass(Transfer);