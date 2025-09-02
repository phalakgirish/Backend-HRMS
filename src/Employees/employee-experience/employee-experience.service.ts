import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeExperience } from './schema/employee-experience.schema';
import mongoose, { Types } from 'mongoose';
import { UpdateEmployeeExperienceDto } from './dto/update-employee-experience.dto';
import { CreateEmployeeExperienceDto } from './dto/create-employee-experience.dto';
import { Employee } from 'src/Employees/employee/schema/employee.schema';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeExperienceService {

    constructor(
        @InjectModel(EmployeeExperience.name)
        private employeeExperienceModel: mongoose.Model<EmployeeExperience>,

        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }


    async findAllByEmpId(employeeId: string) {
        if (Types.ObjectId.isValid(employeeId)) {
            return this.employeeExperienceModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
        } else {
            return this.employeeExperienceModel.find({ employeeId }).exec();
        }
    }


    async create(dto: any): Promise<any> {
        const employee = await this.employeeModel.findById(dto.employeeId);
        if (!employee) throw new NotFoundException('Employee not found');

        dto.employeeId = employee._id;
        return await this.employeeExperienceModel.create(dto);
    }


    async delete(id: string) {
        const result = await this.employeeExperienceModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException('Qualification not found');
        return { message: 'Deleted successfully' };
    }



    async update(id: string, updateDto: UpdateEmployeeExperienceDto) {
        const existing = await this.employeeExperienceModel.findById(id);
        if (!existing) throw new NotFoundException('Qualification not found');

        return this.employeeExperienceModel.findByIdAndUpdate(
            id,
            { ...updateDto, employeeId: existing.employeeId },
            { new: true },
        );
    }

}
