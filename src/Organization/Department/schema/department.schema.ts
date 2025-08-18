import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop()
  departmentName: string;

  @Prop()
  company: string;

  @Prop()
  location: string;

    @Prop()
  departmentHead: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
