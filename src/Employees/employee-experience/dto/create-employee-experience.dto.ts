import { Types } from "mongoose";

export class CreateEmployeeExperienceDto {
    readonly company_name:String;
    readonly designation:String;
    readonly from_date:Date;
    readonly to_date:Date;
    readonly desc:String;
    readonly employeeId:Types.ObjectId
    // employeeId:string;
}
