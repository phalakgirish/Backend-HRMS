import { Types } from "mongoose";

export class UpdateEmployeeAssetsDto {
    readonly assets_type_id:Types.ObjectId;
    readonly assets_brand:String;
    readonly assets_model_no:String;
    readonly assets_serial_no:String;
    readonly assets_issued_date:Date;
    readonly assets_cost:String;
    readonly assets_quality:String;
    readonly assets_insurance:String;
    readonly assets_remark:String;
    readonly employee_id:Types.ObjectId;
}
