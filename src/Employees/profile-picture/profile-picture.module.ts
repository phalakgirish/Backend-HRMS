// profile-picture.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilePictureController } from './profile-picture.controller';
import { ProfilePictureService } from './profile-picture.service';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';
import { ProfilePicture, ProfilePictureSchema } from './schema/profile-picture.schema';

@Module({
  imports: [
     MongooseModule.forFeature([
       { name: ProfilePicture.name, schema: ProfilePictureSchema },
       { name: Employee.name, schema: EmployeeSchema }, 
     ]),
   ], 
  controllers: [ProfilePictureController],
  providers: [ProfilePictureService],
})
export class ProfilePictureModule {}
