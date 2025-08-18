import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeExit, EmployeeExitDocument } from './schema/employeeExit.schema';
import { CreateEmployeeExitDto } from './dto/create-EmployeeExit.dto';

@Injectable()
export class EmployeeExitService {
  deleteEmployeeExit(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(EmployeeExit.name) private employeeModel: Model<EmployeeExitDocument>) {}

  async create(createUserDto: CreateEmployeeExitDto): Promise<EmployeeExit> {
    const createdUser = new this.employeeModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<EmployeeExit> {
      try {
        console.log('Updating employee exit with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.employeeModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`employee exit with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating employee exit');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting employee exit with ID:', id); 
    const result = await this.employeeModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`employee exit with id ${id} not found`);
    }
    return { message: 'employee exit deleted successfully' };
  }

  
  async findAll(): Promise<EmployeeExit[]> {
    return this.employeeModel.find().exec();
  }
}
