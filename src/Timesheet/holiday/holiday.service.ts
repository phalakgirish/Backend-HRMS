import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Holiday, HolidayDocument } from './schema/holiday.schema';
import { CreateHolidayDto } from './dto/create-holiday.dto';

@Injectable()
export class HolidayService {
  deleteHoliday(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Holiday.name) private holidayModel: Model<HolidayDocument>) {}

  async create(createUserDto: CreateHolidayDto): Promise<Holiday> {
    const createdUser = new this.holidayModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Holiday> {
      try {
        console.log('Updating holiday with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.holidayModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`holiday with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating holiday');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting holiday with ID:', id); 
    const result = await this.holidayModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`holiday with id ${id} not found`);
    }
    return { message: 'holiday deleted successfully' };
  }

  
  async findAll(): Promise<Holiday[]> {
    return this.holidayModel.find().exec();
  }
}
