import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrainingListService } from './trainingList.service';
import { CreateTrainingListDto } from './dto/create-trainingList.dto';
import { TrainingList } from './schema/trainingList.schema';

@ApiTags('training-list')
@Controller('training-list')
export class TrainingListController {
    // DepartmentService: any;
    constructor(private readonly trainingListService: TrainingListService) { }


    @Post()
    @ApiOperation({ summary: 'Create a training List' })
    @ApiResponse({ status: 201, description: 'The training List has been created.', type: TrainingList })
    create(@Body() CreateTrainingListDto: CreateTrainingListDto): Promise<TrainingList> {
        return this.trainingListService.create(CreateTrainingListDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update training List' })
    @ApiResponse({ status: 200, description: 'training List updated successfully' })
    async update(@Param('id') id: string, @Body() body: any) {
        try {
            console.log('Updating training List with ID:', id);
            console.log('Update data:', body);
            return await this.trainingListService.update(id, body);
        } catch (err) {
            console.error('Update failed:', err);
            throw new InternalServerErrorException('Something went wrong');
        }
    }


    @Get()
    @ApiOperation({ summary: 'Get all training List' })
    findAll(): Promise<TrainingList[]> {
        return this.trainingListService.findAll();
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a training List' })
    async delete(@Param('id') id: string) {
        return this.trainingListService.delete(id);
    }
}
