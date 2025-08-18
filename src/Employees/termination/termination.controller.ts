import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TerminationService } from './termination.service';
import { CreateTerminationDto } from './dto/create-termination.dto';
import { Termination } from './schema/termination.schema';

@ApiTags('termination')
@Controller('termination')
export class TerminationController {
  constructor(private readonly terminationService: TerminationService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a termination' })
  @ApiResponse({ status: 201, description: 'The termination has been created.', type: Termination })
  create(@Body() createTerminationDto: CreateTerminationDto): Promise<Termination> {
    return this.terminationService.create(createTerminationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all termination' })
  findAll(): Promise<Termination[]> {
    return this.terminationService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update termination' })
  @ApiResponse({ status: 200, description: 'termination updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating termination with ID:', id);
      console.log('Update data:', body);
      return await this.terminationService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a termination' })
  async delete(@Param('id') id: string) {
    return this.terminationService.delete(id);
  }
  
}
