import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SupportRequest, SupportRequestDocument } from './schema/supportRequest.schema';
import { CreateSupportRequestDto } from './dto/create-supportRequest.dto';

@Injectable()
export class SupportRequestService {
  deleteSupportRequest(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(SupportRequest.name) private supportRequestModel: Model<SupportRequestDocument>) {}

  async create(createUserDto: CreateSupportRequestDto): Promise<SupportRequest> {
    const createdUser = new this.supportRequestModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<SupportRequest> {
      try {
        console.log('Updating support request with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.supportRequestModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`support request with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating support request');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting support request with ID:', id); 
    const result = await this.supportRequestModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`support request with id ${id} not found`);
    }
    return { message: 'support request deleted successfully' };
  }

  
  async findAll(): Promise<SupportRequest[]> {
    return this.supportRequestModel.find().exec();
  }
}
