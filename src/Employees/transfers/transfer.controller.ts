import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TransferService } from './transfer.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { Transfer } from './schema/transfer.schema';

@ApiTags('transfer')
@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a transfer' })
  @ApiResponse({ status: 201, description: 'The transfer has been created.', type: Transfer })
  create(@Body() createTransferDto: CreateTransferDto): Promise<Transfer> {
    return this.transferService.create(createTransferDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all transfer' })
  findAll(): Promise<Transfer[]> {
    return this.transferService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update transfer' })
  @ApiResponse({ status: 200, description: 'transfer updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating transfer with ID:', id);
      console.log('Update data:', body);
      return await this.transferService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a transfer' })
  async delete(@Param('id') id: string) {
    return this.transferService.delete(id);
  }
  
}
