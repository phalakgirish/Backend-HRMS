import { Module } from '@nestjs/common';
import { EmployeeDocumentController } from './employee-document.controller';
import { EmployeeDocumentService } from './employee-document.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employeedocumentschema } from './schema/employee-document.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'EmployeeDocument',schema:Employeedocumentschema}])],
  controllers: [EmployeeDocumentController],
  providers: [EmployeeDocumentService]
})
export class EmployeeDocumentModule {}
