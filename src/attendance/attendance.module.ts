import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceSchema } from './schema/attendance.schema';
import { Employee, EmployeeSchema } from 'src/Employees/employee/schema/employee.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Attendance',schema:AttendanceSchema},
        { name: Employee.name, schema: EmployeeSchema }, // <-- add this
]),
  ],

  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
