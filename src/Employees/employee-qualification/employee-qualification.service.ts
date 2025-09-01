import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { EmployeeQualification } from './schema/employee-qualification.schema';
import { CreateEmployeeQualificationDto } from './dto/create-employee-qualification.dto';
import { Employee } from 'src/Employees/employee/schema/employee.schema';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeQualificationService {
   
    // delete(id: string) {
    //     throw new Error('Method not implemented.');
    // }
    // findAll(): EmployeeQualification[] | PromiseLike<EmployeeQualification[]> {
    //     throw new Error('Method not implemented.');
    // }
    // findAllByEmpId(emp_id: any): EmployeeQualification[] | PromiseLike<EmployeeQualification[]> {
    //     throw new Error('Method not implemented.');
    // }
    constructor(
        @InjectModel(EmployeeQualification.name)
        private employeeQualificationModel: mongoose.Model<EmployeeQualification>,

        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }


    async findAllByemployeeId(employeeId: string) {
        if (Types.ObjectId.isValid(employeeId)) {
            return this.employeeQualificationModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
        } else {
            return this.employeeQualificationModel.find({ employeeId }).exec();
        }
    }


     async create(dto: any): Promise<any> {
        const employee = await this.employeeModel.findOne({ id: dto.employeeId });
        if (!employee) throw new NotFoundException('Employee not found');

        dto.employeeId = employee.id;

        return await this.employeeQualificationModel.create(dto);
    }




    //    async delete(id: string) {
    //   const result = await this.employeeQualificationModel.findByIdAndDelete(id);
    //   if (!result) throw new NotFoundException("Family detail not found");
    //   return { message: "Deleted successfully" };
    // }

   async delete(id: string) {
  const result = await this.employeeQualificationModel.findByIdAndDelete(id);
  if (!result) throw new NotFoundException('Qualification not found');
  return { message: 'Deleted successfully' };
}




    async update(id: string, dto: Partial<CreateEmployeeQualificationDto>): Promise<EmployeeQualification> {
        const updated = await this.employeeQualificationModel.findByIdAndUpdate(id, dto, { new: true });
        if (!updated) throw new NotFoundException(`Family detail with ID ${id} not found`);
        return updated;
    }

}
