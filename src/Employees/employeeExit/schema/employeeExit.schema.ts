import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type EmployeeExitDocument = EmployeeExit & Document;

@Schema()
export class EmployeeExit {

    @Prop()
    employee: string;

    @Prop()
    exitType: string;

    @Prop()
    exitDate: string;

    @Prop()
    exitInterview: string;

    @Prop()
    inactivateAccount: string;

    @Prop([String])
    exitChecklist: string[];

    @Prop()
    addedBy: string;

    @Prop()
    description: string;

}

export const EmployeeExitSchema = SchemaFactory.createForClass(EmployeeExit);