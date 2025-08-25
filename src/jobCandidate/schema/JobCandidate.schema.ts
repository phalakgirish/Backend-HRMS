import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type JobCandidateDocument = JobCandidate & Document;

@Schema({ timestamps: true })
export class JobCandidate {
  @Prop({ required: true })
  jobTitle: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  applyDate: string;

}

export const JobCandidateSchema = SchemaFactory.createForClass(JobCandidate);
