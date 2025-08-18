import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AnnouncementDocument = Announcement & Document;

@Schema()
export class Announcement{
@Prop()
title:string;

@Prop()
publishedFor:string;


@Prop()
startDate:string;

@Prop()
endDate:string;

@Prop()
company:string;

@Prop()
location:string;

@Prop()
publishedBy:string;

@Prop()
summary:string;

@Prop()
description:string;
}

export const AnnouncementSchema =SchemaFactory.createForClass(Announcement);