import { Module } from '@nestjs/common';
import { EmployeeBankaccountController } from './employee-bankaccount.controller';
import { EmployeeBankaccountService } from './employee-bankaccount.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeBankaccount, Employeebankaccountschema } from './schema/employee-bankaccount.schema';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';
import { EmployeeDocument } from '../employee-document/schema/employee-document.schema';

@Module({
imports: [
     MongooseModule.forFeature([
       { name: EmployeeBankaccount.name, schema: Employeebankaccountschema },
       { name: Employee.name, schema: EmployeeSchema }, 
     ]),
   ],  controllers: [EmployeeBankaccountController],
  providers: [EmployeeBankaccountService]
})
export class EmployeeBankaccountModule {}
