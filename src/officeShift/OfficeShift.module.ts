import { Module } from '@nestjs/common';
import { OfficeShiftController } from './OfficeShift.controller';
import { OfficeShiftService } from './OfficeShift.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OfficeShift, OfficeShiftSchema } from './schema/OfficeShift.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: OfficeShift.name, schema: OfficeShiftSchema }])
    ],
  controllers: [OfficeShiftController],
  providers: [OfficeShiftService]
})
export class OfficeShiftModule {}
