import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location, LocationDocument } from './schema/location.schema';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationService {
  deleteLocation(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Location.name) private locationModel: Model<LocationDocument>) {}

  async create(createUserDto: CreateLocationDto): Promise<Location> {
    const createdUser = new this.locationModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Location> {
      try {
        console.log('Updating location with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.locationModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`location with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating location');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting location with ID:', id); 
    const result = await this.locationModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`location with id ${id} not found`);
    }
    return { message: 'location deleted successfully' };
  }

  
  async findAll(): Promise<Location[]> {
    return this.locationModel.find().exec();
  }


  async findOneByName(name: string): Promise<Location | null> {
  return this.locationModel.findOne({ locationName: name }).exec();
}

async countLocations(): Promise<number> {
    try {
      return await this.locationModel.countDocuments().exec();
    } catch (error) {
      console.error('Error in countLocations:', error);
      throw new InternalServerErrorException('Error counting employees');
    }
  }

}
