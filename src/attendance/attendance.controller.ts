import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
    constructor(private attendanceService:AttendanceService,
    ){}

    @Get()
    async getAllAttendance(
    ):Promise<any>{
            return this.attendanceService.findAll();
    }

    @Get('datewise')
    async getAllAttendanceByfilter(
        @Query('emp_id')
        emp_id:any,
        @Query('startDate')
        startDate:any,
        @Query('endDate')
        endDate:any
    ):Promise<any>{
            return this.attendanceService.findEmpIdDateAll(emp_id,startDate,endDate);
    }

    @Post()
    async createAttendance(
        @Body()
        attendance:any,
    ):Promise<any>{
            
        return this.attendanceService.create(attendance);
    }

    @Get(':atten_id')
    async getAttendanceById(
        @Param()
        atten_id:any,
    ):Promise<any>{
            
        return this.attendanceService.findById(atten_id);
    }

    @Put(':atten_id')
    async updateAttendanceById(
        @Param()
        atten_id:any,
        @Body()
        attendance:any
    ):Promise<any>{
            
        return this.attendanceService.updateById(atten_id,attendance);
    }

    @Delete(':atten_id')
    async deleteAttendanceById(
        @Param()
        atten_id:any,
    ):Promise<any>{
            
        return this.attendanceService.deleteById(atten_id);
    }

    @Post('import')
    async importAttendacne(
        @Body()
        attendacne:any
    ):Promise<any>{
        return this.attendanceService.importAttendacneDts(attendacne);
    }
}
