import { Module } from '@nestjs/common';
import { EmployeeExperienceController } from './employee-experience.controller';
import { EmployeeExperienceService } from './employee-experience.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from '../employee/employee.module';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';
import { EmployeeExperience, Employeeexperienceschema } from './schema/employee-experience.schema';


@Module({
  imports: [
     MongooseModule.forFeature([
       { name: EmployeeExperience.name, schema: Employeeexperienceschema },
       { name: Employee.name, schema: EmployeeSchema }, 
     ]),
   ],
  controllers: [EmployeeExperienceController],
  providers: [EmployeeExperienceService]
})
export class EmployeeExperienceModule {}
