import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FilesDocument } from './files.schema';

@Injectable()
export class FilesService {

  constructor(
    @InjectModel(File.name) private readonly fileModel: Model<FilesDocument>,
  ) {}

  async getAllFiles() {
  return this.fileModel.find().sort({ createdAt: -1 }); // latest first
}

  async uploadFile(id: string, file: Express.Multer.File) {
    const request = await this.fileModel.findById(id);
    if (!request) throw new NotFoundException('Support Request not found');

    request.files = request.files || [];

    request.files.push({
      fileTitle: file.originalname,
      fileDescription: '',
      fileUrl: file.path, 
      createdAt: new Date(),
    });

    await request.save();

    return { message: 'File uploaded successfully', file: request.files.at(-1) };
  }

  async getFiles(id: string) {
    const request = await this.fileModel.findById(id);
    if (!request) throw new NotFoundException('Support Request not found');

    return request.files || [];
  }

  async deleteFile(requestId: string, fileIndex: number) {
    const request = await this.fileModel.findById(requestId);
    if (!request) throw new NotFoundException('Support Request not found');

    if (!request.files || !request.files[fileIndex]) {
      throw new NotFoundException('File not found');
    }

    const deletedFile = request.files.splice(fileIndex, 1);
    await request.save();
    return { message: 'File deleted successfully', file: deletedFile[0] };
  }

  async createFile(title: string, description?: string) {
    const newFile = new this.fileModel({
      fileTitle: title,
      fileDescription: description || '',
      createdAt: new Date(),
      files: [],
    });

    return newFile.save();
  }
}
