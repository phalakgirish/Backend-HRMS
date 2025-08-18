import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingList, TrainingListSchema } from './schema/trainingList.schema';
import { TrainingListService } from './trainingList.service';
import { TrainingListController } from './trainingList.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrainingList.name, schema: TrainingListSchema }])
  ],
  controllers: [TrainingListController],
  providers: [TrainingListService],
})
export class TrainingListModule {}
