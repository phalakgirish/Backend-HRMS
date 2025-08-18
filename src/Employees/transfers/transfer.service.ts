import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transfer, TransferDocument } from './schema/transfer.schema';
import { CreateTransferDto } from './dto/create-transfer.dto';

@Injectable()
export class TransferService {
  deleteTransfer(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Transfer.name) private transferModel: Model<TransferDocument>) {}

  async create(createUserDto: CreateTransferDto): Promise<Transfer> {
    const createdUser = new this.transferModel(createUserDto);
    return createdUser.save();
  }


    async update(id: string, updateDto: any): Promise<Transfer> {
      try {
        console.log('Updating Transfer with ID:', id);
        console.log('Update data:', updateDto);
        const updated = await this.transferModel.findByIdAndUpdate(id, updateDto, { new: true });
          if (!updated) {
        throw new NotFoundException(`Transfer with ID ${id} not found`);
      }
        return updated;
      } catch (error) {
        console.error('Service update error:', error);
        throw new InternalServerErrorException('Error updating Transfer');
      }
    }
  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting Transfer with ID:', id); 
    const result = await this.transferModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Transfer with id ${id} not found`);
    }
    return { message: 'Transfer deleted successfully' };
  }

  
  async findAll(): Promise<Transfer[]> {
    return this.transferModel.find().exec();
  }
}
