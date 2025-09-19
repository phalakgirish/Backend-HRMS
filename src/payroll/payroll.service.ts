import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { Payroll, PayrollDocument } from './schema/payroll.schema';

@Injectable()
export class PayrollService {

  constructor(@InjectModel(Payroll.name) private payrollModel: Model<PayrollDocument>) {}

async create(createPayrollDto: CreatePayrollDto): Promise<Payroll> {
  const createdPolicy = new this.payrollModel({
    ...createPayrollDto,
    createdAt: Date.now(), 
  });
  return createdPolicy.save();
}



async update(id: string, updateDto: Partial<CreatePayrollDto>): Promise<Payroll> {
  try {
    console.log('Updating Payrolly with ID:', id);
    console.log('Update data:', updateDto);

    const updated = await this.payrollModel.findByIdAndUpdate(id, updateDto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException(`Payroll with ID ${id} not found`);
    }

    return updated;
  } catch (error) {
    console.error('Service update error:', error);
    throw new InternalServerErrorException('Error updating Payroll');
  }
}

  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting Payroll with ID:', id); 
    const result = await this.payrollModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Payroll with id ${id} not found`);
    }
    return { message: 'Payroll deleted successfully' };
  }

  async findAll(): Promise<Payroll[]> {
    return this.payrollModel.find().exec();
  }

  
}
