import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type HolidayDocument = Holiday & Document;

@Schema()
export class Holiday{

@Prop()
location:string;

@Prop()
eventName:string;

@Prop()
status:string;

@Prop()
startDate:string;

@Prop()
endDate:string;

@Prop()
description:string;
}

export const HolidaySchema =SchemaFactory.createForClass(Holiday);