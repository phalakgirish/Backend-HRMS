import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerformanceAppraisal, PerformanceAppraisalDocument } from './schema/performanceAppraisal.schema';
import { CreatePerformanceAppraisalDto } from './dto/create-performaceAppraisal.dto';

@Injectable()
export class PerformanceAppraisalService {
  deleteTransfer(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(PerformanceAppraisal.name) private performanceAppraisalModel: Model<PerformanceAppraisalDocument>) {}

  async create(createUserDto: CreatePerformanceAppraisalDto): Promise<PerformanceAppraisal> {
    const createdUser = new this.performanceAppraisalModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<PerformanceAppraisal> {
      try {
        console.log('Updating Transfer with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.performanceAppraisalModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`Transfer with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating Transfer');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting Transfer with ID:', id); 
    const result = await this.performanceAppraisalModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Transfer with id ${id} not found`);
    }
    return { message: 'Transfer deleted successfully' };
  }

  
  async findAll(): Promise<PerformanceAppraisal[]> {
    return this.performanceAppraisalModel.find().exec();
  }
}
