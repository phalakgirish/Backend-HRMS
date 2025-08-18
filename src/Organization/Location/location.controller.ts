import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from './schema/location.schema';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a location' })
  @ApiResponse({ status: 201, description: 'The location has been created.', type: Location })
  create(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all location' })
  findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update location' })
  @ApiResponse({ status: 200, description: 'location updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating location with ID:', id);
      console.log('Update data:', body);
      return await this.locationService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a location' })
  async delete(@Param('id') id: string) {
    return this.locationService.delete(id);
  }
  
}
