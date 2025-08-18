import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion{

@Prop()
employeeName:string;

@Prop()
PromotionTitle:string;

@Prop()
PromotionDate:string;

@Prop()
addedBy:string;

@Prop()
description:string;
}

export const PromotionSchema =SchemaFactory.createForClass(Promotion);