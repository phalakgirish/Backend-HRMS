import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OrgpolicyDocument = Orgpolicy & Document;

@Schema()
export class Orgpolicy{
@Prop()
company:string;

@Prop({
    set: (value: string) =>
      value
        ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        : value,
  })
title:string;

@Prop()
createdAt:number;

@Prop()
addedBy:string;

@Prop()
description:string;
}

export const OrgpolicySchema =SchemaFactory.createForClass(Orgpolicy);