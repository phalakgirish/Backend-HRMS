import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SetRoles, SetRolesDocument } from './schema/setRoles.schema';
import { CreateSetRolesDto } from './dto/create-setRoles.dto';
@Injectable()
export class SetRolesService {
    constructor(@InjectModel(SetRoles.name) private setRolesModel: Model<SetRolesDocument>) { }

    async create(createUserDto: CreateSetRolesDto): Promise<SetRoles> {
        const createdUser = new this.setRolesModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, updateDto: any): Promise<SetRoles> {
        try {
            console.log('Updating set roles Type with ID:', id);
            console.log('Update data:', updateDto);
            const updated = await this.setRolesModel.findByIdAndUpdate(id, updateDto, { new: true });
            if (!updated) {
                throw new NotFoundException(`set roles Type with ID ${id} not found`);
            }
            return updated;
        } catch (error) {
            console.error('Service update error:', error);
            throw new InternalServerErrorException('Error updating set roles Type');
        }
    }


   async delete(id: string): Promise<{ message: string }> {
      console.log('Deleting set roles with ID:', id); 
      const result = await this.setRolesModel.findByIdAndDelete(id);
      if (!result) {
        throw new NotFoundException(`set roles with id ${id} not found`);
      }
      return { message: 'set roles deleted successfully' };
    }
  
    async findAll(): Promise<SetRoles[]> {
      return this.setRolesModel.find().exec();
    }
}
