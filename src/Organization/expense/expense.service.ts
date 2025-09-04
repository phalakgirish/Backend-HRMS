import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense, ExpenseDocument } from './schema/expense.schema';

@Injectable()
export class ExpenseService {

  constructor(@InjectModel(Expense.name) private expenseModel: Model<ExpenseDocument>) { }

  async create(CreateExpenseDto: CreateExpenseDto): Promise<Expense> {
    const createdUser = new this.expenseModel(CreateExpenseDto);
    return createdUser.save();
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseModel.find().exec();
  }

  //  async update(id: string, updateDto: Partial<CreateExpenseDto>): Promise<Expense> {
  //   try {
  //     const updated = await this.expenseModel.findByIdAndUpdate(id, updateDto, {
  //       new: true,
  //       runValidators: true,
  //     });

  //     if (!updated) {
  //       throw new NotFoundException(`Expense with ID ${id} not found`);
  //     }

  //     return updated;
  //   } catch (error) {
  //     console.error('Mongoose update error:', error.message, error);
  //     throw new InternalServerErrorException('Error updating Expense');
  //   }
  // }

  async update(id: string, updateDto: Partial<CreateExpenseDto>): Promise<Expense> {
  const updated = await this.expenseModel.findByIdAndUpdate(id, updateDto, {
    new: true,
    runValidators: true,
  });

  if (!updated) {
    throw new NotFoundException(`Expense with ID ${id} not found`);
  }

  return updated;
}


  async findOne(id: string): Promise<Expense | null> {
    return this.expenseModel.findById(id).exec();
  }


  async delete(id: string): Promise<{ message: string }> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }

    const result = await this.expenseModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Expense with id ${id} not found`);
    }

    return { message: 'Expense deleted successfully' };
  }


}
