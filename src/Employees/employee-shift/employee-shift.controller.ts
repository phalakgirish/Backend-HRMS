import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeShiftService } from './employee-shift.service';
import { EmployeeShift } from './schema/employee-shift.schema';
import { CreateEmployeeShiftDto } from './dto/create-employee-shift.dto';
import { UpdateEmployeeShiftDto } from './dto/update-employee-shift.dto';

@Controller('employee-shift')
export class EmployeeShiftController {
    constructor(private employeeShiftService:EmployeeShiftService,
    ){}

    @Get()
    async getAllShiftDts(
    ):Promise<EmployeeShift[]>{
        return this.employeeShiftService.findAll();
    }

    @Get('employee/:emp_id')
    async getAllShiftDtsByEmpId(
        @Param()
        emp_id:any
    ):Promise<EmployeeShift[]>{
            
        return this.employeeShiftService.findAllByEmpId(emp_id);
    }

    @Post()
    async createEmployeeShift(
        @Body()
        shiftDts:CreateEmployeeShiftDto,
    ):Promise<any>{   

        return this.employeeShiftService.create(shiftDts);
    }

    @Get(':shift_id')
    async getShiftById(
        @Param()
        shift_id:any,
    ):Promise<EmployeeShift>{
            
        return this.employeeShiftService.findById(shift_id);
    }

    @Put(':shift_id')
    async updateShiftById(
        @Param()
        shift_id:any,
        @Body()
        shiftDts:UpdateEmployeeShiftDto,
    ):Promise<any>{

        return this.employeeShiftService.updateById(shift_id,shiftDts);
    }

    @Delete(':shift_id')
    async deleteShiftById(
        @Param()
        shift_id:any,
    ):Promise<any>{        
        return this.employeeShiftService.deleteById(shift_id);
    }
}
