import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion } from './schema/promotion.schema';

@ApiTags('promotion')
@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}
    

  @Post()
  @ApiOperation({ summary: 'Create a promotion' })
  @ApiResponse({ status: 201, description: 'The promotion has been created.', type: Promotion })
  create(@Body() createPromotionDto: CreatePromotionDto): Promise<Promotion> {
    return this.promotionService.create(createPromotionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all promotion' })
  findAll(): Promise<Promotion[]> {
    return this.promotionService.findAll();
  }

  
  @Put(':id')
  @ApiOperation({ summary: 'Update promotion' })
  @ApiResponse({ status: 200, description: 'promotion updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating promotion with ID:', id);
      console.log('Update data:', body);
      return await this.promotionService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a promotion' })
  async delete(@Param('id') id: string) {
    return this.promotionService.delete(id);
  }
  
}
