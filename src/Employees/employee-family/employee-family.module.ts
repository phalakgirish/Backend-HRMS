import { Module } from '@nestjs/common';
import { EmployeeFamilyController } from './employee-family.controller';
import { EmployeeFamilyService } from './employee-family.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employeefamilyschema } from './schema/employee-family.schema';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';

@Module({
 imports: [
    MongooseModule.forFeature([
      { name: 'EmployeeFamily', schema: Employeefamilyschema },
      { name: Employee.name, schema: EmployeeSchema }, 
    ]),
  ],
  controllers: [EmployeeFamilyController],
  providers: [EmployeeFamilyService]
})
export class EmployeeFamilyModule {}
