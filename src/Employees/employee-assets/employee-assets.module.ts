import { Module } from '@nestjs/common';
import { EmployeeAssetsController } from './employee-assets.controller';
import { EmployeeAssetsService } from './employee-assets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeAssets, Employeeassetsschema } from './schema/employee-assets.schema';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';

@Module({
 imports: [
        MongooseModule.forFeature([
          { name: EmployeeAssets.name, schema: Employeeassetsschema },
          { name: Employee.name, schema: EmployeeSchema }, 
        ]),
      ],
  controllers: [EmployeeAssetsController],
  providers: [EmployeeAssetsService]
})
export class EmployeeAssetsModule {}
