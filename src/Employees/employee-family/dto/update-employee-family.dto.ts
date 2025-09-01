import { Types } from "mongoose";

export class UpdateEmployeeFamilyDto {
    readonly family_relation:String;
    readonly family_name:String;
    readonly family_primary_contact:Boolean;
    readonly family_dependent_contact:Boolean;
    readonly family_email_work:String;
    readonly family_email_personal:String;
    readonly family_address:String;
    readonly family_mobile:String;
    readonly family_phone_work:String;
    readonly family_city:String;
    readonly family_state:String;
    readonly family_pincode:String;
    readonly family_country:String;
    readonly family_dob:Date;
    readonly employee_id:Types.ObjectId;
}
