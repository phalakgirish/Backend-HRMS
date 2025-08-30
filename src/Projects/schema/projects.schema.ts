import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProjectsDocument = Projects & Document;

@Schema()
export class Projects {

  @Prop({
    type: String,
    set: (value: string) =>
      value
        ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        : value,
  }) projectSummary: string;

  @Prop({ type: [String], default: [] })
  projectManager: string[];

  @Prop({ required: true })
  startDate: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ default: 0 })
  progress: number;

  @Prop({ type: [String], default: [] })
  assignedUsers: string[];

  @Prop()
  priority: string;

@Prop({
    type: String,
    set: (value: string) =>
      value
        ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        : value,
  })
  title: string;

@Prop({
    type: String,
    set: (value: string) =>
      value
        ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        : value,
  })
  clientName: string;

  @Prop()
  company: string;

  @Prop()
  remarks: string;

  @Prop()
  status: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);