import { Types } from "mongoose";

export class CreateEmployeeLocationDto {
    readonly location_from_date:Date;
    readonly employeeId:Types.ObjectId;
    readonly location_to_date:Date;
    readonly location_id:Types.ObjectId;
}
