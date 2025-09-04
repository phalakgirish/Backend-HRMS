import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  async getAllSettings(): Promise<any> {
    return this.settingsService.findAll();
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'payslip_logo', maxCount: 1 },
        { name: 'job_list_logo', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req: any, file: any, cb: any) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(
              Math.random() * 1e9,
            )}`;
            const fileExt = extname(file.originalname);
            const fileName = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
            cb(null, fileName);
          },
        }),
      },
    ),
  )
  async createSettings(
    @Body() body: any,
    @UploadedFiles() files: Record<string, Express.Multer.File[]>,
  ): Promise<any> {
    const fileData: any = {};
    for (const field in files) {
      if (files[field] && files[field][0]) {
        fileData[field] = files[field][0].filename;
      }
    }

    // parse array fields from frontend
    if (body.file_format && typeof body.file_format === 'string') {
      try {
        body.file_format = JSON.parse(body.file_format);
      } catch {
        body.file_format = [body.file_format];
      }
    }

    if (body.job_app_format && typeof body.job_app_format === 'string') {
      try {
        body.job_app_format = JSON.parse(body.job_app_format);
      } catch {
        body.job_app_format = [body.job_app_format];
      }
    }

    return this.settingsService.create({ ...body, ...fileData });
  }

  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'payslip_logo', maxCount: 1 },
        { name: 'job_list_logo', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req: any, file: any, cb: any) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(
              Math.random() * 1e9,
            )}`;
            const fileExt = extname(file.originalname);
            const fileName = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
            cb(null, fileName);
          },
        }),
      },
    ),
  )
  async updateSettings(
    @Param('id') id: string,
    @Body() body: any,
    @UploadedFiles() files: Record<string, Express.Multer.File[]>,
  ): Promise<any> {
    const fileData: any = {};
    for (const field in files) {
      if (files[field] && files[field][0]) {
        fileData[field] = files[field][0].filename;
      }
    }

    // parse arrays
    if (body.file_format && typeof body.file_format === 'string') {
      try {
        body.file_format = JSON.parse(body.file_format);
      } catch {
        body.file_format = [body.file_format];
      }
    }

    if (body.job_app_format && typeof body.job_app_format === 'string') {
      try {
        body.job_app_format = JSON.parse(body.job_app_format);
      } catch {
        body.job_app_format = [body.job_app_format];
      }
    }

    return this.settingsService.updateById(id, { ...body, ...fileData });
  }
}
