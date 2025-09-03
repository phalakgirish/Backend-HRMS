import {Types  } from "mongoose";

export class CreateProfilePicttureDto {
    profileUrl:string;
    readonly employeeId:Types.ObjectId;
    // employeeId:string;
    
}
