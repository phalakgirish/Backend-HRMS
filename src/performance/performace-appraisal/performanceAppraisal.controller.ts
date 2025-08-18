import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PerformanceAppraisalService } from './performanceAppraisal.service';
import { CreatePerformanceAppraisalDto } from './dto/create-performaceAppraisal.dto';
import { PerformanceAppraisal } from './schema/performanceAppraisal.schema';

@ApiTags('performance-appraisal')
@Controller('performance-appraisal')
export class PerformanceAppraisalController {
  constructor(private readonly performanceAppraisalService: PerformanceAppraisalService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a performance appraisal' })
  @ApiResponse({ status: 201, description: 'The performance appraisal has been created.', type: PerformanceAppraisal })
  create(@Body() createPerformanceAppraisalDto: CreatePerformanceAppraisalDto): Promise<PerformanceAppraisal> {
    return this.performanceAppraisalService.create(createPerformanceAppraisalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all performance appraisal' })
  findAll(): Promise<PerformanceAppraisal[]> {
    return this.performanceAppraisalService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update performance appraisal' })
  @ApiResponse({ status: 200, description: 'performance appraisal updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating performance appraisal with ID:', id);
      console.log('Update data:', body);
      return await this.performanceAppraisalService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a performance appraisal' })
  async delete(@Param('id') id: string) {
    return this.performanceAppraisalService.delete(id);
  }
  
}
