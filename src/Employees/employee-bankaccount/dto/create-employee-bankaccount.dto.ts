import {Types  } from "mongoose";

export class CreateEmployeeBankAccountDto {
    readonly account_title:String;
    readonly account_number:String;
    readonly account_bank_name:Date;
    readonly aacount_bank_code:String;
    readonly account_bank_branch:String;
    readonly account_bank_doc:String;
    readonly is_sendnotification_doe:String;
        readonly employeeId:Types.ObjectId

}
