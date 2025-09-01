import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Settingschema } from './schema/settings.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Settings',schema:Settingschema}])],
  controllers: [SettingsController],
  providers: [SettingsService]
})
export class SettingsModule {}
