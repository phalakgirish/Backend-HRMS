import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leave, LeaveDocument } from './schema/leave.schema';
import { CreateLeaveDto } from './dto/create-leave.dto';

@Injectable()
export class LeaveService {
  leaveRepository: any;
  deletePromotion(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Leave.name) private leaveModel: Model<LeaveDocument>) {}

  // async create(createUserDto: CreateLeaveDto): Promise<Leave> {
  //   const createdUser = new this.leaveModel(createUserDto);
  //   return createdUser.save();
  // }

async create(createLeaveDto: CreateLeaveDto): Promise<Leave> {
  try {
    const newLeave = new this.leaveModel(createLeaveDto); // create new document
    return await newLeave.save(); // save to MongoDB
  } catch (error) {
    console.error('Error creating leave:', error);
    throw new InternalServerErrorException('Error creating leave');
  }
}




    // async update(id: string, updateDto: any): Promise<Leave> {
    //   try {
    //     console.log('Updating leave with ID:', id);
    //     console.log('Update data:', updateDto);
    //     const updated = await this.leaveModel.findByIdAndUpdate(id, updateDto, { new: true });
    //       if (!updated) {
    //     throw new NotFoundException(`leave with ID ${id} not found`);
    //   }
    //     return updated;
    //   } catch (error) {
    //     console.error('Service update error:', error);
    //     throw new InternalServerErrorException('Error updating leave');
    //   }
    // }

    async update(id: string, updateDto: any): Promise<Leave> {
  try {
    console.log('Updating leave with ID:', id);
    console.log('Update data:', updateDto);

    const updated = await this.leaveModel.findByIdAndUpdate(
      id,
      { $set: updateDto },  // <--- use $set to avoid replacing whole doc
      { new: true, runValidators: true }
    );

    if (!updated) {
      throw new NotFoundException(`Leave with ID ${id} not found`);
    }
    return updated;
  } catch (error) {
    console.error('Service update error:', error.message);
    throw new InternalServerErrorException(error.message);
  }
}

  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting leave with ID:', id); 
    const result = await this.leaveModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`leave with id ${id} not found`);
    }
    return { message: 'leave deleted successfully' };
  }

  
  async findAll(): Promise<Leave[]> {
    return this.leaveModel.find().exec();
  }
}
