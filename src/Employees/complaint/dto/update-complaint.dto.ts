import { PartialType } from '@nestjs/swagger';
import { CreateComplaintDto } from './create-complaint.dto';

export class UpdateComplaint extends PartialType(CreateComplaintDto) {}
