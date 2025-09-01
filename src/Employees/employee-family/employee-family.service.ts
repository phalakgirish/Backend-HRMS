import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { EmployeeFamily } from './schema/employee-family.schema';
import { Employee } from 'src/Employees/employee/schema/employee.schema';
import { CreateEmployeeFamilyDto } from './dto/create-employee-family.dto';

@Injectable()
export class EmployeeFamilyService {
    delete(id: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(EmployeeFamily.name)
        private employeeFamilyModel: mongoose.Model<EmployeeFamily>,
        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>
    ) { }

    // async findAllByemployeeId(employeeId: string): Promise<any> {
    //     const employee = await this.employeeModel.findOne({ id: employeeId });
    //     if (!employee) throw new NotFoundException('Employee not found');

    //     const familyDetails = await this.employeeFamilyModel.find({ employee_id: employee._id });
    //     if (!familyDetails || familyDetails.length === 0) {
    //         throw new NotFoundException('Employee Family not found');
    //     }
    //     return familyDetails;
    // }

    async findAllByemployeeId(employeeId: string) {
 if (Types.ObjectId.isValid(employeeId)) {
        return this.employeeFamilyModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
    } else {
        // fallback for string employee IDs
        return this.employeeFamilyModel.find({ employeeId }).exec();
    }    }


    async create(dto: any): Promise<any> {
        const employee = await this.employeeModel.findOne({ id: dto.employeeId });
        if (!employee) throw new NotFoundException('Employee not found');

        dto.employeeId = employee.id;

        return await this.employeeFamilyModel.create(dto);
    }

//    async delete(id: string) {
//   const result = await this.employeeFamilyModel.findByIdAndDelete(id);
//   if (!result) throw new NotFoundException("Family detail not found");
//   return { message: "Deleted successfully" };
// }

async removeByEmployeeId(id: string): Promise<any> {
    return await this.employeeFamilyModel.deleteMany({ employeeId: id });
}



 async update(id: string, dto: Partial<CreateEmployeeFamilyDto>): Promise<EmployeeFamily> {
    const updated = await this.employeeFamilyModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException(`Family detail with ID ${id} not found`);
    return updated;
  }

}
