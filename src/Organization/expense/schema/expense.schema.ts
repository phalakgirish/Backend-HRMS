import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
    @Prop()
    expense: string;

    @Prop()
    employee: string;

    @Prop()
    purchasedDate: string;

    @Prop()
    amount: number;

    @Prop()
    status: string;

    @Prop()
    description: string;

    @Prop()
    billCopy: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);