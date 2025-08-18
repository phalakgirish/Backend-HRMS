import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UpdateAttendanceDocument = UpdateAttendance & Document;

@Schema()
export class UpdateAttendance{

@Prop()
date:string;

@Prop()
employee:string;
}
export const UpdateAttendanceSchema =SchemaFactory.createForClass(UpdateAttendance);