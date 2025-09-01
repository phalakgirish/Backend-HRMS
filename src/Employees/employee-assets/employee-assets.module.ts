import { Module } from '@nestjs/common';
import { EmployeeAssetsController } from './employee-assets.controller';
import { EmployeeAssetsService } from './employee-assets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employeeassetsschema } from './schema/employee-assets.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'EmployeeAssets',schema:Employeeassetsschema}])],
  controllers: [EmployeeAssetsController],
  providers: [EmployeeAssetsService]
})
export class EmployeeAssetsModule {}
