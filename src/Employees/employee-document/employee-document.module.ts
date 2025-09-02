import { Module } from '@nestjs/common';
import { EmployeeDocumentController } from './employee-document.controller';
import { EmployeeDocumentService } from './employee-document.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeDocument, Employeedocumentschema } from './schema/employee-document.schema';
import { Employee, EmployeeSchema } from '../employee/schema/employee.schema';

@Module({
  imports: [
     MongooseModule.forFeature([
       { name: EmployeeDocument.name, schema: Employeedocumentschema },
       { name: Employee.name, schema: EmployeeSchema }, 
     ]),
   ],
  controllers: [EmployeeDocumentController],
  providers: [EmployeeDocumentService]
})
export class EmployeeDocumentModule {}
