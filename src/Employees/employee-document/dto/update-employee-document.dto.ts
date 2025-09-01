import { Types } from "mongoose";

export class UpdateEmployeeDocumentDto {
    readonly document_type_id:Types.ObjectId;
    readonly document_title:String;
    readonly document_doe:Date;
    readonly document_notification_email:String;
    readonly document_desc:String;
    readonly document_file:String;
    readonly is_sendnotification_doe:Boolean;
    readonly employee_id:Types.ObjectId;
}
