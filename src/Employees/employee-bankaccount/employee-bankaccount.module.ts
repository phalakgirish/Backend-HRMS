import { Module } from '@nestjs/common';
import { EmployeeBankaccountController } from './employee-bankaccount.controller';
import { EmployeeBankaccountService } from './employee-bankaccount.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employeebankaccountschema } from './schema/employee-bankaccount.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'EmployeeBankaccount',schema:Employeebankaccountschema}])],
  controllers: [EmployeeBankaccountController],
  providers: [EmployeeBankaccountService]
})
export class EmployeeBankaccountModule {}
