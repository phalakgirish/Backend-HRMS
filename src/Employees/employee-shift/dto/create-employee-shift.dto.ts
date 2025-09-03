import { Types } from "mongoose";

export class CreateEmployeeShiftDto {
    readonly shift_from_date:Date;
    readonly shift_to_date:Date;
    readonly shift_id:Types.ObjectId;
    // readonly employee_id:Types.ObjectId;
    readonly employeeId:Types.ObjectId;
}
