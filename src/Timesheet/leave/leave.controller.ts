import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { Leave } from './schema/leave.schema';

@ApiTags('leave')
@Controller('leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a leave' })
  @ApiResponse({ status: 201, description: 'The leave has been created.', type: Leave })
  create(@Body() createLeaveDto: CreateLeaveDto): Promise<Leave> {
    return this.leaveService.create(createLeaveDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all leave' })
  findAll(): Promise<Leave[]> {
    return this.leaveService.findAll();
  }

 @Get("employee/:employeeCode/:month")
  async getLopDays(
    @Param("employeeCode") employeeCode: string,
    @Param("month") month: string,
  ) {
    const lopDays = await this.leaveService.getLopDays(employeeCode, month);
    return { lopDays };
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update leave' })
  @ApiResponse({ status: 200, description: 'leave updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating leave with ID:', id);
      console.log('Update data:', body);
      return await this.leaveService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  
// @Patch(':id')
// update(@Param('id') id: string, @Body() updateLeaveDto: UpdateLeaveDto) {
//   return this.leaveService.update(id, updateLeaveDto);
// }

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a leave' })
  async delete(@Param('id') id: string) {
    return this.leaveService.delete(id);
  }
  
}
