import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilesManager, FilesManagerDocument } from './schema/filesManager.schema';
import { CreateFilesManagerDto } from './dto/create-filesManager.dto';

@Injectable()
export class FilesManagerService {
  deletePromotion(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(FilesManager.name) private filesManagerModel: Model<FilesManagerDocument>) {}

  async create(createUserDto: CreateFilesManagerDto): Promise<FilesManager> {
    const createdUser = new this.filesManagerModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<FilesManager> {
      try {
        console.log('Updating leave with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.filesManagerModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`leave with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating leave');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting leave with ID:', id); 
    const result = await this.filesManagerModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`leave with id ${id} not found`);
    }
    return { message: 'leave deleted successfully' };
  }

  
  async findAll(): Promise<FilesManager[]> {
    return this.filesManagerModel.find().exec();
  }
}
