import { Module } from '@nestjs/common';
import { JobCandidateController } from './JobCandidate.controller';
import { JobCandidateService } from './JobCandidate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobCandidate, JobCandidateSchema } from './schema/JobCandidate.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: JobCandidate.name, schema: JobCandidateSchema }])
    ],
  controllers: [JobCandidateController],
  providers: [JobCandidateService]
})
export class JobCandidateModule {}
