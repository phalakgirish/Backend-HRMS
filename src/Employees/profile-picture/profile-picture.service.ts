// profile-picture.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProfilePicture } from './schema/profile-picture.schema';

@Injectable()
export class ProfilePictureService {
  findOneAndUpdate(arg0: { employeeId: string; }, arg1: { employeeId: string; profileUrl: string; }, arg2: { upsert: boolean; new: boolean; }) {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(ProfilePicture.name)
    private profilePictureModel: mongoose.Model<ProfilePicture>,
  ) {}

  async updateProfile(employeeId: string, imageUrl: string) {
    return this.profilePictureModel.findOneAndUpdate(
      { employeeId },
      { employeeId, profileUrl: imageUrl },
      { new: true, upsert: true }, 
    );
  }

  async getProfile(employeeId: string) {
    return this.profilePictureModel.findOne({ employeeId }).exec();
  }

  async deleteProfile(employeeId: string) {
  const deleted = await this.profilePictureModel.findOneAndDelete({ employeeId });
  if (!deleted) {
    throw new NotFoundException('Profile not found');
  }
  return { message: 'Profile deleted successfully' };
}

}
