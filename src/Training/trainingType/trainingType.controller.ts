import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrainingTypeService } from './trainingType.service';
import { CreateTrainingTypeDto } from './dto/create-trainingType.dto';
import { TrainingType } from './schema/trainingType.schema';

@ApiTags('training-Type')
@Controller('training-Type')
export class TrainingTypeController {
    // DepartmentService: any;
    constructor(private readonly trainingTypeService: TrainingTypeService) { }


    @Post()
    @ApiOperation({ summary: 'Create a training Type' })
    @ApiResponse({ status: 201, description: 'The training Type has been created.', type: TrainingType })
    create(@Body() CreateTrainingTypeDto: CreateTrainingTypeDto): Promise<TrainingType> {
        return this.trainingTypeService.create(CreateTrainingTypeDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update training Type' })
    @ApiResponse({ status: 200, description: 'training Type updated successfully' })
    async update(@Param('id') id: string, @Body() body: any) {
        try {
            console.log('Updating training Type with ID:', id);
            console.log('Update data:', body);
            return await this.trainingTypeService.update(id, body);
        } catch (err) {
            console.error('Update failed:', err);
            throw new InternalServerErrorException('Something went wrong');
        }
    }


    @Get()
    @ApiOperation({ summary: 'Get all training Type' })
    findAll(): Promise<TrainingType[]> {
        return this.trainingTypeService.findAll();
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a training Type' })
    async delete(@Param('id') id: string) {
        return this.trainingTypeService.delete(id);
    }
}
