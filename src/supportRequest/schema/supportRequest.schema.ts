import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SupportRequestDocument = SupportRequest & Document;

@Schema()
export class SupportRequest {

    @Prop({ required: true })
    subject: string;


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