import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { Announcement, AnnouncementDocument } from './schema/announcement.schema';

@Injectable()
export class AnnouncementService {
  constructor(@InjectModel(Announcement.name) private announcementModel: Model<AnnouncementDocument>) { }

  async create(CreateAnnouncementDto: CreateAnnouncementDto): Promise<Announcement> {
    const createdUser = new this.announcementModel(CreateAnnouncementDto);
    return createdUser.save();
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementModel.find().exec();
  }

   async update(id: string, updateDto: Partial<CreateAnnouncementDto>): Promise<Announcement> {
    try {
      const updated = await this.announcementModel.findByIdAndUpdate(id, updateDto, {
        new: true,
        runValidators: true,
      });

      if (!updated) {
        throw new NotFoundException(`Announcement with ID ${id} not found`);
      }

      return updated;
    } catch (error) {
      console.error('Mongoose update error:', error.message, error);
      throw new InternalServerErrorException('Error updating announcement');
    }
  }


 async delete(id: string): Promise<{ message: string }> {
  if (!isValidObjectId(id)) {
    throw new BadRequestException('Invalid ID format');
  }

  const result = await this.announcementModel.findByIdAndDelete(id);
  if (!result) {
    throw new NotFoundException(`Announcement with id ${id} not found`);
  }

  return { message: 'Announcement deleted successfully' };
}


}
