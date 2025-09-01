import { Types } from "mongoose";

export class UpdateEmployeeExperienceDto {
    readonly company_name:String;
    readonly designation:String;
    readonly from_date:Date;
    readonly to_date:Date;
    readonly desc:String;
    readonly emaployee_id:Types.ObjectId
}
