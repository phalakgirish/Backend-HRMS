import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AnnouncementDocument = Announcement & Document;

const capitalizeFirstLetter = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

@Schema()
export class Announcement{
@Prop({
  type: String,
  set: (value: string) =>
    value
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value,
})title:string;

 @Prop({ set: capitalizeFirstLetter })
publishedFor:string;


 @Prop({ set: capitalizeFirstLetter })
startDate:string;

 @Prop({ set: capitalizeFirstLetter })
endDate:string;

 @Prop({ set: capitalizeFirstLetter })
company:string;

 @Prop({ set: capitalizeFirstLetter })
location:string;

 @Prop({ set: capitalizeFirstLetter })
publishedBy:string;

@Prop({
  type: String,
  set: (value: string) =>
    value
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value,
})summary:string;

@Prop({
  type: String,
  set: (value: string) =>
    value
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value,
})description:string;
}

export const AnnouncementSchema =SchemaFactory.createForClass(Announcement);