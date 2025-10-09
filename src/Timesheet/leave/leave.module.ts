import { Module } from '@nestjs/common';
import { LeaveController } from './leave.controller';
import { LeaveService } from './leave.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Leave, LeaveSchema } from './schema/leave.schema';
import { Employee, EmployeeSchema } from 'src/Employees/employee/schema/employee.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Leave.name, schema: LeaveSchema },{ name: Employee.name, schema: EmployeeSchema },])
    ],
  controllers: [LeaveController],
  providers: [LeaveService]
})
export class LeaveModule {}
