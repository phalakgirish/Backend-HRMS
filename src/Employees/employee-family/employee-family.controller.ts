import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeFamilyService } from './employee-family.service';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateEmployeeFamilyDto } from './dto/create-employee-family.dto';

@Controller('employee-family')
export class EmployeeFamilyController {
  constructor(private employeeFamilyService: EmployeeFamilyService) { }

  // @Post('employee/:employeeId')
  // async createFamily(
  //     @Param('employeeId') employeeId: string,
  //     @Body() dto: CreateEmployeeFamilyDto,
  // ) {
  //     dto.employeeId = employeeId; // employeeId must be string
  //     return this.employeeFamilyService.create(dto);
  // }

  @Post()
  async create(@Body() dto: CreateEmployeeFamilyDto) {
    return this.employeeFamilyService.create(dto);
  }



  @Get('employee/:employeeId')
  async getFamilyByEmployeeId(
    @Param('employeeId') employeeId: string,
  ) {
    return this.employeeFamilyService.findAllByemployeeId(employeeId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.employeeFamilyService.delete(id);
  }

  @Put(':id')
  async updateFamily(
    @Param('id') id: string,
    @Body() dto: Partial<CreateEmployeeFamilyDto>,
  ) {
    return this.employeeFamilyService.update(id, dto);
  }

}
