import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateSettingDto {
  readonly company_name: string;
  readonly company_address: string;
  readonly company_contact_person: string;
  readonly company_contanct_no: string;
  readonly company_email: string;
  readonly company_city: string;
  readonly company_state: string;
  readonly company_country: string;
  readonly company_pincode: string;

  readonly application_name: string;
  readonly default_currency: string;
  readonly dafault_date_format: string;
  readonly default_currency_appfix: string;
  readonly default_currency_pos: string;
  readonly footer_text: string;
  readonly enableCodeigniterFooter: boolean;
  readonly is_year_footer: boolean;

  readonly emp_manage_contact: boolean;
  readonly emp_manage_bank: boolean;
  readonly emp_manage_qualification: boolean;
  readonly emp_manage_work_exp: boolean;
  readonly emp_manage_doc: boolean;
  readonly emp_manage_profile_pic: boolean;
  readonly emp_manage_profile_info: boolean;
  readonly emp_manage_social_info: boolean;

  readonly enable_clock_in_btn: boolean;
  readonly enable_clock_in_out: boolean;

  readonly payslip_pass_format: string;
  readonly enable_payslip_password: boolean;
  readonly payslip_logo: string;

  readonly enable_employee_job: boolean;
  readonly job_app_format: string[];

  readonly job_list_logo: string;
  readonly enable_email_notifi: boolean;

  readonly animation_top_menu?: string;
  readonly animation_modal_dialogs?: string;

  @IsOptional()
  @IsString()
  readonly notification_position?: string;

  @IsOptional()
  @IsBoolean()
  readonly enable_close_btn?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly progress_bar?: boolean;



  readonly file_size: number;
  readonly file_format: string[];
  readonly emp_download_dept_file?: boolean;

}
