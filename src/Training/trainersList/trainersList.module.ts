import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainersList, TrainersListSchema } from './schema/trainersList.schema';
import { TrainersListService } from './trainersList.service';
import { TrainersListController } from './trainersList.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrainersList.name, schema: TrainersListSchema }])
  ],
  controllers: [TrainersListController],
  providers: [TrainersListService],
})
export class TrainersListModule {}
