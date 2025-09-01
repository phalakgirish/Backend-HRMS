import { Types } from "mongoose";

export class UpdateAttendanceDto {
    readonly employee_id:Types.ObjectId;
    readonly attendance_date:Date;
    readonly attendance_clock_in:String;
    readonly attendacne_clock_out:String;
    readonly attencance_late:String;
    readonly attendance_early_leaving:String;
    readonly attendance_overtime:String;
    readonly attendance_total_work:String;
    readonly attendance_total_rest:String;
    readonly attendance_status:String;
}
