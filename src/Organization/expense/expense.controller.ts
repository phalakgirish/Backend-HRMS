import { Expense } from './schema/expense.schema';
import { Controller, Post, Get, Put, Delete, Body, Param, UploadedFile, UseInterceptors, Res, NotFoundException, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ApiTags } from '@nestjs/swagger';
import { existsSync } from 'fs';
import type { Response } from 'express';

@ApiTags('expense')
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('billCopy', {
      storage: diskStorage({
        destination: './uploads/expenses',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  async create(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    if (file) {
      body.billCopy = `/uploads/expenses/${file.filename}`;
    }
    return this.expenseService.create(body);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('billCopy', {
      storage: diskStorage({
        destination: './uploads/expenses',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    if (file) {
      body.billCopy = `/uploads/expenses/${file.filename}`;
    } else {
      const existing = await this.expenseService.findOne(id);
      if (existing) {
        body.billCopy = existing.billCopy;
      }
    }
    return this.expenseService.update(id, body);
  }

  @Get('download/:filename')
  async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'uploads/expenses', filename);

    if (!existsSync(filePath)) {
      throw new NotFoundException(`File ${filename} not found`);
    }

    return res.download(filePath);
  }

@Get('total')
async getExpenseTotal(): Promise<number> {
  return this.expenseService.sumExpenses();
}

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.expenseService.delete(id);
  }

}
