import { Module } from '@nestjs/common';
import { EmployeeLocationController } from './employee-location.controller';
import { EmployeeLocationService } from './employee-location.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employeelocationschema } from './schema/employee-location.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'EmployeeLocation',schema:Employeelocationschema}])],
  controllers: [EmployeeLocationController],
  providers: [EmployeeLocationService]
})
export class EmployeeLocationModule {}
