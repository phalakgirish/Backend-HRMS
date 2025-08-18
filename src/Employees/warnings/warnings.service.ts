import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Warnings, WarningsDocument } from './schema/warnings.schema';
import { CreateWarningsDto } from './dto/create-warnings.dto';

@Injectable()
export class WarningsService {
  deleteWarnings(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Warnings.name) private warningsModel: Model<WarningsDocument>) {}

  async create(createUserDto: CreateWarningsDto): Promise<Warnings> {
    const createdUser = new this.warningsModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Warnings> {
      try {
        console.log('Updating warning with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.warningsModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`warning with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating warning');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting warning with ID:', id); 
    const result = await this.warningsModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`warning with id ${id} not found`);
    }
    return { message: 'warning deleted successfully' };
  }

  
  async findAll(): Promise<Warnings[]> {
    return this.warningsModel.find().exec();
  }
}
