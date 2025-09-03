import { Module } from '@nestjs/common';
import { EmployeeLocationController } from './employee-location.controller';
import { EmployeeLocationService } from './employee-location.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeLocation, Employeelocationschema } from './schema/employee-location.schema';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';

@Module({
  imports: [
        MongooseModule.forFeature([
          { name: EmployeeLocation.name, schema: Employeelocationschema },
          { name: Employee.name, schema: EmployeeSchema }, 
        ]),
      ],
  controllers: [EmployeeLocationController],
  providers: [EmployeeLocationService]
})
export class EmployeeLocationModule {}
