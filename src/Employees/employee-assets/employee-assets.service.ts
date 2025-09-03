import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeAssets } from './schema/employee-assets.schema';
import mongoose, { Types } from 'mongoose';
import { CreateEmployeeAssetsDto } from './dto/create-employee-assets.dto';
import { Employee } from 'src/Employees/employee/schema/employee.schema';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeAssetsService {
   
    constructor(
        @InjectModel(EmployeeAssets.name)
        private employeeAssetsModel:mongoose.Model<EmployeeAssets>,
          @InjectModel(Employee.name)
                        private employeeModel: mongoose.Model<Employee>,
    )
    {}

    // async findAll():Promise<EmployeeAssets[]>{
            
    //     const employeeAssetsDts= await this.employeeAssetsModel.find()
    //     .exec();
    //     if(!employeeAssetsDts)
    //     {
    //         throw new NotFoundException('Employee Assets not found')
    //     }
                      
    //     return employeeAssetsDts;
    // }

    // async findAllByEmpId(emp_id:any):Promise<EmployeeAssets[]>{
        
    //     const employeeAssetsDts= await this.employeeAssetsModel.find({employee_id:new ObjectId(emp_id)})
    //     .exec();
    //     if(!employeeAssetsDts)
    //     {
    //         throw new NotFoundException('Employee Assets not found')
    //     }
                  
    //     return employeeAssetsDts;
    // }

    // async create(assetsDts:any):Promise<EmployeeAssets>{
    //     const employeeAssetsDts=await this.employeeAssetsModel.create(assetsDts);

    //     return employeeAssetsDts.save();
    // }

    // async findById(assets_id:any):Promise<EmployeeAssets>{
        
    //     const employeeAssetsDts= await this.employeeAssetsModel.findOne({_id:new ObjectId(assets_id)})
    //     .exec();
    //     if(!employeeAssetsDts)
    //     {
    //         throw new NotFoundException('Employee Assets not found')
    //     }
                  
    //     return employeeAssetsDts;
    // }

    // async updateById(assets_id:any,assetsDts:any):Promise<any>{
    
    //     return await this.employeeAssetsModel.findByIdAndUpdate(assets_id,assetsDts,{
    //         new:true,
    //         runValidators:true
    //     })           

    // }

    // async deleteById(assets_id:any):Promise<any>{
    
    //     return await this.employeeAssetsModel.deleteOne({_id:new ObjectId(assets_id)})           

    // }

      async findAll(): Promise<EmployeeAssets[]> {
       
               const employeeAssetsDts = await this.employeeAssetsModel.find()
                   .exec();
               if (!employeeAssetsDts) {
                   throw new NotFoundException('Employee Assets not found')
               }
       
               return employeeAssetsDts;
           }
       
           async findAllByEmpId(employeeId: string) {
               if (Types.ObjectId.isValid(employeeId)) {
                   return this.employeeAssetsModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
               } else {
                   return this.employeeAssetsModel.find({ employeeId }).exec();
               }
           }
       
           async create(dto: any): Promise<EmployeeAssets> {
               const employee = await this.employeeModel.findById(dto.employeeId);
               if (!employee) throw new NotFoundException('Employee not found');
       
               dto.employeeId = employee._id;
               const newAssets = await this.employeeAssetsModel.create(dto);
       
               const savedAssets = await this.employeeAssetsModel
                   .findById(newAssets._id)
                   .populate('employeeId')
                   .exec();
       
               if (!savedAssets) {
                   throw new NotFoundException('Assets not found after creation');
               }
       
               return savedAssets;
           }
       
           async findById(Assets_id: any): Promise<EmployeeAssets> {
       
               const employeeAssetsDts = await this.employeeAssetsModel.findOne({ _id: new ObjectId(Assets_id) })
                   .exec();
               if (!employeeAssetsDts) {
                   throw new NotFoundException('Assets not found')
               }
       
               return employeeAssetsDts;
           }
       
           async delete(id: string) {
               const result = await this.employeeAssetsModel.findByIdAndDelete(id);
               if (!result) throw new NotFoundException('Qualification not found');
               return { message: 'Deleted successfully' };
           }
       
       
           async update(id: string, dto: Partial<CreateEmployeeAssetsDto>) {
               if ('_id' in dto) {
                   delete (dto as any)._id;
               }
               const existing = await this.employeeAssetsModel.findById(id);
               if (!existing) throw new NotFoundException('Assets not found');
       
               return this.employeeAssetsModel.findByIdAndUpdate(
                   id,
                   { ...dto, employeeId: existing.employeeId },
                   { new: true },
               );
           }
}
