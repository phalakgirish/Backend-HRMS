import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department, DepartmentDocument } from './schema/department.schema';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(@InjectModel(Department.name) private departmentModel: Model<DepartmentDocument>) { }

  async create(createUserDto: CreateDepartmentDto): Promise<Department> {
    const createdUser = new this.departmentModel(createUserDto);
    return createdUser.save();
  }

  async update(id: string, updateDto: any): Promise<Department> {
    try {
      console.log('Updating department with ID:', id);
      console.log('Update data:', updateDto);
      const updated = await this.departmentModel.findByIdAndUpdate(id, updateDto, { new: true });
      if (!updated) {
        throw new NotFoundException(`Department with ID ${id} not found`);
      }
      return updated;
    } catch (error) {
      console.error('Service update error:', error);
      throw new InternalServerErrorException('Error updating department');
    }
  }


  async deleteDepartment(id: string): Promise<{ message: string }> {
    console.log('Deleting department with ID:', id); // Log here
    const result = await this.departmentModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Department with id ${id} not found`);
    }
    return { message: 'Department deleted successfully' };
  }



  async findAll(): Promise<Department[]> {
    return this.departmentModel.find().exec();
  }


  async countDepartments(): Promise<number> {
    try {
      return await this.departmentModel.countDocuments().exec();
    } catch (error) {
      console.error('Error in countDepartments:', error);
      throw new InternalServerErrorException('Error counting employees');
    }
  }
}
