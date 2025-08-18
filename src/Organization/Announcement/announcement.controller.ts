import { Controller, Post, Get, Body, UseGuards, Delete, Param, Put, InternalServerErrorException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { Announcement } from './schema/announcement.schema';

@ApiTags('announcement')
@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) { }


  @Post()
  @ApiOperation({ summary: 'Create an announcement' })
  @ApiResponse({ status: 201, description: 'The announcement has been created.', type: Announcement })
  create(@Body() CreateAnnouncementDto: CreateAnnouncementDto): Promise<Announcement> {
    return this.announcementService.create(CreateAnnouncementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all announcement' })
  findAll(): Promise<Announcement[]> {
    return this.announcementService.findAll();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update announcment' })
  @ApiResponse({ status: 200, description: 'announcment updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating announcment with ID:', id);
      console.log('Update data:', body);
      return this.announcementService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a announcment' })
  async delete(@Param('id') id: string) {
    return this.announcementService.delete(id);
  }
}
