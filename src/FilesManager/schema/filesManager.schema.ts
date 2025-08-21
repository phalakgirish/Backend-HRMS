import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FilesManagerDocument = FilesManager & Document;

@Schema({ timestamps: true })
export class FilesManager {

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  file: string;

  @Prop({ required: true })
  size: string; 

  @Prop({ required: true })
  extension: string; 

  @Prop({ required: true })
  uploadedDate: string; 
  filename: any;

  @Prop({ required: true })
  originalName: string;  // original filename

}

export const FilesManagerSchema = SchemaFactory.createForClass(FilesManager);
