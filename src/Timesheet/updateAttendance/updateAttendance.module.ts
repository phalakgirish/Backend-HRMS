import { Module } from '@nestjs/common';
import { UpdateAttendanceController } from './updateAttendance.controller';
import { UpdateAttendanceService } from './updateAttendance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UpdateAttendance, UpdateAttendanceSchema } from './schema/updateAttendance.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: UpdateAttendance.name, schema: UpdateAttendanceSchema }])
    ],
  controllers: [UpdateAttendanceController],
  providers: [UpdateAttendanceService]
})
export class UpdateAttendanceModule {}
