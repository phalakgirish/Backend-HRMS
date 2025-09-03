import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeLocation } from './schema/employee-location.schema';
import mongoose, { Types } from 'mongoose';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { Employee } from 'src/Employees/employee/schema/employee.schema';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeLocationService {
    constructor(
        @InjectModel(EmployeeLocation.name)
        private employeeLocationModel:mongoose.Model<EmployeeLocation>,
        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    )
    {}

    async findAll(): Promise<EmployeeLocation[]> {
   
           const employeeLocationDts = await this.employeeLocationModel.find()
               .exec();
           if (!employeeLocationDts) {
               throw new NotFoundException('Employee Location not found')
           }
   
           return employeeLocationDts;
       }
   
       async findAllByEmpId(employeeId: string) {
           if (Types.ObjectId.isValid(employeeId)) {
               return this.employeeLocationModel.find({ employeeId: new Types.ObjectId(employeeId) }).exec();
           } else {
               return this.employeeLocationModel.find({ employeeId }).exec();
           }
       }
   
       async create(dto: any): Promise<EmployeeLocation> {
           const employee = await this.employeeModel.findById(dto.employeeId);
           if (!employee) throw new NotFoundException('Employee not found');
   
           dto.employeeId = employee._id;
           const newLocation = await this.employeeLocationModel.create(dto);
   
           const savedLocation = await this.employeeLocationModel
               .findById(newLocation._id)
               .populate('employeeId')
               .exec();
   
           if (!savedLocation) {
               throw new NotFoundException('Location not found after creation');
           }
   
           return savedLocation;
       }
   
       async findById(Location_id: any): Promise<EmployeeLocation> {
   
           const employeeLocationDts = await this.employeeLocationModel.findOne({ _id: new ObjectId(Location_id) })
               .exec();
           if (!employeeLocationDts) {
               throw new NotFoundException('Location not found')
           }
   
           return employeeLocationDts;
       }
   
       async delete(id: string) {
           const result = await this.employeeLocationModel.findByIdAndDelete(id);
           if (!result) throw new NotFoundException('Location not found');
           return { message: 'Deleted successfully' };
       }
   
   
       async update(id: string, dto: Partial<CreateEmployeeLocationDto>) {
           if ('_id' in dto) {
               delete (dto as any)._id;
           }
           const existing = await this.employeeLocationModel.findById(id);
           if (!existing) throw new NotFoundException('Location not found');
   
           return this.employeeLocationModel.findByIdAndUpdate(
               id,
               { ...dto, employeeId: existing.employeeId },
               { new: true },
           );
       }
}
