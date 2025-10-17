import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leave, LeaveDocument } from './schema/leave.schema';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { Employee } from 'src/Employees/employee/schema/employee.schema';

@Injectable()
export class LeaveService {
  leaveRepository: any;
  deletePromotion(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(Leave.name) private leaveModel: Model<LeaveDocument>,
    @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>,) { }

  async create(createLeaveDto: CreateLeaveDto): Promise<Leave> {
    try {
      const employee = await this.employeeModel.findById(createLeaveDto.employeeId).exec();
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }

      const newLeave = new this.leaveModel({
        employeeId: employee._id,
        employeeCode: employee.id,  // 👈 "MAH776"
        employee: `${employee.firstName} ${employee.lastName}`, // full name
        leaveType: createLeaveDto.leaveType,
        requestDuration: createLeaveDto.requestDuration,
        days: createLeaveDto.days,
        appliedOn: createLeaveDto.appliedOn,
        endDate: createLeaveDto.endDate,
        reason: createLeaveDto.reason,
        status: createLeaveDto.status || "Pending",
        addedBy: createLeaveDto.addedBy,
        remarks: createLeaveDto.remarks,
      });

      return await newLeave.save();
    } catch (error) {
      console.error('Error creating leave:', error);
      throw new InternalServerErrorException('Error creating leave');
    }
  }

  async getLopDays(employeeCode: string, month: string): Promise<number> {
    const [year, monthStr] = month.split("-");

    const startDate = new Date(Number(year), Number(monthStr) - 1, 1);
    const endDate = new Date(Number(year), Number(monthStr), 0); // last day of month

    const leaves = await this.leaveModel.find({
      employeeCode,
      $or: [
        { appliedOn: { $gte: startDate, $lte: endDate } },
        { endDate: { $gte: startDate, $lte: endDate } }
      ]
    });

    return leaves.reduce((sum, l) => sum + (l.days || 0), 0);
  }

  async update(id: string, updateDto: any): Promise<Leave> {
    try {
      console.log('Updating leave with ID:', id);
      console.log('Update data:', updateDto);

      const updated = await this.leaveModel.findByIdAndUpdate(
        id,
        { $set: updateDto },  // <--- use $set to avoid replacing whole doc
        { new: true, runValidators: true }
      );

      if (!updated) {
        throw new NotFoundException(`Leave with ID ${id} not found`);
      }
      return updated;
    } catch (error) {
      console.error('Service update error:', error.message);
      throw new InternalServerErrorException(error.message);
    }
  }

  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting leave with ID:', id);
    const result = await this.leaveModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`leave with id ${id} not found`);
    }
    return { message: 'leave deleted successfully' };
  }

  async findAll(): Promise<Leave[]> {
    return this.leaveModel.find().exec();
  }
}
