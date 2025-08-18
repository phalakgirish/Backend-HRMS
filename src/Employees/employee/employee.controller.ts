import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './schema/employee.schema';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
    employeeModel: any;
  constructor(private readonly employeeService: EmployeeService) {}
    

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
  
}
