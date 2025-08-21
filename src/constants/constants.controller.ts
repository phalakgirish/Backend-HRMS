import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ConstantsService } from './constants.service';
import { CreateConstantsDto } from './dto/create-constants.dto';

@Controller('constants')
export class ConstantsController {
  constructor(private readonly constantsService: ConstantsService) {}

  @Get(':type')
  getByType(@Param('type') type: string) {
    return this.constantsService.findByType(type);
  }

  @Post()
  create(@Body() createDto: CreateConstantsDto) {
    return this.constantsService.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { value: any }) {
    return this.constantsService.update(id, body.value);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.constantsService.delete(id);
  }
}
