import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilePicttureDto } from './create-profile-picture.dto';


export class UpdateProfilePicttureDto extends PartialType(CreateProfilePicttureDto) {}
