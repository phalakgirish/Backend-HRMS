import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResignationService } from './resignation.service';
import { CreateResignationDto } from './dto/create-resignation.dto';
import { Resignation } from './schema/resignation.schema';

@ApiTags('resignation')
@Controller('resignation')
export class ResignationController {
  constructor(private readonly resignationService: ResignationService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a resignation' })
  @ApiResponse({ status: 201, description: 'The resignation has been created.', type: Resignation })
  create(@Body() createResignationDto: CreateResignationDto): Promise<Resignation> {
    return this.resignationService.create(createResignationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all resignation' })
  findAll(): Promise<Resignation[]> {
    return this.resignationService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update resignation' })
  @ApiResponse({ status: 200, description: 'resignation updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating resignation with ID:', id);
      console.log('Update data:', body);
      return await this.resignationService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a resignation' })
  async delete(@Param('id') id: string) {
    return this.resignationService.delete(id);
  }
  
}
