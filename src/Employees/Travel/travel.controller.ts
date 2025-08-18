import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { Travel } from './schema/travel.schema';

@ApiTags('travel')
@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a travel' })
  @ApiResponse({ status: 201, description: 'The travel has been created.', type: Travel })
  create(@Body() createTravelDto: CreateTravelDto): Promise<Travel> {
    return this.travelService.create(createTravelDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all travel' })
  findAll(): Promise<Travel[]> {
    return this.travelService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update travel' })
  @ApiResponse({ status: 200, description: 'travel updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating travel with ID:', id);
      console.log('Update data:', body);
      return await this.travelService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a travel' })
  async delete(@Param('id') id: string) {
    return this.travelService.delete(id);
  }
  
}
