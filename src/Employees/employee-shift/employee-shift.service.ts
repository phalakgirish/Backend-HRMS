import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { EmployeeShift } from './schema/employee-shift.schema';
import { CreateEmployeeShiftDto } from './dto/create-employee-shift.dto';
import { Employee } from 'src/Employees/employee/schema/employee.schema';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeShiftService {
    findByIdAndUpdate(id: string, dto: Partial<CreateEmployeeShiftDto>) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(EmployeeShift.name)
        private employeeShiftModel: mongoose.Model<EmployeeShift>,
        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }

    async findAll(): Promise<EmployeeShift[]> {

        const employeeShiftDts = await this.employeeShiftModel.find()
            .exec();
        if (!employeeShiftDts) {
            throw new NotFoundException('Employee Shift not found')
        }

        return employeeShiftDts;
    }

    async findAllByEmpId(employeeId: string) {
        if (Types.ObjectId.isValid(employeeId)) {
            return this.employeeShiftModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
        } else {
            return this.employeeShiftModel.find({ employeeId }).exec();
        }
    }

    async create(dto: any): Promise<EmployeeShift> {
        const employee = await this.employeeModel.findById(dto.employeeId);
        if (!employee) throw new NotFoundException('Employee not found');

        dto.employeeId = employee._id;
        const newShift = await this.employeeShiftModel.create(dto);

        const savedShift = await this.employeeShiftModel
            .findById(newShift._id)
            .populate('employeeId')
            .exec();

        if (!savedShift) {
            throw new NotFoundException('Shift not found after creation');
        }

        return savedShift;
    }

    async findById(shift_id: any): Promise<EmployeeShift> {

        const employeeShiftDts = await this.employeeShiftModel.findOne({ _id: new ObjectId(shift_id) })
            .exec();
        if (!employeeShiftDts) {
            throw new NotFoundException('Shift not found')
        }

        return employeeShiftDts;
    }

    async delete(id: string) {
        const result = await this.employeeShiftModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException('Qualification not found');
        return { message: 'Deleted successfully' };
    }


    async update(id: string, dto: Partial<CreateEmployeeShiftDto>) {
        // Prevent accidental overwrite of _id
        if ('_id' in dto) {
            delete (dto as any)._id;
        }

        // Ensure employeeId is preserved (never overwritten by frontend)
        const existing = await this.employeeShiftModel.findById(id);
        if (!existing) throw new NotFoundException('Shift not found');

        return this.employeeShiftModel.findByIdAndUpdate(
            id,
            { ...dto, employeeId: existing.employeeId },
            { new: true },
        );
    }




}
