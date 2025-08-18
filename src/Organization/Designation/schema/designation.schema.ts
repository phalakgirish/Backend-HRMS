import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type DesignationDocument = Designation & Document;

@Schema()
export class Designation{
@Prop()
department:string;

@Prop()
designation:string;

@Prop()
expenceLimit:number;

@Prop()
addedBy:string;
}

export const DesignationSchema =SchemaFactory.createForClass(Designation);