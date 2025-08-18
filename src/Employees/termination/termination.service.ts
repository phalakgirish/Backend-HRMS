import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Termination, TerminationDocument } from './schema/termination.schema';
import { CreateTerminationDto } from './dto/create-termination.dto';

@Injectable()
export class TerminationService {
  deleteTermination(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Termination.name) private terminationModel: Model<TerminationDocument>) {}

  async create(createUserDto: CreateTerminationDto): Promise<Termination> {
    const createdUser = new this.terminationModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Termination> {
      try {
        console.log('Updating termination with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.terminationModel.findByIdAndUpdate(id, updateDto, { new: true });
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
    const result = await this.terminationModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`termination with id ${id} not found`);
    }
    return { message: 'termination deleted successfully' };
  }

  
  async findAll(): Promise<Termination[]> {
    return this.terminationModel.find().exec();
  }
}
