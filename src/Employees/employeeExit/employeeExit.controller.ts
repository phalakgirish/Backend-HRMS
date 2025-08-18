import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeeExitService } from './employeeExit.service';
import { CreateEmployeeExitDto } from './dto/create-EmployeeExit.dto';
import { EmployeeExit } from './schema/employeeExit.schema';

@ApiTags('employeeExit')
@Controller('employeeExit')
export class EmployeeExitController {
  constructor(private readonly employeeExitService: EmployeeExitService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a employee exit' })
  @ApiResponse({ status: 201, description: 'The employee exit has been created.', type: EmployeeExit })
  create(@Body() createEmployeeDto: CreateEmployeeExitDto): Promise<EmployeeExit> {
    return this.employeeExitService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employee exit' })
  findAll(): Promise<EmployeeExit[]> {
    return this.employeeExitService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update employee exit' })
  @ApiResponse({ status: 200, description: 'employee exit updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating employee exit with ID:', id);
      console.log('Update data:', body);
      return await this.employeeExitService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a employee exit' })
  async delete(@Param('id') id: string) {
    return this.employeeExitService.delete(id);
  }
  
}
