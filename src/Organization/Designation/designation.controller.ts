import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DesignationService } from './designation.service';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { Designation } from './schema/designation.schema';

@ApiTags('designation')
@Controller('designation')
export class DesignationController {
  constructor(private readonly designationService: DesignationService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a designation' })
  @ApiResponse({ status: 201, description: 'The designation has been created.', type: Designation })
  create(@Body() CreateDesignationtDto: CreateDesignationDto): Promise<Designation> {
    return this.designationService.create(CreateDesignationtDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all designation' })
  findAll(): Promise<Designation[]> {
    return this.designationService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update designation' })
  @ApiResponse({ status: 200, description: 'designation updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating designation with ID:', id);
      console.log('Update data:', body);
      return await this.designationService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a designation' })
  async delete(@Param('id') id: string) {
    return this.designationService.delete(id);
  }
  
}
