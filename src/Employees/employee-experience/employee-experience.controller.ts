import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeExperienceService } from './employee-experience.service';
import { EmployeeExperience } from './schema/employee-experience.schema';
import { CreateEmployeeExperienceDto } from './dto/create-employee-experience.dto';
import { UpdateEmployeeExperienceDto } from './dto/update-employee-experience.dto';

@Controller('employee-experience')
export class EmployeeExperienceController {
    constructor(private employeeExperienceService:EmployeeExperienceService,
    ){}

    @Get()
    async getAllExperienceDts(
    ):Promise<EmployeeExperience[]>{
        return this.employeeExperienceService.findAll();
    }

    @Get('employee/:emp_id')
    async getAllExperienceDtsByEmpId(
        @Param()
        emp_id:any
    ):Promise<EmployeeExperience[]>{
            
        return this.employeeExperienceService.findAllByEmpId(emp_id);
    }

    @Post()
    async createEmployeeDocument(
        @Body()
        experienceDts:CreateEmployeeExperienceDto,
    ):Promise<any>{        
        return this.employeeExperienceService.create(experienceDts);
    }

    @Get(':exp_id')
    async getDocumentById(
        @Param()
        exp_id:any,
    ):Promise<EmployeeExperience>{
            
        return this.employeeExperienceService.findById(exp_id);
    }

    @Put(':exp_id')
    async updateDocumentById(
        @Param()
        exp_id:any,
        @Body()
        experienceDts:UpdateEmployeeExperienceDto
    ):Promise<any>{
                
        return this.employeeExperienceService.updateById(exp_id,experienceDts);
    }

    @Delete(':exp_id')
    async deleteDocumentById(
        @Param()
        exp_id:any,
    ):Promise<any>{        
        return this.employeeExperienceService.deleteById(exp_id);
    }
}
