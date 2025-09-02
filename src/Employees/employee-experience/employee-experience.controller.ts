import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeExperienceService } from './employee-experience.service';
import { EmployeeExperience } from './schema/employee-experience.schema';
import { CreateEmployeeExperienceDto } from './dto/create-employee-experience.dto';
import { UpdateEmployeeExperienceDto } from './dto/update-employee-experience.dto';

@Controller('employee-experience')
export class EmployeeExperienceController {
    constructor(private employeeExperienceService: EmployeeExperienceService,
    ) { }

    @Post()
    async create(@Body() dto: UpdateEmployeeExperienceDto) {
        return this.employeeExperienceService.create(dto);
    }



   @Get('employee/:employeeId')
  async getFamilyByEmployeeId(
    @Param('employeeId') employeeId: string,
  ) {
    return this.employeeExperienceService.findAllByEmpId(employeeId);
  }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.employeeExperienceService.delete(id);
    }

   @Put(':id')
     async updateFamily(
       @Param('id') id: string,
       @Body() dto: Partial<CreateEmployeeExperienceDto>,
     ) {
       return this.employeeExperienceService.update(id, dto);
     }
}
