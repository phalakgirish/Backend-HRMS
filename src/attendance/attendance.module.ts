import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceSchema } from './schema/attendance.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Attendance',schema:AttendanceSchema}])],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
