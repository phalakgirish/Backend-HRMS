import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type PayrollDocument = Payroll & Document;

@Schema()
export class Payroll {
    static toObject(): Payroll | PromiseLike<Payroll> {
        throw new Error('Method not implemented.');
    }
     @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
    empId: string;
    
    @Prop()
    tds: string;

    @Prop()
    advance: string;

    @Prop()
    arrierAdjustmentPlus: number;

    @Prop()
    arrierAdjustmentMinus: string;

    @Prop()
    bonus: string;

    @Prop()
    groupInsPremium: string

    @Prop()
    incentive: string

    @Prop()
    lwf: string

    @Prop()
    paymentMethod: string

    @Prop()
    comments: string

}

export const PayrollSchema = SchemaFactory.createForClass(Payroll);