import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeAssets } from './schema/employee-assets.schema';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeAssetsService {
    constructor(
        @InjectModel(EmployeeAssets.name)
        private employeeAssetsModel:mongoose.Model<EmployeeAssets>,
    )
    {}

    async findAll():Promise<EmployeeAssets[]>{
            
        const employeeAssetsDts= await this.employeeAssetsModel.find()
        .exec();
        if(!employeeAssetsDts)
        {
            throw new NotFoundException('Employee Assets not found')
        }
                      
        return employeeAssetsDts;
    }

    async findAllByEmpId(emp_id:any):Promise<EmployeeAssets[]>{
        
        const employeeAssetsDts= await this.employeeAssetsModel.find({employee_id:new ObjectId(emp_id)})
        .exec();
        if(!employeeAssetsDts)
        {
            throw new NotFoundException('Employee Assets not found')
        }
                  
        return employeeAssetsDts;
    }

    async create(assetsDts:any):Promise<EmployeeAssets>{
        const employeeAssetsDts=await this.employeeAssetsModel.create(assetsDts);

        return employeeAssetsDts.save();
    }

    async findById(assets_id:any):Promise<EmployeeAssets>{
        
        const employeeAssetsDts= await this.employeeAssetsModel.findOne({_id:new ObjectId(assets_id)})
        .exec();
        if(!employeeAssetsDts)
        {
            throw new NotFoundException('Employee Assets not found')
        }
                  
        return employeeAssetsDts;
    }

    async updateById(assets_id:any,assetsDts:any):Promise<any>{
    
        return await this.employeeAssetsModel.findByIdAndUpdate(assets_id,assetsDts,{
            new:true,
            runValidators:true
        })           

    }

    async deleteById(assets_id:any):Promise<any>{
    
        return await this.employeeAssetsModel.deleteOne({_id:new ObjectId(assets_id)})           

    }
}
