import { Module } from '@nestjs/common';
import { PerformanceIndicatorController } from './performanceIndicator.controller';
import { PerformanceIndicatorService } from './performanceIndicator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceIndicator, PerformanceIndicatorSchema } from './schema/performanceIndicator.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: PerformanceIndicator.name, schema: PerformanceIndicatorSchema }])
    ],
  controllers: [PerformanceIndicatorController],
  providers: [PerformanceIndicatorService]
})
export class PerformanceIndicatorModule {}
