import { Module } from '@nestjs/common';
import { EmployeeExperienceController } from './employee-experience.controller';
import { EmployeeExperienceService } from './employee-experience.service';
import { Employeeexperienceschema } from './schema/employee-experience.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'EmployeeExperience',schema:Employeeexperienceschema}])],
  controllers: [EmployeeExperienceController],
  providers: [EmployeeExperienceService]
})
export class EmployeeExperienceModule {}
