import { Body, Controller, Get, Param, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('settings')
export class SettingsController {
    constructor(private settingsService:SettingsService,
    ){
        
    }

    @Get()
    async getAllBanner(

    ):Promise<any>{
        return this.settingsService.findAll();
    }

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'payslip_logo', maxCount: 1 },
                { name: 'job_list_logo', maxCount: 1 },
            ], {
          storage: diskStorage({
            destination: './uploads', // Directory to save banner images
            filename: (req:any, file:any, callback:any) => {
              const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
              const fileExt = extname(file.originalname);
              const fileName = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
              callback(null, fileName);
            },
          }),
        }),
    )
    async createSettings(
        @Body()
        settings:any,
        @UploadedFiles() files: { payslip_logo?: Express.Multer.File[]; job_list_logo?: Express.Multer.File[] }
    ):Promise<any>{
        var payslip_logoImage:any
        var job_list_logoImage:any

        if(files.payslip_logo != undefined)
        {
          payslip_logoImage = files.payslip_logo[0].filename;
        }
        else
        {
          payslip_logoImage = null;
        }

        if(files.job_list_logo != undefined)
        {
          job_list_logoImage = files.job_list_logo[0].filename;
        }
        else
        {
          job_list_logoImage = null;
        }
        return this.settingsService.create({...settings,payslip_logoImage,job_list_logoImage});
    }

    @Put(':id')
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'payslip_logo', maxCount: 1 },
                { name: 'job_list_logo', maxCount: 1 },
            ], {
          storage: diskStorage({
            destination: './uploads', // Directory to save banner images
            filename: (req:any, file:any, callback:any) => {
              const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
              const fileExt = extname(file.originalname);
              const fileName = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
              callback(null, fileName);
            },
          }),
        }),
    )
    async updateSettings(
        @Param('id')
        id:string,
        @Body()
        settings:any,
        @UploadedFiles() files: { payslip_logo?: Express.Multer.File[]; job_list_logo?: Express.Multer.File[] }
    ):Promise<any>{
        var payslip_logoImage:any
        var job_list_logoImage:any

        if(files.payslip_logo != undefined)
        {
          payslip_logoImage = files.payslip_logo[0].filename;
        }
        else
        {
          payslip_logoImage = null;
        }

        if(files.job_list_logo != undefined)
        {
          job_list_logoImage = files.job_list_logo[0].filename;
        }
        else
        {
          job_list_logoImage = null;
        }
        return this.settingsService.updateById(id,{...settings,payslip_logoImage,job_list_logoImage});
    }
}
