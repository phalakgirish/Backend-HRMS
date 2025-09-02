import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeBankaccount } from './schema/employee-bankaccount.schema';
import mongoose, { Types } from 'mongoose';
import { Employee, EmployeeDocument } from '../employee/schema/employee.schema';
import { UpdateEmployeeBankAccountDto } from './dto/update-employee-bankaccount.dto';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
// export class EmployeeBankaccountService {
//     findAll(): EmployeeBankaccount[] | PromiseLike<EmployeeBankaccount[]> {
//         throw new Error('Method not implemented.');
//     }
//     update(id: string, dto: any) {
//         throw new Error('Method not implemented.');
//     }
//     constructor(
//         @InjectModel(EmployeeBankaccount.name)
//         private employeeBankAccountModel:mongoose.Model<EmployeeBankaccount>,
//            @InjectModel(Employee.name)
//                 private employeeModel: mongoose.Model<Employee>,
//     )
//     {}

//     // async findAll():Promise<EmployeeBankaccount[]>{

//     //     const bankAccountDts= await this.employeeBankAccountModel.find()
//     //     .exec();
//     //     if(!bankAccountDts)
//     //     {
//     //         throw new NotFoundException('Bank Account not found')
//     //     }

//     //     return bankAccountDts;
//     // }

//     // async findAllByEmpId(emp_id:any):Promise<EmployeeBankaccount[]>{

//     //     const bankAccountDts= await this.employeeBankAccountModel.find({employee_id:new ObjectId(emp_id)})
//     //     .exec();
//     //     if(!bankAccountDts)
//     //     {
//     //         throw new NotFoundException('Employee Document not found')
//     //     }

//     //     return bankAccountDts;
//     // }

//     // async create(accountDts:any):Promise<any>{
//     //     const bankAccountDts=await this.employeeBankAccountModel.create(accountDts);

//     //     return bankAccountDts.save();
//     // }

//     // async findById(acc_id:any):Promise<EmployeeBankaccount>{

//     //     const bankAccountDts= await this.employeeBankAccountModel.findOne({_id:new ObjectId(acc_id)})
//     //     .exec();
//     //     if(!bankAccountDts)
//     //     {
//     //         throw new NotFoundException('Bank Account not found')
//     //     }

//     //     return bankAccountDts;
//     // }

//     // async updateById(acc_id:any,accountDts:any):Promise<any>{

//     //     var account_details:any = await this.employeeBankAccountModel.findOne({_id:new ObjectId(acc_id)})

//     //     if(accountDts.account_bank_doc == null || accountDts.account_bank_doc == undefined)
//     //     {
//     //         accountDts = {...accountDts,account_bank_doc:account_details.account_bank_doc}
//     //     }

//     //     return await this.employeeBankAccountModel.findByIdAndUpdate(acc_id,accountDts,{
//     //         new:true,
//     //         runValidators:true
//     //     })           

//     // }

//     // async deleteById(acc_id:any):Promise<any>{

//     //     return await this.employeeBankAccountModel.deleteOne({_id:new ObjectId(acc_id)})           

//     // }



//         async findAllByEmpId(employeeId: string) {
//       return this.employeeBankAccountModel.find({ employeeId: new Types.ObjectId(employeeId) });
//     }

//     async create(dto: any) {
//       const employee = await this.employeeModel.findById(dto.employeeId);
//       if (!employee) throw new NotFoundException('Employee not found');

//       dto.employeeId = employee._id;
//       return this.employeeBankAccountModel.create(dto);
//     }

//       async findById(doc_id: any): Promise<EmployeeBankaccount> {
//   const employeeBankAccount = await this.employeeBankAccountModel.findById(doc_id).exec();
//   if (!employeeBankAccount) throw new NotFoundException('Bank account not found');
//   return employeeBankAccount;
// }


//         async updateById(doc_id: any, documentDts: any): Promise<any> {

//             return await this.employeeBankAccountModel.findByIdAndUpdate(doc_id, documentDts, {
//                 new: true,
//                 runValidators: true
//             })

//         }

//         async deleteById(id: string) {
//               const result = await this.employeeBankAccountModel.findByIdAndDelete(id);
//               if (!result) throw new NotFoundException('Qualification not found');
//               return { message: 'Deleted successfully' };
//           }


//         //  async update(id: string, updateDto: UpdateEmployeeBankAccountDto) {
//         //        const existing = await this.employeeBankAccountModel.findById(id);
//         //        if (!existing) throw new NotFoundException('Document not found');

//         //        return this.employeeBankAccountModel.findByIdAndUpdate(
//         //            id,
//         //            { ...updateDto, employeeId: existing.employeeId },
//         //            { new: true },
//         //        );
//         //    }
// }
export class EmployeeBankaccountService {
    findAll(): EmployeeBankaccount[] | PromiseLike<EmployeeBankaccount[]> {
        throw new Error('Method not implemented.');
    }


    constructor(
        @InjectModel(EmployeeBankaccount.name)
        private employeeBankAccountModel: mongoose.Model<EmployeeBankaccount>,
        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }



    async findAllByEmpId(employeeId: string) {
        return this.employeeBankAccountModel.find({ employeeId: new Types.ObjectId(employeeId) });
    }

    async create(dto: any) {
        const employee = await this.employeeModel.findById(dto.employeeId);
        if (!employee) throw new NotFoundException('Employee not found');

        dto.employeeId = employee._id;
        return this.employeeBankAccountModel.create(dto);
    }

   async findById(doc_id: string): Promise<EmployeeBankaccount> {
    const employeeBankAccount = await this.employeeBankAccountModel.findById(doc_id).exec();
    if (!employeeBankAccount) throw new NotFoundException('Bank account not found');
    return employeeBankAccount;
}


    // async updateById(doc_id: any, documentDts: any): Promise<any> {

    //     return await this.employeeBankAccountModel.findByIdAndUpdate(doc_id, documentDts, {
    //         new: true,
    //         runValidators: true
    //     })

    // }

    async deleteById(id: string) {
        const result = await this.employeeBankAccountModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException('Qualification not found');
        return { message: 'Deleted successfully' };
    }


    async update(id: string, updateDto: UpdateEmployeeBankAccountDto) {
        const existing = await this.employeeBankAccountModel.findById(id);
        if (!existing) throw new NotFoundException('Document not found');

        return this.employeeBankAccountModel.findByIdAndUpdate(
            id,
            { ...updateDto, employeeId: existing.employeeId },
            { new: true },
        );
    }
}
