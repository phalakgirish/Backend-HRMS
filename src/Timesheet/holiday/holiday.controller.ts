import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HolidayService } from './holiday.service';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { Holiday } from './schema/holiday.schema';

@ApiTags('holiday')
@Controller('holiday')
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a holiday' })
  @ApiResponse({ status: 201, description: 'The holiday has been created.', type: Holiday })
  create(@Body() createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    return this.holidayService.create(createHolidayDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all holiday' })
  findAll(): Promise<Holiday[]> {
    return this.holidayService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update holiday' })
  @ApiResponse({ status: 200, description: 'holiday updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating holiday with ID:', id);
      console.log('Update data:', body);
      return await this.holidayService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a holiday' })
  async delete(@Param('id') id: string) {
    return this.holidayService.delete(id);
  }
  
}
