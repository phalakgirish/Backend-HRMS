import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resignation, ResignationDocument } from './schema/resignation.schema';
import { CreateResignationDto } from './dto/create-resignation.dto';

@Injectable()
export class ResignationService {
  deleteResignation(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Resignation.name) private resignationModel: Model<ResignationDocument>) {}

  async create(createUserDto: CreateResignationDto): Promise<Resignation> {
    const createdUser = new this.resignationModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Resignation> {
      try {
        console.log('Updating Resignation with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.resignationModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`Resignation with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating Resignation');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting Resignation with ID:', id); 
    const result = await this.resignationModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Resignation with id ${id} not found`);
    }
    return { message: 'Resignation deleted successfully' };
  }

  
  async findAll(): Promise<Resignation[]> {
    return this.resignationModel.find().exec();
  }
}
