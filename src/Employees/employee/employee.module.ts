import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schema/employee.schema';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])
    ],
      exports: [MongooseModule],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
