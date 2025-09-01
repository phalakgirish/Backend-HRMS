import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeBankaccount } from './schema/employee-bankaccount.schema';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeBankaccountService {
    constructor(
        @InjectModel(EmployeeBankaccount.name)
        private employeeBankAccountModel:mongoose.Model<EmployeeBankaccount>,
    )
    {}

    async findAll():Promise<EmployeeBankaccount[]>{
            
        const bankAccountDts= await this.employeeBankAccountModel.find()
        .exec();
        if(!bankAccountDts)
        {
            throw new NotFoundException('Bank Account not found')
        }
                      
        return bankAccountDts;
    }

    async findAllByEmpId(emp_id:any):Promise<EmployeeBankaccount[]>{
        
        const bankAccountDts= await this.employeeBankAccountModel.find({employee_id:new ObjectId(emp_id)})
        .exec();
        if(!bankAccountDts)
        {
            throw new NotFoundException('Employee Document not found')
        }
                  
        return bankAccountDts;
    }

    async create(accountDts:any):Promise<any>{
        const bankAccountDts=await this.employeeBankAccountModel.create(accountDts);

        return bankAccountDts.save();
    }

    async findById(acc_id:any):Promise<EmployeeBankaccount>{
        
        const bankAccountDts= await this.employeeBankAccountModel.findOne({_id:new ObjectId(acc_id)})
        .exec();
        if(!bankAccountDts)
        {
            throw new NotFoundException('Bank Account not found')
        }
                  
        return bankAccountDts;
    }

    async updateById(acc_id:any,accountDts:any):Promise<any>{

        var account_details:any = await this.employeeBankAccountModel.findOne({_id:new ObjectId(acc_id)})

        if(accountDts.account_bank_doc == null || accountDts.account_bank_doc == undefined)
        {
            accountDts = {...accountDts,account_bank_doc:account_details.account_bank_doc}
        }
    
        return await this.employeeBankAccountModel.findByIdAndUpdate(acc_id,accountDts,{
            new:true,
            runValidators:true
        })           

    }

    async deleteById(acc_id:any):Promise<any>{
    
        return await this.employeeBankAccountModel.deleteOne({_id:new ObjectId(acc_id)})           

    }
}
