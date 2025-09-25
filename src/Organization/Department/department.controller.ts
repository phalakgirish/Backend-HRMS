import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './schema/department.schema';

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  // DepartmentService: any;
  constructor(private readonly departmentService: DepartmentService) { }


  @Post()
  @ApiOperation({ summary: 'Create a department' })
  @ApiResponse({ status: 201, description: 'The department has been created.', type: Department })
  create(@Body() CreateDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return this.departmentService.create(CreateDepartmentDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update department' })
  @ApiResponse({ status: 200, description: 'Department updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating department with ID:', id);
      console.log('Update data:', body);
      return await this.departmentService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

   @Get('count')
async getDepartmentCount(): Promise<number> {
  return this.departmentService.countDepartments();
}

  @Get()
  @ApiOperation({ summary: 'Get all department' })
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a department' })
  async deleteDepartment(@Param('id') id: string) {
    return this.departmentService.deleteDepartment(id);
  }

}
