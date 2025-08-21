import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SupportRequestService } from './supportRequest.service';
import { CreateSupportRequestDto } from './dto/create-supportRequest.dto';
import { SupportRequest } from './schema/supportRequest.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('support-request')
@Controller('support-request')
export class SupportRequestController {
  constructor(private readonly supportRequestService: SupportRequestService) {}
    

  @Post()
async createSupportRequest(@Body() createSupportRequestDto: CreateSupportRequestDto) {
  console.log("Incoming support request:", createSupportRequestDto);
  try {
    return await this.supportRequestService.create(createSupportRequestDto);
  } catch (err) {
    console.error("Error creating support request:", err);
    throw new InternalServerErrorException(err.message);
  }
}

@Put(':id')
@UseInterceptors(FileInterceptor('file'))
async updateSupportRequest(
  @Param('id') id: string,
  @UploadedFile() file: Express.Multer.File,
  @Body() body: any
) {
  console.log("Received body:", body);
  console.log("Received file:", file);

  const updatedData = {
    assignedTo: body.assignedTo,
    status: body.status,
    remarks: body.remarks,
    ticketNotes: body.ticketNotes,
    file: file ? file.filename : undefined
  };

  return await this.supportRequestService.update(id, updatedData);
}



  @Get()
  @ApiOperation({ summary: 'Get all support request' })
  findAll(): Promise<SupportRequest[]> {
    return this.supportRequestService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update support request' })
  @ApiResponse({ status: 200, description: 'support request updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating support request with ID:', id);
      console.log('Update data:', body);
      return await this.supportRequestService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a support request' })
  async delete(@Param('id') id: string) {
    return this.supportRequestService.delete(id);
  }
  
}
