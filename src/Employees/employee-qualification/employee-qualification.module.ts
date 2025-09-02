import { Module } from '@nestjs/common';
import { EmployeeQualificationController } from './employee-qualification.controller';
import { EmployeeQualificationService } from './employee-qualification.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeQualification, Employeequalificationschema } from './schema/employee-qualification.schema';
import { EmployeeModule } from '../employee/employee.module';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';

@Module({
 imports: [
    MongooseModule.forFeature([
      { name: EmployeeQualification.name, schema: Employeequalificationschema },
      { name: Employee.name, schema: EmployeeSchema }, 
    ]),
  ],  controllers: [EmployeeQualificationController],
  providers: [EmployeeQualificationService],
})
export class EmployeeQualificationModule {}
