import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Settings extends Document {
  @Prop({ default: '' }) company_name: string;
  @Prop({ default: '' }) company_address: string;
  @Prop({ default: '' }) company_contact_person: string;
  @Prop({ default: '' }) company_contanct_no: string;
  @Prop({ default: '' }) company_email: string;
  @Prop({ default: '' }) company_city: string;
  @Prop({ default: '' }) company_state: string;
  @Prop({ default: '' }) company_country: string;
  @Prop({ default: '' }) company_pincode: string;

  @Prop({ default: '' }) application_name: string;
  @Prop({ default: '' }) default_currency: string;
  @Prop({ default: '' }) dafault_date_format: string;
  @Prop({ default: '' }) default_currency_appfix: string;
  @Prop({ default: '' }) default_currency_pos: string;
  @Prop({ default: '' }) footer_text: string;
  @Prop({ default: false }) is_year_footer: boolean;
  @Prop({ default: false }) enableCodeigniterFooter: boolean;

  @Prop({ default: false }) emp_manage_contact: boolean;
  @Prop({ default: false }) emp_manage_bank: boolean;
  @Prop({ default: false }) emp_manage_qualification: boolean;
  @Prop({ default: false }) emp_manage_work_exp: boolean;
  @Prop({ default: false }) emp_manage_doc: boolean;
  @Prop({ default: false }) emp_manage_profile_pic: boolean;
  @Prop({ default: false }) emp_manage_profile_info: boolean;
  @Prop({ default: false }) emp_manage_social_info: boolean;
  @Prop({ default: false }) enable_clock_in_btn: boolean;
  @Prop({ default: false }) enable_clock_in_out: boolean;

  @Prop({ default: '' }) payslip_pass_format: string;
  @Prop({ default: false }) enable_payslip_password: boolean;
  @Prop({ default: null }) payslip_logo: string;

  @Prop({ default: false }) enable_employee_job: boolean;
  @Prop({ type: [String], default: [] }) job_app_format: string[];

  @Prop({ default: null }) job_list_logo: string;
  @Prop({ default: false }) enable_email_notifi: boolean;

  @Prop({ default: 0 }) file_size: number;
  @Prop({ type: [String], default: [] }) file_format: string[];
}

export const SettingsSchema = SchemaFactory.createForClass(Settings);
