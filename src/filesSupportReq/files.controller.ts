import { Controller, Post, Param, UploadedFile, UseInterceptors, NotFoundException, Body, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

@Get()
async getAllFiles() {
  return this.filesService.getAllFiles();
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

    const result = await this.filesService.uploadFile(id, file);
    return result;
  }

   @Post('create')
  async createFile(@Body() body: { title: string; description?: string }) {
    return this.filesService.createFile(body.title, body.description);
  }
}
