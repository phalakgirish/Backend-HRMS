import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendanceschema } from './schema/attendance.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Attendance',schema:Attendanceschema}])],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
