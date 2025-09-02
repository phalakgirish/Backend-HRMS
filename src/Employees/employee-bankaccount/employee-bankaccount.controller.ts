import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EmployeeBankaccountService } from './employee-bankaccount.service';
import { EmployeeBankaccount } from './schema/employee-bankaccount.schema';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname, join } from 'path';
import * as fs from 'fs';
import type { Response } from 'express';

@Controller('employee-bankaccount')
export class EmployeeBankaccountController {
    constructor(private employeeBankAccountService: EmployeeBankaccountService,
    ) { }

    @Get()
    async getAllBankAccountDts(
    ): Promise<EmployeeBankaccount[]> {
        return this.employeeBankAccountService.findAll();
    }


    @Get('download/:filename')
    downloadFile(@Param('filename') filename: string, @Res() res: Response) {
        const filePath = join(process.cwd(), 'uploads', filename);

        if (!fs.existsSync(filePath)) {
            return res.status(404).send('File not found');
        }

        res.download(filePath, filename, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error downloading file');
            }
        });
    }


    @Get('employee/:employeeId')
    async getByEmployeeId(@Param('employeeId') employeeId: string) {
        return this.employeeBankAccountService.findAllByEmpId(employeeId);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.employeeBankAccountService.deleteById(id);
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('document_file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
                },
            }),
        }),
    )
    async create(@UploadedFile() file: Express.Multer.File, @Body() dto: any) {
        if (file) dto.account_bank_doc = `/uploads/${file.filename}`;

        return this.employeeBankAccountService.create(dto);
    }

    @Put(':id')
    @UseInterceptors(
        FileInterceptor('document_file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
                },
            }),
        }),
    )
    async update(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: any,
    ) {
        if (file) dto.account_bank_doc = `/uploads/${file.filename}`;

        return this.employeeBankAccountService.update(id, dto);
    }

}
