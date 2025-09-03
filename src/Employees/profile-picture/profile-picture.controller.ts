// profile-picture.controller.ts
import { Controller, Post, Get, UseInterceptors, UploadedFile, Body, Param, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProfilePictureService } from './profile-picture.service';

@Controller('upload-profile')
export class ProfilePictureController {
  constructor(private readonly profilePictureService: ProfilePictureService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/profiles',
        filename: (req, file, callback) => {
          const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueName + extname(file.originalname));
        },
      }),
    }),
  )
  async uploadProfile(
    @UploadedFile() file: Express.Multer.File,
    @Body('employeeId') employeeId: string,
  ) {
    const imageUrl = `http://localhost:3000/uploads/profiles/${file.filename}`;
    const saved = await this.profilePictureService.updateProfile(employeeId, imageUrl);

    return { message: 'Upload success', imageUrl, data: saved };
  }

  @Get(':employeeId')
  async getProfile(@Param('employeeId') employeeId: string) {
    return this.profilePictureService.getProfile(employeeId);
  }

  async updateProfile(employeeId: string, imageUrl: string) {
  return this.profilePictureService.findOneAndUpdate(
    { employeeId },                          
    { employeeId, profileUrl: imageUrl },   
    { upsert: true, new: true }              
  );
}

@Delete(':employeeId')
async deleteProfile(@Param('employeeId') employeeId: string) {
  return this.profilePictureService.deleteProfile(employeeId);
}

}
