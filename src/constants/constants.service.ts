import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Constants, ConstantsDocument } from './schema/constants.schema';
import { CreateConstantsDto } from './dto/create-constants.dto';

@Injectable()
export class ConstantsService {
  constructor(
    @InjectModel(Constants.name)
    private constantModel: Model<ConstantsDocument>,
  ) {}

  async create(createDto: CreateConstantsDto) {
    const created = new this.constantModel(createDto);
    return created.save();
  }

  async findByType(type: string) {
    return this.constantModel.find({ type }).exec();
  }

  async update(id: string, value: Record<string, any>) {
    return this.constantModel.findByIdAndUpdate(id, { value }, { new: true });
  }

  async delete(id: string) {
    return this.constantModel.findByIdAndDelete(id);
  }
}
