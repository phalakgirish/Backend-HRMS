import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeLocation } from './schema/employee-location.schema';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeLocationService {
    constructor(
        @InjectModel(EmployeeLocation.name)
        private employeeLocationModel:mongoose.Model<EmployeeLocation>,
    )
    {}

    async findAll():Promise<EmployeeLocation[]>{
            
        const employeeLocationDts= await this.employeeLocationModel.find()
        .exec();
        if(!employeeLocationDts)
        {
            throw new NotFoundException('Employee Location not found')
        }
                      
        return employeeLocationDts;
    }

    async findAllByEmpId(emp_id:any):Promise<EmployeeLocation[]>{
        
        const employeeLocationDts= await this.employeeLocationModel.find({employee_id:new ObjectId(emp_id)})
        .exec();
        if(!employeeLocationDts)
        {
            throw new NotFoundException('Employee Location not found')
        }
                  
        return employeeLocationDts;
    }

    async create(locationDts:any):Promise<EmployeeLocation>{
        const employeeLocationDts=await this.employeeLocationModel.create(locationDts);

        return employeeLocationDts.save();
    }

    async findById(locationId:any):Promise<EmployeeLocation>{
        
        const employeeLocationDts= await this.employeeLocationModel.findOne({_id:new ObjectId(locationId)})
        .exec();
        if(!employeeLocationDts)
        {
            throw new NotFoundException('Employee Location not found')
        }
                  
        return employeeLocationDts;
    }

    async updateById(locationId:any,locationDts:any):Promise<any>{
    
        return await this.employeeLocationModel.findByIdAndUpdate(locationId,locationDts,{
            new:true,
            runValidators:true
        })           

    }

    async deleteById(locationId:any):Promise<any>{
    
        return await this.employeeLocationModel.deleteOne({_id:new ObjectId(locationId)})           

    }
}
