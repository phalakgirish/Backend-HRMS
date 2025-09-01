import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeDocument } from './schema/employee-document.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeDocumentService {
    constructor(
        @InjectModel(EmployeeDocument.name)
        private employeeDocumentModel:mongoose.Model<EmployeeDocument>,
    )
    {}

    async findAll():Promise<EmployeeDocument[]>{
            
        const employeeDocumentDts= await this.employeeDocumentModel.find()
        .exec();
        if(!employeeDocumentDts)
        {
            throw new NotFoundException('Employee Document not found')
        }
                      
        return employeeDocumentDts;
    }

    async findAllByEmpId(emp_id:any):Promise<EmployeeDocument[]>{
        
        const employeeDocumentDts= await this.employeeDocumentModel.find({employee_id:new ObjectId(emp_id)})
        .exec();
        if(!employeeDocumentDts)
        {
            throw new NotFoundException('Employee Document not found')
        }
                  
        return employeeDocumentDts;
    }

    async create(documentDts:any):Promise<any>{
        const employeeDocumentDts=await this.employeeDocumentModel.create(documentDts);

        return employeeDocumentDts.save();
    }

    async findById(doc_id:any):Promise<EmployeeDocument>{
        
        const employeeDocumentDts= await this.employeeDocumentModel.findOne({_id:new ObjectId(doc_id)})
        .exec();
        if(!employeeDocumentDts)
        {
            throw new NotFoundException('Document not found')
        }
                  
        return employeeDocumentDts;
    }

    async updateById(doc_id:any,documentDts:any):Promise<any>{
    
        return await this.employeeDocumentModel.findByIdAndUpdate(doc_id,documentDts,{
            new:true,
            runValidators:true
        })           

    }

    async deleteById(doc_id:any):Promise<any>{
    
        return await this.employeeDocumentModel.deleteOne({_id:new ObjectId(doc_id)})           

    }
}
