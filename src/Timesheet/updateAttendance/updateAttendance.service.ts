import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateAttendance, UpdateAttendanceDocument } from './schema/updateAttendance.schema';
import { CreateUpdateAttendanceDto } from './dto/create-updateAttendance.dto';

@Injectable()
export class UpdateAttendanceService {
  deleteUpdateAttendance(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(UpdateAttendance.name) private updateAttendanceModel: Model<UpdateAttendanceDocument>) {}

  async create(createUserDto: CreateUpdateAttendanceDto): Promise<UpdateAttendance> {
    const createdUser = new this.updateAttendanceModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<UpdateAttendance> {
      try {
        console.log('Updating update attendance with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.updateAttendanceModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`update attendance with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating update attendance');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting update attendance with ID:', id); 
    const result = await this.updateAttendanceModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`update attendance with id ${id} not found`);
    }
    return { message: 'update attendance deleted successfully' };
  }

  
  async findAll(): Promise<UpdateAttendance[]> {
    return this.updateAttendanceModel.find().exec();
  }
}
