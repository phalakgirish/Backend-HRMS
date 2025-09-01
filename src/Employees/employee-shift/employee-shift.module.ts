import { Module } from '@nestjs/common';
import { EmployeeShiftController } from './employee-shift.controller';
import { EmployeeShiftService } from './employee-shift.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employeeshiftschema } from './schema/employee-shift.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'EmployeeShift',schema:Employeeshiftschema}])],
  controllers: [EmployeeShiftController],
  providers: [EmployeeShiftService]
})
export class EmployeeShiftModule {}
