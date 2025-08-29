import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OfficeShift, OfficeShiftDocument } from './schema/OfficeShift.schema';
import { CreateOfficeShiftDto } from './dto/create-officeShift.dto';

@Injectable()
export class OfficeShiftService {
  deleteOfficeShift(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(OfficeShift.name) private officeShiftModel: Model<OfficeShiftDocument>) {}

  async create(createUserDto: CreateOfficeShiftDto): Promise<OfficeShift> {
    const createdUser = new this.officeShiftModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<OfficeShift> {
      try {
        console.log('Updating termination with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.officeShiftModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`termination with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating termination');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting termination with ID:', id); 
    const result = await this.officeShiftModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`termination with id ${id} not found`);
    }
    return { message: 'termination deleted successfully' };
  }

  
  async findAll(): Promise<OfficeShift[]> {
    return this.officeShiftModel.find().exec();
  }
}
