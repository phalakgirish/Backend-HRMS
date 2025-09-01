import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Attendance } from './schema/attendance.schema';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class AttendanceService {
    constructor(
        @InjectModel(Attendance.name)
        private attendanceModel:mongoose.Model<Attendance>,
    )
    {}

    async findAll():Promise<any>{
    
        const attendanceDts= await this.attendanceModel.find()
        .exec();
        if(!attendanceDts)
        {
            throw new NotFoundException('Attendance not found')
        }
              
        return attendanceDts;
    }

    async findEmpIdDateAll(emp_id:any,startDate:any,endDate:any):Promise<any>{

        var query:any = {}
        var filter_field:any = []

        if(emp_id != '')
        {
            filter_field.push({employee_id: new ObjectId(emp_id)})
        }

        // if(startDate != '')
        // {
        //     filter_field.push({attendance_clock_in: {$gte:new Date(startDate)}})
        // }

        // if(endDate != '')
        // {
        //     filter_field.push({attendacne_clock_out: {$gte:new Date(endDate)}})
        // }

        if(filter_field.length > 1)
        {
            query = {$and:filter_field}
        }
        else
        {
            for(let val of filter_field)
            {
                query = val
            }
            
        }

        const attendanceDts= await this.attendanceModel.find(query)
        .exec();
        if(!attendanceDts)
        {
            throw new NotFoundException('Attendance not found')
        }
              
        return attendanceDts;
    }

    async create(attendance:any):Promise<any>{
        const attendanceDts=await this.attendanceModel.create(attendance);

        return attendanceDts.save();
    }

    async findById(atten_id:any):Promise<any>{
    
        const attendanceDts= await this.attendanceModel.findOne({_id:new ObjectId(atten_id)})
        .exec();
        if(!attendanceDts)
        {
            throw new NotFoundException('Attendance not found')
        }
              
        return attendanceDts;
    }


    async updateById(atten_id:any,attendance:any):Promise<any>{
    
        return await this.attendanceModel.findByIdAndUpdate(atten_id,attendance,{
            new:true,
            runValidators:true
        })           

    }

    async deleteById(atten_id:any):Promise<any>{
    
        return await this.attendanceModel.deleteOne({_id:new ObjectId(atten_id)})           

    }

    async importAttendacneDts(attendance:any):Promise<any>{

        for(let i in attendance)
        {
            const {employee_id,attendance_date,attendance_clock_in,attendacne_clock_out} = attendance[i]

            var attedacne_dts = {
                employee_id:employee_id,
                attendance_date:attendance_date,
                attendance_clock_in:attendance_clock_in,
                attendacne_clock_out:attendacne_clock_out,
                attencance_late:'',
                attendance_early_leaving:'',
                attendance_overtime:'',
                attendance_total_work:'',
                attendance_total_rest:'',
                attendance_status:'',
            }

            const attendanceDts =await this.attendanceModel.create(attedacne_dts);
            attendanceDts.save();

            attendance[i].msg = `Attendance Added Successfully`
        }
        

        return attendance;
    }


}
