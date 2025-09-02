import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
@Schema()
export class EmployeeBankaccount {
    @Prop({ type: Types.ObjectId, ref: 'Employee' })
    employeeId: Types.ObjectId;

    @Prop()
    account_title: String;

    @Prop()
    account_number: String;

    @Prop()
    account_bank_name: String;

    @Prop()
    aacount_bank_code: String;

    @Prop()
    account_bank_branch: String;

    @Prop()
    account_bank_doc: String;

    // @Prop({ type: Types.ObjectId, ref: 'Employee', default:null})
    // employee_id:Types.ObjectId

}

export const Employeebankaccountschema = SchemaFactory.createForClass(EmployeeBankaccount)
