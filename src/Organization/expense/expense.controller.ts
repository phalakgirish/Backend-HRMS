import { Controller, Post, Get, Body, UseGuards, Delete, Param, Put, InternalServerErrorException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from './schema/expense.schema';

@ApiTags('expense')
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) { }


  @Post()
  @ApiOperation({ summary: 'Create an expense' })
  @ApiResponse({ status: 201, description: 'The expense has been created.', type: Expense })
  create(@Body() CreateExpenseDto: CreateExpenseDto): Promise<Expense> {
    return this.expenseService.create(CreateExpenseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all expense' })
  findAll(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update expense' })
  @ApiResponse({ status: 200, description: 'expense updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating expense with ID:', id);
      console.log('Update data:', body);
      return this.expenseService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a expense' })
  async delete(@Param('id') id: string) {
    return this.expenseService.delete(id);
  }
}
