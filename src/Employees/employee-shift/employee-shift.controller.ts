import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { EmployeeShiftService } from './employee-shift.service';
import { EmployeeShift } from './schema/employee-shift.schema';
import { CreateEmployeeShiftDto } from './dto/create-employee-shift.dto';
import { UpdateEmployeeShiftDto } from './dto/update-employee-shift.dto';

@Controller('employee-shift')
export class EmployeeShiftController {
    constructor(private employeeShiftService: EmployeeShiftService,
    ) { }

    @Get()
    async getAllShiftDts(
    ): Promise<EmployeeShift[]> {
        return this.employeeShiftService.findAll();
    }

    @Get('employee/:employeeId')
    async getAllShiftDtsByEmpId(@Param('employeeId') employeeId: string): Promise<EmployeeShift[]> {
        return this.employeeShiftService.findAllByEmpId(employeeId);
    }


    @Post()
    async create(@Body() dto: CreateEmployeeShiftDto) {
        return this.employeeShiftService.create(dto);
    }

    @Put(':id')
    async updateShifft(
        @Param('id') id: string,
        @Body() dto: Partial<CreateEmployeeShiftDto>,
    ) {
        return this.employeeShiftService.update(id, dto);  
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.employeeShiftService.delete(id);
    }
}
