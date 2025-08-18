import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Awards } from './schema/awards.schema';
import { CreateAwardsDto } from './dto/create-awards.dto';

@Injectable()
export class AwardsService {
  deleteAwards(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Awards.name) private awardsModel: Model<Awards>) {}

  async create(createUserDto: CreateAwardsDto): Promise<Awards> {
    const createdUser = new this.awardsModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Awards> {
      try {
        console.log('Updating awards with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.awardsModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`awards with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating awards');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting awards with ID:', id); 
    const result = await this.awardsModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`awards with id ${id} not found`);
    }
    return { message: 'awards deleted successfully' };
  }

  
  async findAll(): Promise<Awards[]> {
    return this.awardsModel.find().exec();
  }
}
