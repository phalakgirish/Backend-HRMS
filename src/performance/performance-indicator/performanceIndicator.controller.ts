import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PerformanceIndicatorService } from './performanceIndicator.service';
import { CreatePerformanceIndicatorDto } from './dto/create-performanceIndicator.dto';
import { PerformanceIndicator } from './schema/performanceIndicator.schema';

@ApiTags('performance-indicator')
@Controller('performance-indicator')
export class PerformanceIndicatorController {
  constructor(private readonly performanceIndicatorService: PerformanceIndicatorService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a performance indicator' })
  @ApiResponse({ status: 201, description: 'The performance indicator has been created.', type: PerformanceIndicator })
  create(@Body() createPerformanceIndicatorDto: CreatePerformanceIndicatorDto): Promise<PerformanceIndicator> {
    return this.performanceIndicatorService.create(createPerformanceIndicatorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all performance indicator' })
  findAll(): Promise<PerformanceIndicator[]> {
    return this.performanceIndicatorService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update performance indicator' })
  @ApiResponse({ status: 200, description: 'performance indicator updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating performance indicator with ID:', id);
      console.log('Update data:', body);
      return await this.performanceIndicatorService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a performance indicator' })
  async delete(@Param('id') id: string) {
    return this.performanceIndicatorService.delete(id);
  }
  
}
