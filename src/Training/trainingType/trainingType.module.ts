import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingType, TrainingTypeSchema } from './schema/trainingType.schema';
import { TrainingTypeService } from './trainingType.service';
import { TrainingTypeController } from './trainingType.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrainingType.name, schema: TrainingTypeSchema }])
  ],
  controllers: [TrainingTypeController],
  providers: [TrainingTypeService],
})
export class TrainingTypeModule {}
