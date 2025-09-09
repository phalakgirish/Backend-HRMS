import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Attendance } from './schema/attendance.schema';
import mongoose, { Model, Types } from 'mongoose';
import { Employee } from 'src/Employees/employee/schema/employee.schema';

@Injectable()
export class AttendanceService {
    delete(id: string) {
        throw new Error('Method not implemented.');
    }
    find(arg0: { attendance_date: Date; }) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(Attendance.name)
        private readonly attendanceModel: Model<Attendance>,
        @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>, 

    ) { }

    async findByEmployeeAndDate(emp_id: string, startDate?: string, endDate?: string): Promise<any[]> {
        if (!emp_id) throw new BadRequestException('Employee ID is required');

        const start = startDate ? new Date(`${startDate}T00:00:00.000Z`) : new Date('1970-01-01T00:00:00.000Z');
        const end = endDate ? new Date(`${endDate}T23:59:59.999Z`) : new Date();

        const records = await this.attendanceModel.find({
            employee_id: new Types.ObjectId(emp_id),
            attendance_date: { $gte: start, $lte: end },
        })
            .populate('employee_id', 'firstName lastName')
            .exec();

        if (!records.length) throw new NotFoundException('Attendance not found');

        return records.map(r => {
            const employee = r.employee_id as any;
            return {
                ...r.toObject(),
                name: employee ? `${employee.firstName} ${employee.lastName}` : '-'
            };
        });

    }

    async create(attendance: any): Promise<any> {
        const employee = await this.employeeModel.findById(attendance.employee_id);
        if (!employee) throw new NotFoundException('Employee not found');

        const attendanceData = {
            ...attendance,
            employee_id: new Types.ObjectId(attendance.employee_id),
            employee_name: `${employee.firstName} ${employee.lastName}`,
        };

        const newRecord = await this.attendanceModel.create(attendanceData);

        return this.attendanceModel
            .findById(newRecord._id)
            .populate('employee_id', 'firstName lastName')
            .exec();
    }

    async updateById(id: string, updateData: any): Promise<Attendance> {
        if (updateData.employee_id) {
            updateData.employee_id = new Types.ObjectId(updateData.employee_id);

            const employee = await this.employeeModel.findById(updateData.employee_id);
            if (employee) {
                updateData.employee_name = `${employee.firstName} ${employee.lastName}`;
            }
        }

        if (updateData.attendance_clock_in && updateData.attendance_clock_out) {
            const [inH, inM] = updateData.attendance_clock_in.split(':').map(Number);
            const [outH, outM] = updateData.attendance_clock_out.split(':').map(Number);
            const totalWorkHours = (outH + outM / 60) - (inH + inM / 60);

            updateData.attendance_total_work = totalWorkHours.toFixed(2);
            updateData.attendance_overtime = totalWorkHours > 8 ? (totalWorkHours - 8).toFixed(2) : '0';
            updateData.attendance_late = updateData.attendance_late || '0';
            updateData.attendance_early_leaving = updateData.attendance_early_leaving || '0';
            updateData.attendance_total_rest = updateData.attendance_total_rest || '0';
        }

        const record = await this.attendanceModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        ).exec();

        if (!record) throw new NotFoundException(`Attendance record not found for ID: ${id}`);

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

   async deleteById(id: string) {
  const result = await this.attendanceModel.findByIdAndDelete(id);
  if (!result) {
    throw new NotFoundException(`Attendance record with id ${id} not found`);
  }
  return { message: 'Deleted successfully', id };
}


    //     async import(records: any[]): Promise<any[]> {
    //         const results: any[] = [];

    //         for (const record of records) {
    //             const attendanceDate = new Date(`${record.attendance_date}T00:00:00.000Z`);
    //             const clockIn = record.attendance_clock_in ? record.attendance_clock_in : '09:00';
    //             const clockOut = record.attendance_clock_out ? record.attendance_clock_out : '18:00';

    //             // Calculate total work in hours
    //             const [inH, inM] = clockIn.split(':').map(Number);
    //             const [outH, outM] = clockOut.split(':').map(Number);
    //             const totalWorkHours = (outH + outM / 60) - (inH + inM / 60);

    //             const employee = await this.employeeModel.findById(record.employee_id);
    //             const attendanceData = {
    //                 ...record,
    //                 employee_id: new Types.ObjectId(record.employee_id),
    //                 employee_name: employee ? `${employee.firstName} ${employee.lastName}` : '',
    //                 attendance_late: '',
    //                 attendance_early_leaving: '',
    //                 attendance_overtime: totalWorkHours > 8 ? (totalWorkHours - 8).toFixed(2) : '0',
    //                 attendance_total_work: totalWorkHours.toFixed(2),
    //                 attendance_total_rest: '',
    //                 attendance_status: record.attendance_status || 'Present',
    //             };


    //             const existing = await this.attendanceModel.findOne({
    //                 employee_id: attendanceData.employee_id,
    //                 attendance_date: attendanceDate
    //             });

    //             if (existing) {
    //                 results.push({ ...record, msg: 'Duplicate, skipped' });
    //                 continue;
    //             }

    //             const newRecord = await this.attendanceModel.create(attendanceData);
    //             // results.push({ ...record, id: newRecord._id, msg: 'Attendance added successfully' });
    //             results.push({ 
    //     ...record, 
    //     id: newRecord._id, 
    //     employee_name: newRecord.employee_name,  // <-- add this
    //     msg: 'Attendance added successfully' 
    // });

    //         }

    //         return results;
    //     }

    async import(records: any[]): Promise<any[]> {
        const results: any[] = [];

        for (const record of records) {
            try {
                const employee = await this.employeeModel.findOne({ id: record.employee_id });
                if (!employee) {
                    results.push({ ...record, msg: 'Employee not found, skipped' });
                    continue;
                }

                const attendanceDate = new Date(`${record.attendance_date}T00:00:00.000Z`);
                const clockIn = record.attendance_clock_in || '09:00';
                const clockOut = record.attendance_clock_out || '18:00';
                const [inH, inM] = clockIn.split(':').map(Number);
                const [outH, outM] = clockOut.split(':').map(Number);
                const totalWorkHours = (outH + outM / 60) - (inH + inM / 60);

                const existing = await this.attendanceModel.findOne({
                    employee_id: employee._id,
                    attendance_date: attendanceDate,
                });
                if (existing) {
                    results.push({ ...record, msg: 'Duplicate, skipped' });
                    continue;
                }

                const attendanceData = {
                    employee_id: employee._id,
                    employee_name: `${employee.firstName} ${employee.lastName}`,
                    attendance_date: attendanceDate,
                    attendance_clock_in: clockIn,
                    attendance_clock_out: clockOut,
                    attendance_total_work: totalWorkHours.toFixed(2),
                    attendance_overtime: totalWorkHours > 8 ? (totalWorkHours - 8).toFixed(2) : '0',
                    attendance_late: record.attendance_late || '0',
                    attendance_early_leaving: record.attendance_early_leaving || '0',
                    attendance_total_rest: record.attendance_total_rest || '0',
                    attendance_status: record.attendance_status || 'Present',
                    attendance_reason: record.attendance_reason || '',
                };

                const newRecord = await this.attendanceModel.create(attendanceData);

                results.push({
                    ...record,
                    id: newRecord._id,
                    employee_name: newRecord.employee_name,
                    msg: 'Attendance added successfully',
                });

            } catch (err) {
                console.error('Error importing record:', record, err.message);
                results.push({ ...record, msg: `Error: ${err.message}` });
            }
        }

        return results;
    }

    async findAll(): Promise<any> {
        return this.attendanceModel
            .find()
            .populate('employee_id', 'name')
            .exec();
    }

    async findByDate(start: Date, end: Date): Promise<any> {
        return this.attendanceModel
            .find({
                attendance_date: { $gte: start, $lte: end },
            })
            .populate('employee_id', 'firstName lastName')
            .exec();
    }

    async findByEmployee(emp_id: string, start: Date, end: Date): Promise<any> {
        return this.attendanceModel
            .find({
                employee_id: new Types.ObjectId(emp_id),
                attendance_date: { $gte: start, $lte: end },
            })
            .populate('employee_id', 'firstName lastName')
            .exec();
    }


}
