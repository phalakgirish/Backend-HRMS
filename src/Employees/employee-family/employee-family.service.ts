import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { EmployeeFamily } from './schema/employee-family.schema';
import { Employee } from 'src/Employees/employee/schema/employee.schema';
import { CreateEmployeeFamilyDto } from './dto/create-employee-family.dto';
import { UpdateEmployeeFamilyDto } from './dto/update-employee-family.dto';

@Injectable()
export class EmployeeFamilyService {
  
    constructor(
        @InjectModel(EmployeeFamily.name)
        private employeeFamilyModel: mongoose.Model<EmployeeFamily>,

        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }


    async findAllByEmpId(employeeId: string) {
       if (Types.ObjectId.isValid(employeeId)) {
            return this.employeeFamilyModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
        } else {
            return this.employeeFamilyModel.find({ employeeId }).exec();
        }
    }


    async create(dto: any): Promise<any> {
        const employee = await this.employeeModel.findOne({_id: dto.employeeId });
        if (!employee) throw new NotFoundException('Employee not found');

        dto.employeeId = employee._id;
        return await this.employeeFamilyModel.create(dto);
    }


     async delete(id: string) {
        const result = await this.employeeFamilyModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException('Family not found');
        return { message: 'Deleted successfully' };
    }




    async update(id: string, updateDto: UpdateEmployeeFamilyDto) {
           const existing = await this.employeeFamilyModel.findById(id);
           if (!existing) throw new NotFoundException('Family not found');
   
           return this.employeeFamilyModel.findByIdAndUpdate(
               id,
               { ...updateDto, employeeId: existing.employeeId },
               { new: true },
           );
       }

}
