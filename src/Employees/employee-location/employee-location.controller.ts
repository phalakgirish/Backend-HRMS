import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeLocationService } from './employee-location.service';
import { EmployeeLocation } from './schema/employee-location.schema';
import { CreateEmployeeLocationDto } from './dto/create-employee-location.dto';
import { UpdateEmployeeLocationDto } from './dto/update-employee-location.dto';

@Controller('employee-location')
export class EmployeeLocationController {
    constructor(private employeeLocationService:EmployeeLocationService,
    ){}

    @Get()
    async getAllLocationDts(
    ):Promise<EmployeeLocation[]>{
        return this.employeeLocationService.findAll();
    }

    @Get('employee/:emp_id')
    async getAllLocationDtsByEmpId(
        @Param()
        emp_id:any
    ):Promise<EmployeeLocation[]>{
            
        return this.employeeLocationService.findAllByEmpId(emp_id);
    }

    @Post()
    async createEmployeeLocation(
        @Body()
        locationDts:CreateEmployeeLocationDto,
    ):Promise<any>{   

        return this.employeeLocationService.create(locationDts);
    }

    @Get(':locationId')
    async getLocationById(
        @Param()
        locationId:any,
    ):Promise<EmployeeLocation>{
            
        return this.employeeLocationService.findById(locationId);
    }

    @Put(':locationId')
    async updateLocationById(
        @Param()
        locationId:any,
        @Body()
        locationDts:UpdateEmployeeLocationDto,
    ):Promise<any>{

        return this.employeeLocationService.updateById(locationId,locationDts);
    }

    @Delete(':locationId')
    async deleteLocationById(
        @Param()
        locationId:any,
    ):Promise<any>{        
        return this.employeeLocationService.deleteById(locationId);
    }
}
