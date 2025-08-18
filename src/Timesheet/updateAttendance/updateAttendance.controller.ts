import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateAttendanceService } from './updateAttendance.service';
import { CreateUpdateAttendanceDto } from './dto/create-updateAttendance.dto';
import { UpdateAttendance } from './schema/updateAttendance.schema';

@ApiTags('update-attendance')
@Controller('update-attendance')
export class UpdateAttendanceController {
  constructor(private readonly updateAttendanceService: UpdateAttendanceService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a update attendance' })
  @ApiResponse({ status: 201, description: 'The update attendance has been created.', type: UpdateAttendance })
  create(@Body() createUpdateAttendanceDto: CreateUpdateAttendanceDto): Promise<UpdateAttendance> {
    return this.updateAttendanceService.create(createUpdateAttendanceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all update attendance' })
  findAll(): Promise<UpdateAttendance[]> {
    return this.updateAttendanceService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update update attendance' })
  @ApiResponse({ status: 200, description: 'update attendance updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating update attendance with ID:', id);
      console.log('Update data:', body);
      return await this.updateAttendanceService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a update attendance' })
  async delete(@Param('id') id: string) {
    return this.updateAttendanceService.delete(id);
  }
  
}
