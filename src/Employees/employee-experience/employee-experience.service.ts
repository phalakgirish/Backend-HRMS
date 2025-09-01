import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeExperience } from './schema/employee-experience.schema';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeExperienceService {
    constructor(
        @InjectModel(EmployeeExperience.name)
        private employeeExperienceModel:mongoose.Model<EmployeeExperience>,
    )
    {}

    async findAll():Promise<EmployeeExperience[]>{
                
        const employeeExperienceDts= await this.employeeExperienceModel.find()
        .exec();
        if(!employeeExperienceDts)
        {
            throw new NotFoundException('Employee Experience not found')
        }
                          
        return employeeExperienceDts;
    }

    async findAllByEmpId(emp_id:any):Promise<EmployeeExperience[]>{
        
        const employeeExperienceDts= await this.employeeExperienceModel.find({employee_id:new ObjectId(emp_id)})
        .exec();
        if(!employeeExperienceDts)
        {
            throw new NotFoundException('Employee Experience not found')
        }
                  
        return employeeExperienceDts;
    }

    async create(experienceDts:any):Promise<any>{
        const employeeExperienceDts=await this.employeeExperienceModel.create(experienceDts);

        return employeeExperienceDts.save();
    }

    async findById(exp_id:any):Promise<EmployeeExperience>{
        
        const employeeExperienceDts= await this.employeeExperienceModel.findOne({_id:new ObjectId(exp_id)})
        .exec();
        if(!employeeExperienceDts)
        {
            throw new NotFoundException('Experience not found')
        }
                  
        return employeeExperienceDts;
    }

    async updateById(exp_id:any,experienceDts:any):Promise<any>{
    
        return await this.employeeExperienceModel.findByIdAndUpdate(exp_id,experienceDts,{
            new:true,
            runValidators:true
        })           

    }

    async deleteById(exp_id:any):Promise<any>{
    
        return await this.employeeExperienceModel.deleteOne({_id:new ObjectId(exp_id)})           

    }
}
