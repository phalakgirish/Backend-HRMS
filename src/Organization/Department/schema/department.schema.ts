import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
  departmentName: string;

  @Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
  company: string;

  @Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
  location: string;

    @Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
  departmentHead: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
