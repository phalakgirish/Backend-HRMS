import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProfilePictureDocument = ProfilePicture & Document;

@Schema()
export class ProfilePicture {

    @Prop({ type: Types.ObjectId, ref: 'Employee' })
    employeeId: Types.ObjectId;

    @Prop()
    profileUrl?: string;
}

export const ProfilePictureSchema = SchemaFactory.createForClass(ProfilePicture);
