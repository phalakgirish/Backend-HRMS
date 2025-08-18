import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerformanceIndicator, PerformanceIndicatorDocument } from './schema/performanceIndicator.schema';
import { CreatePerformanceIndicatorDto } from './dto/create-performanceIndicator.dto';

@Injectable()
export class PerformanceIndicatorService {
  deleteTransfer(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(PerformanceIndicator.name) private performanceIndicatorModel: Model<PerformanceIndicatorDocument>) {}

  async create(createUserDto: CreatePerformanceIndicatorDto): Promise<PerformanceIndicator> {
    const createdUser = new this.performanceIndicatorModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<PerformanceIndicator> {
      try {
        console.log('Updating Transfer with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.performanceIndicatorModel.findByIdAndUpdate(id, updateDto, { new: true });
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
    const result = await this.performanceIndicatorModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Transfer with id ${id} not found`);
    }
    return { message: 'Transfer deleted successfully' };
  }

  
  async findAll(): Promise<PerformanceIndicator[]> {
    return this.performanceIndicatorModel.find().exec();
  }
}
