import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainingList, TrainingListDocument } from './schema/trainingList.schema';
import { CreateTrainingListDto } from './dto/create-trainingList.dto';
@Injectable()
export class TrainingListService {
    constructor(@InjectModel(TrainingList.name) private trainingListModel: Model<TrainingListDocument>) { }

    async create(createUserDto: CreateTrainingListDto): Promise<TrainingList> {
        const createdUser = new this.trainingListModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, updateDto: any): Promise<TrainingList> {
        try {
            console.log('Updating training list with ID:', id);
            console.log('Update data:', updateDto);
            const updated = await this.trainingListModel.findByIdAndUpdate(id, updateDto, { new: true });
            if (!updated) {
                throw new NotFoundException(`training list with ID ${id} not found`);
            }
            return updated;
        } catch (error) {
            console.error('Service update error:', error);
            throw new InternalServerErrorException('Error updating training list');
        }
    }


   async delete(id: string): Promise<{ message: string }> {
      console.log('Deleting training with ID:', id); 
      const result = await this.trainingListModel.findByIdAndDelete(id);
      if (!result) {
        throw new NotFoundException(`training with id ${id} not found`);
      }
      return { message: 'training deleted successfully' };
    }
  
    async findAll(): Promise<TrainingList[]> {
      return this.trainingListModel.find().exec();
    }
}
