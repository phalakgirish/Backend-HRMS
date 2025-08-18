import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ComplaintDocument = Complaint & Document;

@Schema()
export class Complaint {

    @Prop()
    complaintFrom: string;

    @Prop()
    complaintAgainst: string[];

    @Prop()
    complaintTitle: string;

    @Prop()
    complaintDate: string;

    @Prop()
    approvalStatus: string;

    @Prop()
    description:string;

     @Prop()
    comment:string;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);