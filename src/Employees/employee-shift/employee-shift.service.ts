import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { EmployeeShift } from './schema/employee-shift.schema';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeShiftService {
    constructor(
        @InjectModel(EmployeeShift.name)
        private employeeShiftModel:mongoose.Model<EmployeeShift>,
    )
    {}

    async findAll():Promise<EmployeeShift[]>{
            
        const employeeShiftDts= await this.employeeShiftModel.find()
        .exec();
        if(!employeeShiftDts)
        {
            throw new NotFoundException('Employee Shift not found')
        }
                      
        return employeeShiftDts;
    }

    async findAllByEmpId(emp_id:any):Promise<EmployeeShift[]>{
        
        const employeeShiftDts= await this.employeeShiftModel.find({employee_id:new ObjectId(emp_id)})
        .exec();
        if(!employeeShiftDts)
        {
            throw new NotFoundException('Employee Shift not found')
        }
                  
        return employeeShiftDts;
    }

    async create(shiftDts:any):Promise<EmployeeShift>{
        const employeeShiftDts=await this.employeeShiftModel.create(shiftDts);

        return employeeShiftDts.save();
    }

    async findById(shift_id:any):Promise<EmployeeShift>{
        
        const employeeShiftDts= await this.employeeShiftModel.findOne({_id:new ObjectId(shift_id)})
        .exec();
        if(!employeeShiftDts)
        {
            throw new NotFoundException('Shift not found')
        }
                  
        return employeeShiftDts;
    }

    async updateById(shift_id:any,shiftDts:any):Promise<any>{
    
        return await this.employeeShiftModel.findByIdAndUpdate(shift_id,shiftDts,{
            new:true,
            runValidators:true
        })           

    }

    async deleteById(shift_id:any):Promise<any>{
    
        return await this.employeeShiftModel.deleteOne({_id:new ObjectId(shift_id)})           

    }
}
