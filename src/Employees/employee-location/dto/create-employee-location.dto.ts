import { Types } from "mongoose";

export class CreateEmployeeLocationDto {
    readonly location_from_date:Date;
    readonly location_to_date:Date;
    readonly location_id:Types.ObjectId;
    readonly employee_id:Types.ObjectId;
}
