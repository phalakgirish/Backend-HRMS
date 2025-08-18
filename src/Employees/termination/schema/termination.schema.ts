import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TerminationDocument = Termination & Document;

@Schema()
export class Termination{

@Prop()
employee:string;

@Prop()
terminationType:string;

@Prop()
noticeDate:string;

@Prop()
terminationDate:string;

@Prop()
approvalStatus:string;

@Prop()
description:string;

}

export const TerminationSchema =SchemaFactory.createForClass(Termination);