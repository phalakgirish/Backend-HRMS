import { PartialType } from '@nestjs/swagger';
import { CreateExpenseDto } from './create-expense.dto';

export class UpdateExpense extends PartialType(CreateExpenseDto) {}
