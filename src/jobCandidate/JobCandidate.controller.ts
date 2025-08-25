import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JobCandidateService } from './JobCandidate.service';
import { CreateJobCandidateDto } from './dto/create-JobCandidate.dto';
import { JobCandidate } from './schema/JobCandidate.schema';

@ApiTags('job-candidate')
@Controller('job-candidate')
export class JobCandidateController {
  constructor(private readonly jobCandidateService: JobCandidateService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a job candidate' })
  @ApiResponse({ status: 201, description: 'The job candidate has been created.', type: JobCandidate })
  create(@Body() createJobCandidateDto: CreateJobCandidateDto): Promise<JobCandidate> {
    return this.jobCandidateService.create(createJobCandidateDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all job candidate' })
  findAll(): Promise<JobCandidate[]> {
    return this.jobCandidateService.findAll();
  }

@Get(':id')
async getById(@Param('id') id: string) {
  return this.jobCandidateService.findById(id);
}

  
  @Put(':id')
  @ApiOperation({ summary: 'Update job candidate' })
  @ApiResponse({ status: 200, description: 'job candidate updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating job candidate with ID:', id);
      console.log('Update data:', body);
      return await this.jobCandidateService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  
// @Patch(':id')
// update(@Param('id') id: string, @Body() updatejob candidateDto: Updatejob candidateDto) {
//   return this.jobCandidateService.update(id, updatejob candidateDto);
// }

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a job candidate' })
  async delete(@Param('id') id: string) {
    return this.jobCandidateService.delete(id);
  }
  
}
