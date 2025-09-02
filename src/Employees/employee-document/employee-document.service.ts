import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeDocument } from './schema/employee-document.schema';
import mongoose, { Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEmployeeDocumentDto } from './dto/create-employee-document.dto';
import { UpdateEmployeeDocumentDto } from './dto/update-employee-document.dto';
import { Employee } from '../employee/schema/employee.schema';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class EmployeeDocumentService {
 
    constructor(
        @InjectModel(EmployeeDocument.name)
        private employeeDocumentModel: mongoose.Model<EmployeeDocument>,
        @InjectModel(Employee.name)
        private employeeModel: mongoose.Model<Employee>,
    ) { }


    // async findAllByEmpId(employeeId: string) {
    //     const docs = await this.employeeDocumentModel.find({
    //         employeeId: new Types.ObjectId(employeeId),
    //     });
    //     return docs;
    // }

    async findAllByEmpId(employeeId: string) {
  return this.employeeDocumentModel.find({ employeeId: new Types.ObjectId(employeeId) });
}

async create(dto: any) {
  const employee = await this.employeeModel.findById(dto.employeeId);
  if (!employee) throw new NotFoundException('Employee not found');

  dto.employeeId = employee._id;
  return this.employeeDocumentModel.create(dto);
}


    // async create(dto: any): Promise<any> {
    //     const employee = await this.employeeModel.findById(dto.employeeId);
    //     if (!employee) throw new NotFoundException('Employee not found');

    //     dto.employeeId = employee._id;
    //     return await this.employeeDocumentModel.create(dto);
    // }

    async findById(doc_id: any): Promise<EmployeeDocument> {

        const employeeDocumentDts = await this.employeeDocumentModel.findOne({ _id: new ObjectId(doc_id) })
            .exec();
        if (!employeeDocumentDts) {
            throw new NotFoundException('Document not found')
        }

        return employeeDocumentDts;
    }

    async updateById(doc_id: any, documentDts: any): Promise<any> {

        return await this.employeeDocumentModel.findByIdAndUpdate(doc_id, documentDts, {
            new: true,
            runValidators: true
        })

    }

    async deleteById(id: string) {
          const result = await this.employeeDocumentModel.findByIdAndDelete(id);
          if (!result) throw new NotFoundException('Qualification not found');
          return { message: 'Deleted successfully' };
      }


     async update(id: string, updateDto: UpdateEmployeeDocumentDto) {
           const existing = await this.employeeDocumentModel.findById(id);
           if (!existing) throw new NotFoundException('Document not found');
   
           return this.employeeDocumentModel.findByIdAndUpdate(
               id,
               { ...updateDto, employeeId: existing.employeeId },
               { new: true },
           );
       }
}
