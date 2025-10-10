import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete, Patch, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PayrollService } from './payroll.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { Payroll } from './schema/payroll.schema';

@ApiTags('payroll')
@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) { }


  @Post()
  @ApiOperation({ summary: 'Create an payroll' })
  @ApiResponse({ status: 201, description: 'The payroll has been created.', type: Payroll })
  create(@Body() CreatePayrollDto: CreatePayrollDto): Promise<Payroll> {
    return this.payrollService.upsertPayroll(CreatePayrollDto);
  }

@Get()
@ApiOperation({ summary: 'Get all payroll' })
findAll(): Promise<Payroll[]> {
  return this.payrollService.findAll();
}

@Get(':empId')
async findOne(@Param('empId') empId: string) {
  return this.payrollService.findOne(empId);
}

@Patch(':empId/status')
async updatePaymentStatus(
  @Param('empId') empId: string,
  @Body('paymentStatus') paymentStatus: string,
) {
  // 1️⃣ Find payroll by empId
  const payroll = await this.payrollService.findOne(empId);
  if (!payroll) throw new NotFoundException(`Payroll not found for ${empId}`);

  // 2️⃣ Update paymentStatus
  return this.payrollService.update(payroll._id, { paymentStatus });
}
  

  @Put(':id')
  @ApiOperation({ summary: 'Update payroll' })
  @ApiResponse({ status: 200, description: 'payroll updated successfully' })
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      console.log('Updating payroll with ID:', id);
      console.log('Update data:', body);
      return this.payrollService.update(id, body);
    } catch (err) {
      console.error('Update failed:', err);
      throw new InternalServerErrorException('Something went wrong');
    }
  }



  @Delete(':id')
  @ApiOperation({ summary: 'Delete a payroll' })
  async delete(@Param('id') id: string) {
    return this.payrollService.delete(id);
  }


}
