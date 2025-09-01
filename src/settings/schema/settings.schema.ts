import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types  } from "mongoose";

export class Settings {

    @Prop({default:''})
    company_name:String;
    
    @Prop({default:''})
    company_address:String;
    
    @Prop({default:''})
    company_contact_person:String;
    
    @Prop({default:''})
    company_contanct_no:String;
    
    @Prop({default:''})
    company_email:String;
    
    @Prop({default:''})
    company_city:String;
    
    @Prop({default:''})
    company_state:String;
    
    @Prop({default:''})
    company_country:String;
    
    @Prop({default:''})
    company_pincode:String;

    @Prop({default:''})
    application_name:String;

    @Prop({default:''})
    default_currency:String;

    @Prop({default:''})
    dafault_date_format:String;

    @Prop({default:''})
    default_currency_appfix:String;

    @Prop({default:''})
    default_currency_pos:String;

    @Prop({default:''})
    footer_text:String;

    @Prop({default:null})
    is_year_footer:Boolean;

    @Prop({default:null})
    emp_manage_contact:Boolean;

    @Prop({default:null})
    emp_manage_bank:Boolean;

    @Prop({default:null})
    emp_manage_qualification:Boolean;

    @Prop({default:null})
    emp_manage_work_exp:Boolean;

    @Prop({default:null})
    emp_manage_doc:Boolean;

    @Prop({default:null})
    emp_manage_profile_pic:Boolean;

    @Prop({default:null})
    emp_manage_profile_info:Boolean;

    @Prop({default:null})
    emp_manage_social_info:Boolean;

    @Prop({default:null})
    enable_clock_in_btn:Boolean;

    @Prop({default:null})
    enable_clock_in_out:Boolean;

    @Prop({default:''})
    payslip_pass_format:String;

    @Prop({default:null})
    enable_payslip_password:Boolean;

    @Prop({default:null})
    payslip_logo:String;

    @Prop({default:null})
    enable_employee_job:Boolean;

    @Prop({default:null})
    job_app_format:Array<String>;

    @Prop({default:null})
    job_list_logo:String;

    @Prop({default:null})
    enable_email_notifi:Boolean;

    @Prop({default:null})
    file_size:Number;

    @Prop({default:null})
    file_format:Array<String>;

}

export const Settingschema = SchemaFactory.createForClass(Settings)
