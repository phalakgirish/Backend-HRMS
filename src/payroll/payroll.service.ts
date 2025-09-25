import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { Payroll, PayrollDocument } from './schema/payroll.schema';

@Injectable()
export class PayrollService {
  employeeModel: any;

  constructor(@InjectModel(Payroll.name) private payrollModel: Model<PayrollDocument>) {}

// async create(createPayrollDto: CreatePayrollDto): Promise<Payroll> {
//   try {
//     const empId = createPayrollDto.empId;
//     const tds = Number(createPayrollDto.tds || 0);
//     const advance = Number(createPayrollDto.advance || 0);
//     const lop = Number(createPayrollDto.lop || 0);

//     // 🔹 Calculate employeeCtc automatically
//     const employeeCtc =
//       Number(createPayrollDto.basic || 0) +
//       Number(createPayrollDto.hra || 0) +
//       Number(createPayrollDto.lta || 0) +
//       Number(createPayrollDto.allowance || 0) +
//       Number(createPayrollDto.bonus || 0) +
//       Number(createPayrollDto.incentive || 0) +
//       Number(createPayrollDto.pfEmployer || 0) +
//       Number(createPayrollDto.medical || 0) +
//       Number(createPayrollDto.gratuity || 0);

//     const monthlyCTC = employeeCtc / 12;

//     const basic = Math.round(monthlyCTC * 0.5);
//     const hra = Math.round(basic * 0.5);
//     const lta = Math.round(basic * 0.0833);

//     let conveyance =
//       monthlyCTC <= 15000
//         ? 500
//         : Math.min(1600, Math.round(monthlyCTC * 0.032));

//     const medical = 1250;
//     const gratuity = Math.round(basic * 0.0481);

//     let pfEmployer = Math.round(basic * 0.12);
//     let pfEmployee = Math.round(basic * 0.12);
//     const PF_MIN = 997;
//     const PF_MAX = 1800;
//     pfEmployer = Math.min(Math.max(pfEmployer, PF_MIN), PF_MAX);
//     pfEmployee = Math.min(Math.max(pfEmployee, PF_MIN), PF_MAX);

//     const grossSalary = monthlyCTC;
//     const executive =
//       grossSalary - (basic + hra + lta + conveyance + medical);

//     const pt = 200;
//     const totalDeductions = pfEmployee + pt + tds + advance + lop;
//     const netSalary = grossSalary - totalDeductions;

//     const createdPayroll = new this.payrollModel({
//   ...createPayrollDto,
//   empId,
//   employeeCtc,
//   basic,
//   hra,
//   lta,
//   allowance: conveyance,
//   pfEmployer,
//   pfEmployee,
//   medical,
//   gratuity,
//   executive,
//   grossSalary,
//   totalDeductions,
//   netSalary,
//   tds,
//   advance,
//   lop,
// });


//     return await createdPayroll.save();
//   } catch (error) {
//     console.error('❌ PayrollService.create error:', error);
//     throw new InternalServerErrorException(
//       error.message || 'Payroll creation failed',
//     );
//   }
// }


async upsertPayroll(createPayrollDto: CreatePayrollDto): Promise<any> {
  try {
    const empId = createPayrollDto.empId;

    // ✅ Directly save whatever frontend sends
    const updatedPayroll = await this.payrollModel.findOneAndUpdate(
      { empId },
      { ...createPayrollDto },  // only persist values, no recalculation
      { new: true, upsert: true }
    ).lean();

    return updatedPayroll;
  } catch (error) {
    console.error('❌ PayrollService.upsertPayroll error:', error);
    throw new InternalServerErrorException(error.message || 'Payroll save failed');
  }
}



async findOne(empId: string): Promise<any> {
  const payroll = await this.payrollModel.findOne({ empId }).lean();
  if (!payroll) throw new NotFoundException(`Payroll for ${empId} not found`);

  const totalCtc = (payroll.basic || 0) * 24;
  return { ...payroll, totalCtc };
}

async findAll(): Promise<any[]> {
  const payrolls = await this.payrollModel.find().lean();
  return payrolls.map(p => {
    const totalCtc = (p.basic || 0) * 24;
    return { ...p, totalCtc };
  });
}





async update(id: string, updateDto: Partial<CreatePayrollDto>): Promise<Payroll> {
  try {
    console.log('Updating Payrolly with ID:', id);
    console.log('Update data:', updateDto);

    const updated = await this.payrollModel.findByIdAndUpdate(id, updateDto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException(`Payroll with ID ${id} not found`);
    }

    return updated;
  } catch (error) {
    console.error('Service update error:', error);
    throw new InternalServerErrorException('Error updating Payroll');
  }
}

  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting Payroll with ID:', id); 
    const result = await this.payrollModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Payroll with id ${id} not found`);
    }
    return { message: 'Payroll deleted successfully' };
  }




  
}
