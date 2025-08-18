import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainersList, TrainersListDocument } from './schema/trainersList.schema';
import { CreateTrainersListDto } from './dto/create-trainersList.dto';
@Injectable()
export class TrainersListService {
    constructor(@InjectModel(TrainersList.name) private trainersListModel: Model<TrainersListDocument>) { }

    async create(createUserDto: CreateTrainersListDto): Promise<TrainersList> {
        const createdUser = new this.trainersListModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, updateDto: any): Promise<TrainersList> {
        try {
            console.log('Updating trainer list with ID:', id);
            console.log('Update data:', updateDto);
            const updated = await this.trainersListModel.findByIdAndUpdate(id, updateDto, { new: true });
            if (!updated) {
                throw new NotFoundException(`trainer list with ID ${id} not found`);
            }
            return updated;
        } catch (error) {
            console.error('Service update error:', error);
            throw new InternalServerErrorException('Error updating trainer list');
        }
    }


   async delete(id: string): Promise<{ message: string }> {
      console.log('Deleting Orgpolicy with ID:', id); 
      const result = await this.trainersListModel.findByIdAndDelete(id);
      if (!result) {
        throw new NotFoundException(`Orgpolicy with id ${id} not found`);
      }
      return { message: 'Orgpolicy deleted successfully' };
    }
  
    async findAll(): Promise<TrainersList[]> {
      return this.trainersListModel.find().exec();
    }
}
