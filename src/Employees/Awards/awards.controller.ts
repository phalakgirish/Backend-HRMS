import { Controller, Post, Get, Body, Put, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AwardsService } from './awards.service';
import { CreateAwardsDto } from './dto/create-awards.dto';
import { extname } from 'path';

@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('awardPhoto', {
      storage: diskStorage({
        destination: './uploads/awards',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createAwardsDto: CreateAwardsDto,
  ) {
    if (file) {
      createAwardsDto.awardPhoto = `/uploads/awards/${file.filename}`;
    }
    return this.awardsService.create(createAwardsDto);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('awardPhoto', {
      storage: diskStorage({
        destination: './uploads/awards',
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
    if (file) body.awardPhoto = `/uploads/awards/${file.filename}`;
    return this.awardsService.update(id, body);
  }


  @Get()
  findAll() {
    return this.awardsService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.awardsService.delete(id);
  }
}
