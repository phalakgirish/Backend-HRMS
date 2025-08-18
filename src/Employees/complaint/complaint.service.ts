import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Complaint, ComplaintDocument } from './schema/complaint.schema';
import { CreateComplaintDto } from './dto/create-complaint.dto';

@Injectable()
export class ComplaintService {
  deleteComplaint(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Complaint.name) private complaintModel: Model<ComplaintDocument>) {}

  async create(createUserDto: CreateComplaintDto): Promise<Complaint> {
      console.log('Received DTO:', CreateComplaintDto);

    const createdUser = new this.complaintModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Complaint> {
      try {
        console.log('Updating complaint with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.complaintModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`complaint with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating complaint');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting complaint with ID:', id); 
    const result = await this.complaintModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`complaint with id ${id} not found`);
    }
    return { message: 'complaint deleted successfully' };
  }

  
  async findAll(): Promise<Complaint[]> {
    return this.complaintModel.find().exec();
  }
}
