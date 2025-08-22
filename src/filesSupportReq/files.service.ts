import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FilesDocument } from './files.schema';
import { CreateFileDto } from './create-file.dto';

@Injectable()
export class FilesService {

  constructor(
    @InjectModel(File.name) private readonly fileModel: Model<FilesDocument>,
  ) {}

  async getAllFiles() {
  return this.fileModel.find().sort({ createdAt: -1 }); 
}


  async createFile(createFileDto: CreateFileDto): Promise<File> {
  const { title, description, entryId } = createFileDto;

  if (!entryId) throw new NotFoundException('Entry ID is required');

  const newFile = new this.fileModel({
    fileTitle: title,
    fileDescription: description || '',
    entryId,
    files: [],
    createdAt: new Date(),
  });

  return newFile.save();
}


  async getFilesByEntry(entryId: string): Promise<File[]> {
  return this.fileModel.find({ entryId }).sort({ createdAt: -1 }).exec();
}


// files.service.ts
async uploadFile(id: string, file: Express.Multer.File, fileUrl: string) {
  const fileData = {
    fileTitle: file.originalname,
    fileUrl,
    fileDescription: '',
    createdAt: new Date(),
  };

  const updated = await this.fileModel.findByIdAndUpdate(
    id,
    { $push: { files: fileData } },
    { new: true }
  );

  if (!updated) throw new NotFoundException('File entry not found');
  return updated;
}



  async getFiles(id: string) {
    const request = await this.fileModel.findById(id);
    if (!request) throw new NotFoundException('Support Request not found');

    return request.files || [];
  }

  // async deleteFile(requestId: string, fileIndex: number) {
  //   const request = await this.fileModel.findById(requestId);
  //   if (!request) throw new NotFoundException('Support Request not found');

  //   if (!request.files || !request.files[fileIndex]) {
  //     throw new NotFoundException('File not found');
  //   }

  //   const deletedFile = request.files.splice(fileIndex, 1);
  //   await request.save();
  //   return { message: 'File deleted successfully', file: deletedFile[0] };
  // }

  // async createFile(title: string, description?: string) {
  //   const newFile = new this.fileModel({
  //     fileTitle: title,
  //     fileDescription: description || '',
  //     createdAt: new Date(),
  //     files: [],
  //   });

  //   return newFile.save();
  // }

async deleteFileById(id: string) {
  const result = await this.fileModel.findByIdAndDelete(id);
  if (!result) {
    throw new NotFoundException('File not found');
  }
  // also remove from uploads folder if needed
  return { message: 'File deleted successfully' };
}


}
