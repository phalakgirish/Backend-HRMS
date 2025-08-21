import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { CreateProjectsDto } from './dto/create-projects.dto';
import { Projects } from './schema/projects.schema';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
    

  @Post()
async createProject(@Body() createProjectDto: CreateProjectsDto) {
  console.log("Incoming project:", createProjectDto);
  try {
    return await this.projectsService.create(createProjectDto);
  } catch (err) {
    console.error("Error creating project:", err);
    throw new InternalServerErrorException(err.message);
  }
}


  @Get()
  @ApiOperation({ summary: 'Get all project' })
  findAll(): Promise<Projects[]> {
    return this.projectsService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update project' })
  @ApiResponse({ status: 200, description: 'project updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating project with ID:', id);
      console.log('Update data:', body);
      return await this.projectsService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a project' })
  async delete(@Param('id') id: string) {
    return this.projectsService.delete(id);
  }
  
}
