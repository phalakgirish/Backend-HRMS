import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type WarningsDocument = Warnings & Document;

@Schema()
export class Warnings{

@Prop()
employee:string;

@Prop()
warningDate:string;

@Prop()
subject:string;

@Prop()
warningType:string;

@Prop()
approvalStatus:string;

@Prop()
warningBy:string;

@Prop()
description:string;


@Prop()
comment:string;
}

export const WarningsSchema =SchemaFactory.createForClass(Warnings);