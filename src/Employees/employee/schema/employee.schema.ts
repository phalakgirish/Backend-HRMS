import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {

    @Prop({ type: String,unique:true })
    id: string;

    @Prop({
        type: String,
        set: (value: string) =>
            value
                ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                : value,
    })
    firstName: string;

    @Prop({
        type: String,
        set: (value: string) =>
            value
                ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                : value,
    })
    lastName: string;

    @Prop()
    company: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    designation: string;

    @Prop()
    role: string;

    @Prop()
    locationName: string;

    @Prop()
    employeeCtc: string;

    @Prop()
    monthlyCtc: string;

    @Prop()
    status: string;

    @Prop()
    department: string;

    @Prop()
    dateofBirth: string;

    @Prop()
    joiningDate: string;

    @Prop()
    gender: string;

    @Prop()
    maritalStatus: string;

    @Prop()
    contactNumber: string;

    @Prop()
    employeeCategory: string;

    @Prop()
    reportingTo: string;

    @Prop()
    probationDate: string;

    @Prop()
    confirmationDate: string;

    @Prop()
    bloodGroup: string;

    @Prop()
    religion: string;

    @Prop()
    cast: string;

    @Prop()
    address: string;

    @Prop()
    grade: string;

    @Prop()
    password: string;

    @Prop()
    confirmPassword: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);