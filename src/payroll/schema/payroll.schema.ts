import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type PayrollDocument = Payroll & Document;

@Schema()
export class Payroll {
  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  empId: string;

  @Prop() tds: number;
  @Prop() advance: number;
  @Prop() arrierAdjustmentPlus: number;
  @Prop() arrierAdjustmentMinus: number;
  @Prop() bonus: number;
  @Prop() groupInsPremium: number;
  @Prop() incentive: number;
  @Prop() lwf: number;
  @Prop() paymentMethod: string;
  @Prop() comments: string;
  @Prop() paymentStatus: string;
  @Prop() employeeCtc?: number;
  @Prop() pt?: number;
  @Prop() basic: number;
  @Prop() hra: number;
  @Prop() lta: number;
  @Prop() allowance: number;
  @Prop() pfEmployer: number;
  @Prop() pfEmployee: number;
  @Prop() medical: number;
  @Prop() esc: number;
  @Prop() gratuity: number;
  @Prop() executive: number;
  @Prop() grossSalary: number;
  @Prop() totalDeductions: number;
  @Prop() netSalary: number;
  @Prop() lop: number;
  @Prop() paidDate: Date;
  @Prop() month: string;
  @Prop() year: number;
  @Prop() paymentMonth: string;
}

export const PayrollSchema = SchemaFactory.createForClass(Payroll);
