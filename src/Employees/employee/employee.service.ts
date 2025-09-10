import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schema/employee.schema';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  findById(id: string) {
    throw new Error('Method not implemented.');
  }
  deleteEmployee(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) { }

  async create(createUserDto: CreateEmployeeDto): Promise<Employee> {
    const createdUser = new this.employeeModel(createUserDto);
    return createdUser.save();
  }


  async update(id: string, updateDto: any): Promise<Employee> {
    try {
      console.log('Updating employe with ID:', id);
      console.log('Update data:', updateDto);
      const updated = await this.employeeModel.findByIdAndUpdate(id, updateDto, { new: true });
      if (!updated) {
        throw new NotFoundException(`employe with ID ${id} not found`);
      }
      return updated;
    } catch (error) {
      console.error('Service update error:', error);
      throw new InternalServerErrorException('Error updating employe');
    }
  }


  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting employe with ID:', id);
    const result = await this.employeeModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`employe with id ${id} not found`);
    }

    return { message: 'employe deleted successfully' };
  }


  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findOneById(id: string): Promise<Employee | null> {
    return this.employeeModel.findById(id).exec();
  }


}
