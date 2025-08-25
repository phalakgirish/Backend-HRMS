import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SetRolesService } from './setRoles.service';
import { CreateSetRolesDto } from './dto/create-setRoles.dto';
import { SetRoles } from './schema/setRoles.schema';

@ApiTags('set-roles')
@Controller('set-roles')
export class SetRolesController {
    constructor(private readonly setRolesService: SetRolesService) { }


    @Post()
    @ApiOperation({ summary: 'Create a set roles' })
    @ApiResponse({ status: 201, description: 'The set roles has been created.', type: SetRoles })
    create(@Body() CreateSetRolesDto: CreateSetRolesDto): Promise<SetRoles> {
        return this.setRolesService.create(CreateSetRolesDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update set roles' })
    @ApiResponse({ status: 200, description: 'set roles updated successfully' })
    async update(@Param('id') id: string, @Body() body: any) {
        try {
            console.log('Updating set roles with ID:', id);
            console.log('Update data:', body);
            return await this.setRolesService.update(id, body);
        } catch (err) {
            console.error('Update failed:', err);
            throw new InternalServerErrorException('Something went wrong');
        }
    }


    @Get()
    @ApiOperation({ summary: 'Get all set roles' })
    findAll(): Promise<SetRoles[]> {
        return this.setRolesService.findAll();
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a set roles' })
    async delete(@Param('id') id: string) {
        return this.setRolesService.delete(id);
    }
}
