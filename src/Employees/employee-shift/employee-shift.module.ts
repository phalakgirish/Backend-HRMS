import { Module } from '@nestjs/common';
import { EmployeeShiftController } from './employee-shift.controller';
import { EmployeeShiftService } from './employee-shift.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeShift, Employeeshiftschema } from './schema/employee-shift.schema';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';

@Module({
   imports: [
      MongooseModule.forFeature([
        { name: EmployeeShift.name, schema: Employeeshiftschema },
        { name: Employee.name, schema: EmployeeSchema }, 
      ]),
    ],
  controllers: [EmployeeShiftController],
  providers: [EmployeeShiftService]
})
export class EmployeeShiftModule {}
