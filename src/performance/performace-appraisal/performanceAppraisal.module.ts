import { Module } from '@nestjs/common';
import { PerformanceAppraisalController } from './performanceAppraisal.controller';
import { PerformanceAppraisalService } from './performanceAppraisal.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceAppraisal, PerformanceAppraisalSchema } from './schema/performanceAppraisal.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: PerformanceAppraisal.name, schema: PerformanceAppraisalSchema }])
    ],
  controllers: [PerformanceAppraisalController],
  providers: [PerformanceAppraisalService]
})
export class PerformanceAppraisalModule {}
