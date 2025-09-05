import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { ApiTags, ApiQuery, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';
import { Attendance } from './schema/attendance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@ApiTags('attendance')
@Controller('attendance')
export class AttendanceController {
    constructor(
        @InjectModel(Attendance.name) private attendanceModel: Model<Attendance>,
        private readonly attendanceService: AttendanceService
    ) { }

    @Get('')
    async getAttendanceByDate(@Query('attendance_date') date: string) {
        if (!date) throw new BadRequestException('Date is required');

        const start = new Date(date);
        start.setUTCHours(0, 0, 0, 0);

        const end = new Date(date);
        end.setUTCHours(23, 59, 59, 999);

        const records = await this.attendanceModel.find({
            attendance_date: { $gte: start, $lte: end }
        });

        return records;
    }

    @Get('datewise')
    @ApiOperation({ summary: 'Get attendance by employee & date range' })
    @ApiQuery({ name: 'emp_id', type: String, required: true })
    @ApiQuery({ name: 'startDate', type: String, required: false })
    @ApiQuery({ name: 'endDate', type: String, required: false })
    async getByDate(
        @Query('emp_id') emp_id: string,
        @Query('startDate') startDate: string,
        @Query('endDate') endDate: string
    ) {
        return this.attendanceService.findByEmployeeAndDate(emp_id, startDate, endDate);
    }

    @Post()
    @ApiBody({
        schema: {
            example: {
                employee_id: "6899d603701f50c76a0fd4f1",
                attendance_date: "2025-09-06",
                attendance_clock_in: "09:00",
                attendance_clock_out: "18:00",
                attendance_status: "Present"
            }
        }
    })
    async create(@Body() data: any) {
        return this.attendanceService.create(data);
    }

    // @Put(':id')
    // @ApiParam({ name: 'id', type: String })
    // async update(@Param('id') id: string, @Body() data: any) {
    //     return this.attendanceService.updateById(id, data);
    // }

    @Put('update')
    @ApiOperation({ summary: 'Update attendance by ID or by employee & date' })
    @ApiQuery({ name: 'id', type: String, required: false, description: 'Attendance ID' })
    @ApiQuery({ name: 'emp_id', type: String, required: false, description: 'Employee ID' })
    @ApiQuery({ name: 'attendance_date', type: String, required: false, description: 'Attendance date (YYYY-MM-DD)' })
    @ApiBody({
        schema: {
            example: {
                attendance_clock_in: "09:30",
                attendance_clock_out: "18:00",
                attendance_status: "Present"
            }
        }
    })
    async update(
        @Query('id') id: string,
        @Query('emp_id') emp_id: string,
        @Query('attendance_date') attendance_date: string,
        @Body() updateData: any
    ) {
        return this.attendanceService.updateAttendance(id, emp_id, attendance_date, updateData);
    }


    @Delete(':id')
    @ApiParam({ name: 'id', type: String })
    async delete(@Param('id') id: string) {
        return this.attendanceService.deleteById(id);
    }

    @Post('import')
    async import(@Body() records: any[]) {
        return this.attendanceService.import(records);
    }

}
