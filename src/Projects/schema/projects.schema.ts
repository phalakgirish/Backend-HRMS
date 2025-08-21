import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProjectsDocument = Projects & Document;

@Schema()
export class Projects {

    @Prop({ required: true })
  projectSummary: string;

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

  @Prop()
  title: string;

  @Prop()
  clientName: string;

  @Prop()
  company: string;

  @Prop()
  remarks: string;

  @Prop()
  status: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);