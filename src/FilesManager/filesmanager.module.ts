import { Module } from '@nestjs/common';
import { FilesManagerController } from './filesmanager.controller';
import { FilesManagerService } from './filesmanager.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesManager, FilesManagerSchema } from './schema/filesManager.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: FilesManager.name, schema: FilesManagerSchema }])
    ],
  controllers: [FilesManagerController],
  providers: [FilesManagerService]
})
export class FilesManagerModule {}
