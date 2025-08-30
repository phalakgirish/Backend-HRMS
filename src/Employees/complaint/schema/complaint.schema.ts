import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ComplaintDocument = Complaint & Document;

@Schema()
export class Complaint {

    @Prop()
    complaintFrom: string;

    @Prop()
    complaintAgainst: string[];

     @Prop({ type: String })
        id: string;
    
        @Prop({
            type: String,
            set: (value: string) =>
                value
                    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    : value,
        })@Prop()
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