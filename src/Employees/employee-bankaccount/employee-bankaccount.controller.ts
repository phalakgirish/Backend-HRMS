import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EmployeeBankaccountService } from './employee-bankaccount.service';
import { EmployeeBankaccount } from './schema/employee-bankaccount.schema';
import { CreateEmployeeBankaccountDto } from './dto/create-employee-bankaccount.dto';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { UpdateEmployeeBankaccountDto } from './dto/update-employee-bankaccount.dto';

@Controller('employee-bankaccount')
export class EmployeeBankaccountController {
    constructor(private employeeBankAccountService:EmployeeBankaccountService,
    ){}

    @Get()
    async getAllBankAccountDts(
    ):Promise<EmployeeBankaccount[]>{
        return this.employeeBankAccountService.findAll();
    }

    @Get('employee/:emp_id')
    async getAllBankAccountDtsByEmpId(
        @Param()
        emp_id:any
    ):Promise<EmployeeBankaccount[]>{
            
        return this.employeeBankAccountService.findAllByEmpId(emp_id);
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('account_bank_doc', {
            storage: diskStorage({
            destination: './uploads', // Directory to save banner images
            filename: (req:any, file:any, callback:any) => {
                const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                const fileExt = extname(file.originalname);
                const fileName = `bankaccdoc-${uniqueSuffix}${fileExt}`;
                callback(null, fileName);
            },
            }),
        }),
    )
    async createEmployeeBankAccount(
        @Body()
        accountDts:CreateEmployeeBankaccountDto,
        @UploadedFile() file: Express.Multer.File,
    ):Promise<any>{  
        
        const account_bank_doc = file?.filename;
        return this.employeeBankAccountService.create({...accountDts,account_bank_doc});
    }

    @Get(':acc_id')
    async getBankAccountById(
        @Param()
        acc_id:any,
    ):Promise<EmployeeBankaccount>{
            
        return this.employeeBankAccountService.findById(acc_id);
    }

    @Put(':acc_id')
    @UseInterceptors(
        FileInterceptor('account_bank_doc', {
            storage: diskStorage({
            destination: './uploads', // Directory to save banner images
            filename: (req:any, file:any, callback:any) => {
                const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                const fileExt = extname(file.originalname);
                const fileName = `bankaccdoc-${uniqueSuffix}${fileExt}`;
                callback(null, fileName);
            },
            }),
        }),
    )
    async updateDocumentById(
        @Param()
        acc_id:any,
        @Body()
        accountDts:UpdateEmployeeBankaccountDto,
        @UploadedFile() file: Express.Multer.File,
    ):Promise<any>{
    
        var account_bank_doc = file?.filename
        return this.employeeBankAccountService.updateById(acc_id,{...accountDts,account_bank_doc});
    }

    @Delete(':acc_id')
    async deleteBankAccountById(
        @Param()
        acc_id:any,
    ):Promise<any>{        
        return this.employeeBankAccountService.deleteById(acc_id);
    }
}
