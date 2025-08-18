import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AwardsService } from './awards.service';
import { CreateAwardsDto } from './dto/create-awards.dto';
import { Awards } from './schema/awards.schema';

@ApiTags('awards')
@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a awards' })
  @ApiResponse({ status: 201, description: 'The awards has been created.', type: Awards })
  create(@Body() CreateAwardsDto: CreateAwardsDto): Promise<Awards> {
    return this.awardsService.create(CreateAwardsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all awards' })
  findAll(): Promise<Awards[]> {
    return this.awardsService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update awards' })
  @ApiResponse({ status: 200, description: 'awards updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating awards with ID:', id);
      console.log('Update data:', body);
      return await this.awardsService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a awards' })
  async delete(@Param('id') id: string) {
    return this.awardsService.delete(id);
  }
  
}
