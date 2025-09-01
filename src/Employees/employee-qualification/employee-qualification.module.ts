import { Module } from '@nestjs/common';
import { EmployeeQualificationController } from './employee-qualification.controller';
import { EmployeeQualificationService } from './employee-qualification.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employeequalificationschema } from './schema/employee-qualification.schema';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports:[MongooseModule.forFeature([{name:'EmployeeQualification',schema:Employeequalificationschema}]),EmployeeModule],
  controllers: [EmployeeQualificationController],
  providers: [EmployeeQualificationService]
})
export class EmployeeQualificationModule {}
