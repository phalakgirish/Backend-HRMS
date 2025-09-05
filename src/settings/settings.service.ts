import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Settings } from './schema/settings.schema';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Settings.name)
    private readonly settingsModel: mongoose.Model<Settings>,
  ) {}

// async findAll(): Promise<any> {
//   const settings = await this.settingsModel.find().exec();
//   return settings; 
// }

async findAll(): Promise<any> {
  const defaults = [
    'doc','docx','jpeg','jpg','pdf','txt','excel',
    'gif','png','mp3','mp4','flv','xls'
  ];

  const settings = await this.settingsModel.find().lean();

  // Merge defaults for each settings document
  return settings.map(s => ({
    ...s,
    job_app_format: s.job_app_format?.length ? s.job_app_format : defaults,
  }));
}


  async create(settings: any): Promise<any> {
    const newSettings = new this.settingsModel(settings);
    return newSettings.save();
  }

  async updateById(id: string, settings: any): Promise<any> {
    const existing = await this.settingsModel.findById(id).exec();
    if (!existing) {
      throw new NotFoundException(`Setting with id ${id} not found`);
    }

    for (const key of Object.keys(existing.toObject())) {
      if (settings[key] === null || settings[key] === undefined) {
        settings[key] = existing[key];
      }
    }

    return this.settingsModel.findByIdAndUpdate(id, settings, {
      new: true,
      runValidators: true,
    });
  }
}
