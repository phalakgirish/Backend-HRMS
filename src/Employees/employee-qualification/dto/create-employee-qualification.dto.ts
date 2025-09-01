import {Types  } from "mongoose";

export class CreateEmployeeQualificationDto {
    readonly employee_school_university?:String;
    readonly employee_education_level?:String;
    readonly emplyee_passout_year?:String;
    readonly education_desc?:String;
    // readonly employee_id:Types.ObjectId;
    employeeId:string;
    
}
