import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Attendance } from './schema/attendance.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class AttendanceService {
    find(arg0: { attendance_date: Date; }) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(Attendance.name)
        private readonly attendanceModel: Model<Attendance>,
    ) { }

    // Get all attendance
    async findAll(): Promise<Attendance[]> {
        const records = await this.attendanceModel.find().exec();
        if (!records.length) throw new NotFoundException('No attendance records found');
        return records;
    }

    async findByEmployeeAndDate(emp_id: string, startDate?: string, endDate?: string): Promise<Attendance[]> {
        if (!emp_id) throw new BadRequestException('Employee ID is required');

        const start = startDate ? new Date(`${startDate}T00:00:00.000Z`) : new Date('1970-01-01T00:00:00.000Z');
        const end = endDate ? new Date(`${endDate}T23:59:59.999Z`) : new Date();

        const records = await this.attendanceModel.find({
            employee_id: new Types.ObjectId(emp_id),
            attendance_date: { $gte: start, $lte: end },
        }).exec();

        if (!records.length) throw new NotFoundException('Attendance not found');
        return records;
    }

    async create(attendance: any): Promise<Attendance> {
        const attendanceData = {
            ...attendance,
            employee_id: new Types.ObjectId(attendance.employee_id), // ensure ObjectId
        };
        return this.attendanceModel.create(attendanceData);
    }

    async updateById(id: string, updateData: any): Promise<Attendance> {
        if (!Types.ObjectId.isValid(id)) throw new BadRequestException('Invalid MongoDB ID');

        const record = await this.attendanceModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).exec();
        if (!record) throw new NotFoundException('Attendance record not found');
        return record;
    }

    async updateAttendance(
        id?: string,
        emp_id?: string,
        attendance_date?: string,
        updateData?: any
    ): Promise<Attendance> {
        let filter: any;

        if (id) {
            if (!Types.ObjectId.isValid(id)) throw new BadRequestException('Invalid attendance _id');
            filter = { _id: new Types.ObjectId(id) };
        } else if (emp_id && attendance_date) {
            if (!Types.ObjectId.isValid(emp_id)) throw new BadRequestException('Invalid employee_id');
            const startOfDay = new Date(`${attendance_date}T00:00:00.000Z`);
            const endOfDay = new Date(`${attendance_date}T23:59:59.999Z`);
            filter = { employee_id: new Types.ObjectId(emp_id), attendance_date: { $gte: startOfDay, $lte: endOfDay } };
        } else {
            throw new BadRequestException('Provide either attendance _id OR employee_id + attendance_date');
        }

        const record = await this.attendanceModel.findOneAndUpdate(filter, updateData, { new: true }).exec();
        if (!record) throw new NotFoundException('Attendance record not found');
        return record;
    }

    async deleteById(id: string): Promise<{ deleted: boolean }> {
        if (!Types.ObjectId.isValid(id)) throw new BadRequestException('Invalid MongoDB ID');

        const result = await this.attendanceModel.deleteOne({ _id: new Types.ObjectId(id) }).exec();
        if (result.deletedCount === 0) throw new NotFoundException('Attendance record not found');
        return { deleted: true };
    }

//    async import(records: any[]): Promise<any[]> {
//     const results: any[] = [];

//     for (const record of records) {
//         const attendanceData = {
//             ...record,
//             employee_id: new Types.ObjectId(record.employee_id),
//             attendance_late: '',
//             attendance_early_leaving: '',
//             attendance_overtime: '',
//             attendance_total_work: '',
//             attendance_total_rest: '',
//             attendance_status: record.attendance_status || 'Present',
//         };

//         const newRecord = await this.attendanceModel.create(attendanceData);
//         results.push({ ...record, id: newRecord._id, msg: 'Attendance added successfully' });
//     }

//     return results;
// }

async import(records: any[]): Promise<any[]> {
    const results: any[] = [];

    for (const record of records) {
        const attendanceDate = new Date(`${record.attendance_date}T00:00:00.000Z`);
        const clockIn = record.attendance_clock_in ? record.attendance_clock_in : '09:00';
        const clockOut = record.attendance_clock_out ? record.attendance_clock_out : '18:00';

        // Calculate total work in hours
        const [inH, inM] = clockIn.split(':').map(Number);
        const [outH, outM] = clockOut.split(':').map(Number);
        const totalWorkHours = (outH + outM / 60) - (inH + inM / 60);

        const attendanceData = {
            ...record,
            employee_id: new Types.ObjectId(record.employee_id),
            attendance_late: '', // you can calculate based on shift start
            attendance_early_leaving: '', // calculate based on shift end
            attendance_overtime: totalWorkHours > 8 ? (totalWorkHours - 8).toFixed(2) : '0',
            attendance_total_work: totalWorkHours.toFixed(2),
            attendance_total_rest: '', // optional calculation
            attendance_status: record.attendance_status || 'Present',
        };

        const existing = await this.attendanceModel.findOne({
            employee_id: attendanceData.employee_id,
            attendance_date: attendanceDate
        });

        if (existing) {
            // Skip or update duplicates
            results.push({ ...record, msg: 'Duplicate, skipped' });
            continue;
        }

        const newRecord = await this.attendanceModel.create(attendanceData);
        results.push({ ...record, id: newRecord._id, msg: 'Attendance added successfully' });
    }

    return results;
}


}
