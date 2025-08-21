import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilesDocument = File & Document;

// Sub-document schema for individual files
@Schema({ _id: false })
export class UploadedFile {
  @Prop({ required: true })
  fileTitle: string;

  @Prop()
  fileDescription: string;

  @Prop({ required: true })
  fileUrl: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

@Schema()
export class File {
  @Prop()
  fileTitle: string;

  @Prop({ type: [UploadedFile], default: [] })
  files: UploadedFile[];

  @Prop()
  fileDescription:string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const FilesSchema = SchemaFactory.createForClass(File);
