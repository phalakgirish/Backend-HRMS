import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SupportRequestDocument = SupportRequest & Document;

@Schema()
export class SupportRequest {

@Prop({
        type: String,
        set: (value: string) =>
            value
                ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                : value,
    })    subject: string;


    @Prop({ required: true })
    employee: string;

    @Prop({ required: true })
    priority: string;

    @Prop()
    remarks: string;

    @Prop()
    ticketCode: string;

    @Prop()
    assignedTo: string;

    @Prop()
    status: string;

    @Prop({ required: true })
    date: string;

    @Prop()
    description: string;

    @Prop()
    ticketNotes: string;
}

export const SupportRequestSchema = SchemaFactory.createForClass(SupportRequest);