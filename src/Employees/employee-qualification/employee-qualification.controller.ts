import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeQualificationService } from './employee-qualification.service';
import { EmployeeQualification } from './schema/employee-qualification.schema';
import { CreateEmployeeQualificationDto } from './dto/create-employee-qualification.dto';
import { UpdateEmployeeQualificationDto } from './dto/update-employee-qualification.dto';

@Controller('employee-qualification')
export class EmployeeQualificationController {
  constructor(private employeeQualificationService: EmployeeQualificationService,
  ) { }

  @Post()
  async create(@Body() dto: CreateEmployeeQualificationDto) {
    return this.employeeQualificationService.create(dto);
  }



  @Get('employee/:employeeId')
  async getFamilyByEmployeeId(
    @Param('employeeId') employeeId: string,
  ) {
    return this.employeeQualificationService.findAllByEmpId(employeeId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.employeeQualificationService.delete(id);
  }

  @Put(':id')
  async updateFamily(
    @Param('id') id: string,
    @Body() dto: Partial<CreateEmployeeQualificationDto>,
  ) {
    return this.employeeQualificationService.update(id, dto);
  }

}
