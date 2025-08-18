import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Designation, DesignationDocument } from './schema/designation.schema';
import { CreateDesignationDto } from './dto/create-designation.dto';

@Injectable()
export class DesignationService {
  deleteDesignation(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Designation.name) private designationModel: Model<DesignationDocument>) {}

  async create(createUserDto: CreateDesignationDto): Promise<Designation> {
    const createdUser = new this.designationModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Designation> {
      try {
        console.log('Updating Designation with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.designationModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`Designation with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating designation');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting designation with ID:', id); 
    const result = await this.designationModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`designation with id ${id} not found`);
    }
    return { message: 'designation deleted successfully' };
  }

  
  async findAll(): Promise<Designation[]> {
    return this.designationModel.find().exec();
  }
}
