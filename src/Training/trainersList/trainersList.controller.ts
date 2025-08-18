import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrainersListService } from './trainersList.service';
import { CreateTrainersListDto } from './dto/create-trainersList.dto';
import { TrainersList } from './schema/trainersList.schema';

@ApiTags('trainers-list')
@Controller('trainers-list')
export class TrainersListController {
    // DepartmentService: any;
    constructor(private readonly trainersListService: TrainersListService) { }


    @Post()
    @ApiOperation({ summary: 'Create a trainer List' })
    @ApiResponse({ status: 201, description: 'The trainer List has been created.', type: TrainersList })
    create(@Body() CreateTrainersListDto: CreateTrainersListDto): Promise<TrainersList> {
        return this.trainersListService.create(CreateTrainersListDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update trainer List' })
    @ApiResponse({ status: 200, description: 'trainer List updated successfully' })
    async update(@Param('id') id: string, @Body() body: any) {
        try {
            console.log('Updating trainer List with ID:', id);
            console.log('Update data:', body);
            return await this.trainersListService.update(id, body);
        } catch (err) {
            console.error('Update failed:', err);
            throw new InternalServerErrorException('Something went wrong');
        }
    }


    @Get()
    @ApiOperation({ summary: 'Get all trainer List' })
    findAll(): Promise<TrainersList[]> {
        return this.trainersListService.findAll();
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a trainer List' })
    async delete(@Param('id') id: string) {
        return this.trainersListService.delete(id);
    }
}
