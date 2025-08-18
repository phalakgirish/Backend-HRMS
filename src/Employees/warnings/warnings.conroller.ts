import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WarningsService } from './warnings.service';
import { CreateWarningsDto } from './dto/create-warnings.dto';
import { Warnings } from './schema/warnings.schema';

@ApiTags('warnings')
@Controller('warnings')
export class WarningsController {
  constructor(private readonly warningsService: WarningsService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a warnings' })
  @ApiResponse({ status: 201, description: 'The warnings has been created.', type: Warnings })
  create(@Body() createWarningsDto: CreateWarningsDto): Promise<Warnings> {
    return this.warningsService.create(createWarningsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all warnings' })
  findAll(): Promise<Warnings[]> {
    return this.warningsService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update warnings' })
  @ApiResponse({ status: 200, description: 'warnings updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating warnings with ID:', id);
      console.log('Update data:', body);
      return await this.warningsService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a warnings' })
  async delete(@Param('id') id: string) {
    return this.warningsService.delete(id);
  }
  
}
