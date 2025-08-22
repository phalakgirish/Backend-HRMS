import { Controller, Post, Param, UploadedFile,Res , UseInterceptors, NotFoundException, Body, Get, Query, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateFileDto } from './create-file.dto';
// import { Controller, Get, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }


  @Get()
  async getFiles(@Query('entryId') entryId: string) {
    if (!entryId) throw new NotFoundException('Entry ID required');
    return this.filesService.getFilesByEntry(entryId);
  }



  @Post(':id/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new NotFoundException('No file uploaded');

    const fileUrl = `http://localhost:3000/uploads/${file.filename}`;

    const result = await this.filesService.uploadFile(id, file, fileUrl);

    return {
      message: 'File uploaded successfully',
      fileUrl,   
      ...result,
    };
  }


  @Post('create')
  async createFile(@Body() createFileDto: CreateFileDto) {
    return this.filesService.createFile(createFileDto);
  }

  @Delete(':id')
  async deleteFile(@Param('id') id: string) {
    return this.filesService.deleteFileById(id);
  }

  @Get('download/:filename')
downloadFile(@Param('filename') filename: string, @Res() res: Response) {
  const filePath = `./uploads/${filename}`;
  return res.download(filePath, filename); 
}



}
