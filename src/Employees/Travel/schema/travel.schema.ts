import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TravelDocument = Travel & Document;

@Schema()
export class Travel {

    @Prop()
    employeeName: string;

    @Prop({
            type: String,
            set: (value: string) =>
                value
                    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    : value,
        })
    purposeOfVisit: string;

    @Prop({
        type: String,
        set: (value: string) =>
            value
                ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                : value,
    })
    placOfVisit: string;

    @Prop()
    startDate: string;

    @Prop()
    endDate: string;

    @Prop()
    travelMode: string;

    @Prop()
    arrangementType: string;

    @Prop()
    expectedTravelBudget: number;

    @Prop()
    actualTravelBudget: number;

    @Prop()
    approvalStatus: string;

    @Prop()
    addedBy: string;

    @Prop()
    description: string;

}

export const TravelSchema = SchemaFactory.createForClass(Travel);