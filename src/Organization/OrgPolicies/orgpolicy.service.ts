import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrgpolicyDto } from './dto/create-orgpolicy.dto';
import { Orgpolicy, OrgpolicyDocument } from './schema/orgpolicy.schema';

@Injectable()
export class OrgpolicyService {

  constructor(@InjectModel(Orgpolicy.name) private orgpolicyModel: Model<OrgpolicyDocument>) {}

async create(createOrgpolicyDto: CreateOrgpolicyDto): Promise<Orgpolicy> {
  const createdPolicy = new this.orgpolicyModel({
    ...createOrgpolicyDto,
    createdAt: Date.now(), 
  });
  return createdPolicy.save();
}



async update(id: string, updateDto: Partial<CreateOrgpolicyDto>): Promise<Orgpolicy> {
  try {
    console.log('Updating Orgpolicy with ID:', id);
    console.log('Update data:', updateDto);

    const updated = await this.orgpolicyModel.findByIdAndUpdate(id, updateDto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException(`Orgpolicy with ID ${id} not found`);
    }

    return updated;
  } catch (error) {
    console.error('Service update error:', error);
    throw new InternalServerErrorException('Error updating Orgpolicy');
  }
}

  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting Orgpolicy with ID:', id); 
    const result = await this.orgpolicyModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Orgpolicy with id ${id} not found`);
    }
    return { message: 'Orgpolicy deleted successfully' };
  }

  async findAll(): Promise<Orgpolicy[]> {
    return this.orgpolicyModel.find().exec();
  }

  
}
