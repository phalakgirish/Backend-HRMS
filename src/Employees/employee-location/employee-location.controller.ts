import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeLocationService } from './employee-location.service';
import { EmployeeLocation } from './schema/employee-location.schema';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';

@Controller('employee-location')
export class EmployeeLocationController {
    constructor(private employeeLocationService: EmployeeLocationService,
    ) { }

    @Get()
    async getAllShiftDts(
    ): Promise<EmployeeLocation[]> {
        return this.employeeLocationService.findAll();
    }

    @Get('employee/:employeeId')
    async getAllShiftDtsByEmpId(@Param('employeeId') employeeId: string): Promise<EmployeeLocation[]> {
        return this.employeeLocationService.findAllByEmpId(employeeId);
    }


    @Post()
    async create(@Body() dto: CreateEmployeeLocationDto) {
        return this.employeeLocationService.create(dto);
    }

    @Put(':id')
    async updateShifft(
        @Param('id') id: string,
        @Body() dto: Partial<CreateEmployeeLocationDto>,
    ) {
        return this.employeeLocationService.update(id, dto);
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.employeeLocationService.delete(id);
    }
}
