import { PartialType } from '@nestjs/swagger';
import { CreateJobCandidateDto } from './create-JobCandidate.dto';

export class UpdateJobCandidate extends PartialType(CreateJobCandidateDto) {}
