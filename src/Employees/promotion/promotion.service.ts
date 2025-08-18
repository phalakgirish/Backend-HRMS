import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Promotion, PromotionDocument } from './schema/promotion.schema';
import { CreatePromotionDto } from './dto/create-promotion.dto';

@Injectable()
export class PromotionService {
  deletePromotion(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Promotion.name) private promotionModel: Model<PromotionDocument>) {}

  async create(createUserDto: CreatePromotionDto): Promise<Promotion> {
    const createdUser = new this.promotionModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Promotion> {
      try {
        console.log('Updating promotion with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.promotionModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`promotion with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating promotion');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting promotion with ID:', id); 
    const result = await this.promotionModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`promotion with id ${id} not found`);
    }
    return { message: 'promotion deleted successfully' };
  }

  
  async findAll(): Promise<Promotion[]> {
    return this.promotionModel.find().exec();
  }
}
