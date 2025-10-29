import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeBankaccount } from './schema/employee-bankaccount.schema';
import mongoose, { Types } from 'mongoose';
import { Employee, EmployeeDocument } from '../employee/schema/employee.schema';
import { UpdateEmployeeBankAccountDto } from './dto/update-employee-bankaccount.dto';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()

export class EmployeeBankaccountService {
//     async findByEmployeeId(empCode: string) {
//   const employee = await this.employeeModel.findOne({ id: empCode }); 
//   if (!employee) throw new NotFoundException(`Employee not found with ID ${empCode}`);

//   const bank = await this.employeeBankAccountModel.findOne({ employeeId: employee._id });
//   if (!bank) throw new NotFoundException(`Bank details not found for employee ${empCode}`);

//   return bank;
// }

async findByEmployeeId(empCode: string) {
  // 1️⃣ Find employee by its 'id' field (like MIJH890)
  const employee = await this.employeeModel.findOne({ id: empCode });
  if (!employee) throw new NotFoundException(`Employee not found with ID ${empCode}`);

  // 2️⃣ Find bank details using employee._id
  const bank = await this.employeeBankAccountModel.findOne({ employeeId: employee._id });
  if (!bank) throw new NotFoundException(`Bank details not found for employee ${empCode}`);

  // 3️⃣ Return the bank details as array for frontend consistency
  return [bank];
}



    async findAll() {
        return this.employeeBankAccountModel.find().exec();
    }

    constructor(
        @InjectModel(EmployeeBankaccount.name)
        private employeeBankAccountModel: mongoose.Model<EmployeeBankaccount>,
        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }



    async findAllByEmpId(employeeId: string) {
return this.employeeBankAccountModel.findOne({ employeeId: employeeId });
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
