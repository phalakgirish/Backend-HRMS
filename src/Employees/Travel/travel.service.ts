import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Travel, TravelDocument } from './schema/travel.schema';
import { CreateTravelDto } from './dto/create-travel.dto';

@Injectable()
export class TravelService {
  deleteTravel(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Travel.name) private travelModel: Model<TravelDocument>) {}

  async create(createUserDto: CreateTravelDto): Promise<Travel> {
    const createdUser = new this.travelModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Travel> {
      try {
        console.log('Updating travel with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.travelModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`travel with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating travel');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting travel with ID:', id); 
    const result = await this.travelModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`travel with id ${id} not found`);
    }
    return { message: 'travel deleted successfully' };
  }

  
  async findAll(): Promise<Travel[]> {
    return this.travelModel.find().exec();
  }
}
