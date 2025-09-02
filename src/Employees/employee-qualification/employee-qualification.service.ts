import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { EmployeeQualification } from './schema/employee-qualification.schema';
import { CreateEmployeeQualificationDto } from './dto/create-employee-qualification.dto';
import { Employee } from 'src/Employees/employee/schema/employee.schema';
import { UpdateEmployeeQualificationDto } from './dto/update-employee-qualification.dto';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeQualificationService {

    constructor(
        @InjectModel(EmployeeQualification.name)
        private employeeQualificationModel: mongoose.Model<EmployeeQualification>,

        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }


    async findAllByEmpId(employeeId: string) {
        if (Types.ObjectId.isValid(employeeId)) {
            return this.employeeQualificationModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
        } else {
            return this.employeeQualificationModel.find({ employeeId }).exec();
        }
    }


    async create(dto: any): Promise<any> {
        const employee = await this.employeeModel.findById(dto.employeeId);
        if (!employee) throw new NotFoundException('Employee not found');

        dto.employeeId = employee._id;
        return await this.employeeQualificationModel.create(dto);
    }

    async delete(id: string) {
        const result = await this.employeeQualificationModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException('Qualification not found');
        return { message: 'Deleted successfully' };
    }

    async update(id: string, updateDto: UpdateEmployeeQualificationDto) {
        const existing = await this.employeeQualificationModel.findById(id);
        if (!existing) throw new NotFoundException('Qualification not found');

        return this.employeeQualificationModel.findByIdAndUpdate(
            id,
            { ...updateDto, employeeId: existing.employeeId },
            { new: true },
        );
    }


}
