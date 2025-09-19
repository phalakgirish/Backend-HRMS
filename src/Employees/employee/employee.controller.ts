import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete, NotFoundException, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './schema/employee.schema';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  employeeModel: any;
  constructor(private readonly employeeService: EmployeeService) { }


  @Post()
  @ApiOperation({ summary: 'Create a employee' })
  @ApiResponse({ status: 201, description: 'The employee has been created.', type: Employee })
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employee' })
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an employee by ID' })
  @ApiResponse({ status: 200, description: 'Employee fetched successfully', type: Employee })
  async findOne(@Param('id') id: string): Promise<Employee> {
    const employee = await this.employeeService.findOneById(id);
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update employee' })
  @ApiResponse({ status: 200, description: 'employee updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating employee with ID:', id);
      console.log('Update data:', body);
      return await this.employeeService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a employee' })
  async delete(@Param('id') id: string) {
    return this.employeeService.delete(id);
  }

  @Patch(':id/monthly')
  async updateMonthly(
    @Param('id') id: string,
    @Body() body: { monthlyEnabled: boolean; monthly: string },
): Promise<Employee | null> {
    return this.employeeService.updateMonthly(id, body);
  }

   @Get('code/:code')
@ApiOperation({ summary: 'Get an employee by employeeCode' })
@ApiResponse({ status: 200, description: 'Employee fetched successfully', type: Employee })
async findOneByCode(@Param('code') code: string): Promise<Employee> {
  const employee = await this.employeeService.findOneByCode(code);
  if (!employee) {
    throw new NotFoundException(`Employee with code ${code} not found`);
  }
  return employee;
}


}
