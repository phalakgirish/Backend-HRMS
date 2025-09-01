import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EmployeeDocumentService } from './employee-document.service';
import { EmployeeDocument } from './schema/employee-document.schema';
import { CreateEmployeeDocumentDto } from './dto/create-employee-document.dto';
import { UpdateEmployeeDocumentDto } from './dto/update-employee-document.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('employee-document')
export class EmployeeDocumentController {
    constructor(private employeeDocumentService:EmployeeDocumentService,
    ){}

    @Get()
    async getAllDocumentDts(
    ):Promise<EmployeeDocument[]>{
        return this.employeeDocumentService.findAll();
    }

    @Get('employee/:emp_id')
    async getAllDocumentDtsByEmpId(
        @Param()
        emp_id:any
    ):Promise<EmployeeDocument[]>{
            
        return this.employeeDocumentService.findAllByEmpId(emp_id);
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('document_file', {
            storage: diskStorage({
            destination: './uploads', // Directory to save banner images
            filename: (req:any, file:any, callback:any) => {
                const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                const fileExt = extname(file.originalname);
                const fileName = `document-${uniqueSuffix}${fileExt}`;
                callback(null, fileName);
            },
            }),
        }),
    )
    async createEmployeeDocument(
        @Body()
        documentDts:CreateEmployeeDocumentDto,
        @UploadedFile() file: Express.Multer.File,
    ):Promise<any>{   

        const document_file = file?.filename;
        return this.employeeDocumentService.create({...documentDts,document_file});
    }

    @Get(':doc_id')
    async getDocumentById(
        @Param()
        doc_id:any,
    ):Promise<EmployeeDocument>{
            
        return this.employeeDocumentService.findById(doc_id);
    }

    @Put(':doc_id')
    @UseInterceptors(
        FileInterceptor('document_file', {
            storage: diskStorage({
            destination: './uploads', // Directory to save banner images
            filename: (req:any, file:any, callback:any) => {
                const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                const fileExt = extname(file.originalname);
                const fileName = `document-${uniqueSuffix}${fileExt}`;
                callback(null, fileName);
            },
            }),
        }),
    )
    async updateDocumentById(
        @Param()
        doc_id:any,
        @Body()
        documentDts:UpdateEmployeeDocumentDto,
        @UploadedFile() file: Express.Multer.File,
    ):Promise<any>{
        
        const document_file = file?.filename;
        return this.employeeDocumentService.updateById(doc_id,{...documentDts,document_file});
    }

    @Delete(':doc_id')
    async deleteDocumentById(
        @Param()
        doc_id:any,
    ):Promise<any>{        
        return this.employeeDocumentService.deleteById(doc_id);
    }
}
