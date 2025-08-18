import { Module } from '@nestjs/common';
import { EmployeeExitController } from './employeeExit.controller';
import { EmployeeExitService } from './employeeExit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeExit, EmployeeExitSchema } from './schema/employeeExit.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: EmployeeExit.name, schema: EmployeeExitSchema }])
    ],
  controllers: [EmployeeExitController],
  providers: [EmployeeExitService]
})
export class EmployeeExitModule {}
