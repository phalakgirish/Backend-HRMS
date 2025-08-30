import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type WarningsDocument = Warnings & Document;

@Schema()
export class Warnings{

@Prop()
employee:string;

@Prop()
warningDate:string;

 @Prop({
        type: String,
        set: (value: string) =>
            value
                ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                : value,
    })
subject:string;

@Prop()
warningType:string;

@Prop()
approvalStatus:string;

@Prop()
warningBy:string;

@Prop()
description:string;


@Prop()
comment:string;
}

export const WarningsSchema =SchemaFactory.createForClass(Warnings);