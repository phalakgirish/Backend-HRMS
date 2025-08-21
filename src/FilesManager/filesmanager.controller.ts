import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilesManagerService } from './filesmanager.service';
import { CreateFilesManagerDto } from './dto/create-filesManager.dto';
import { FilesManager } from './schema/filesManager.schema';
import type { Response } from 'express';
import { extname, join } from 'path';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('files-manager')
@Controller('files-manager')
export class FilesManagerController {
  filesService: any;
  constructor(private readonly filesManagerService: FilesManagerService) { }


  @Post()
  @ApiOperation({ summary: 'Create a data' })
  @ApiResponse({ status: 201, description: 'The data has been created.', type: FilesManager })
  create(@Body() createFilesManagerDto: CreateFilesManagerDto): Promise<FilesManager> {
    return this.filesManagerService.create(createFilesManagerDto);
  }

  @Post('upload')
@UseInterceptors(FileInterceptor('file', {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = join(process.cwd(), 'uploads');
      if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // keep original filename
    },
  }),
}))
async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
  if (!file) throw new Error('File not received');
  const department = body.department; // <-- define it

  const stats = fs.statSync(file.path); // get file size
  const size = `${Math.round(stats.size / 1024)} KB`;
  const extension = file.originalname.split('.').pop() || '';

 const savedFile = await this.filesManagerService.create({
    department,      
    file: file.filename,
    originalName: file.originalname,
    size,
    extension,
    uploadedDate: new Date().toISOString(),
  });

  return { message: 'File uploaded successfully', filename: savedFile.filename };
}


  @Get()
  @ApiOperation({ summary: 'Get all data' })
  findAll(): Promise<FilesManager[]> {
    return this.filesManagerService.findAll();
  }

  @Get('download/:filename')
  async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'uploads', filename);

    console.log('Looking for file:', filePath); // 👈 Add this

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    return res.download(filePath);
  }

@Get('list')
async getFilesList() {
  const filesFromDb = await this.filesManagerService.findAll(); // fetch all from DB
  return filesFromDb.map(file => ({
    filename: file.file,          // actual saved filename
    originalName: file.originalName,
    url: `http://localhost:3000/files-manager/download/${file.file}`,
  }));
}




  @Put(':id')
  @ApiOperation({ summary: 'Update data' })
  @ApiResponse({ status: 200, description: 'data updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating data with ID:', id);
      console.log('Update data:', body);
      return await this.filesManagerService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }



  @Delete(':id')
  @ApiOperation({ summary: 'Delete a data' })
  async delete(@Param('id') id: string) {
    return this.filesManagerService.delete(id);
  }

}
