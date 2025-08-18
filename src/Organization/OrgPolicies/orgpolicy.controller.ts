import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrgpolicyService } from './orgpolicy.service';
import { CreateOrgpolicyDto } from './dto/create-orgpolicy.dto';
import { Orgpolicy } from './schema/orgpolicy.schema';

@ApiTags('orgpolicy')
@Controller('orgpolicy')
export class OrgpolicyController {
  constructor(private readonly orgpolicyService: OrgpolicyService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create an Orgpolicy' })
  @ApiResponse({ status: 201, description: 'The Orgpolicy has been created.', type: Orgpolicy })
  create(@Body() CreateOrgpolicyDto: CreateOrgpolicyDto): Promise<Orgpolicy> {
    return this.orgpolicyService.create(CreateOrgpolicyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Orgpolicy' })
  findAll(): Promise<Orgpolicy[]> {
    return this.orgpolicyService.findAll();
  }

   @Put(':id')
    @ApiOperation({ summary: 'Update Orgpolicy' })
    @ApiResponse({ status: 200, description: 'Orgpolicy updated successfully' })
    async update(@Param('id') id: string, @Body() body: any) {
      try {
        console.log('Updating Orgpolicy with ID:', id);
        console.log('Update data:', body);
        return this.orgpolicyService.update(id, body);
      } catch (err) {
        console.error('Update failed:', err);
        throw new InternalServerErrorException('Something went wrong');
      }
    }
    
  
    
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a Orgpolicy' })
    async delete(@Param('id') id: string) {
      return this.orgpolicyService.delete(id);
    }
}
