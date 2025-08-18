import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainingType, TrainingTypeDocument } from './schema/trainingType.schema';
import { CreateTrainingTypeDto } from './dto/create-trainingType.dto';
@Injectable()
export class TrainingTypeService {
    constructor(@InjectModel(TrainingType.name) private trainingTypeModel: Model<TrainingTypeDocument>) { }

    async create(createUserDto: CreateTrainingTypeDto): Promise<TrainingType> {
        const createdUser = new this.trainingTypeModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, updateDto: any): Promise<TrainingType> {
        try {
            console.log('Updating training Type with ID:', id);
            console.log('Update data:', updateDto);
            const updated = await this.trainingTypeModel.findByIdAndUpdate(id, updateDto, { new: true });
            if (!updated) {
                throw new NotFoundException(`training Type with ID ${id} not found`);
            }
            return updated;
        } catch (error) {
            console.error('Service update error:', error);
            throw new InternalServerErrorException('Error updating training Type');
        }
    }


   async delete(id: string): Promise<{ message: string }> {
      console.log('Deleting training with ID:', id); 
      const result = await this.trainingTypeModel.findByIdAndDelete(id);
      if (!result) {
        throw new NotFoundException(`training with id ${id} not found`);
      }
      return { message: 'training deleted successfully' };
    }
  
    async findAll(): Promise<TrainingType[]> {
      return this.trainingTypeModel.find().exec();
    }
}
