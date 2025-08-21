import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Projects, ProjectsDocument } from './schema/projects.schema';
import { CreateProjectsDto } from './dto/create-projects.dto';

@Injectable()
export class ProjectsService {
  deleteProjects(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Projects.name) private projectsModel: Model<ProjectsDocument>) {}

  async create(createUserDto: CreateProjectsDto): Promise<Projects> {
    const createdUser = new this.projectsModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Projects> {
      try {
        console.log('Updating project with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.projectsModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`project with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating project');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting project with ID:', id); 
    const result = await this.projectsModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`project with id ${id} not found`);
    }
    return { message: 'project deleted successfully' };
  }

  
  async findAll(): Promise<Projects[]> {
    return this.projectsModel.find().exec();
  }
}
