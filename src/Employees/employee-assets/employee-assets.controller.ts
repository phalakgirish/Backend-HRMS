import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeAssetsService } from './employee-assets.service';
import { EmployeeAssets } from './schema/employee-assets.schema';
import { CreateEmployeeAssetsDto } from './dto/create-employee-assets.dto';
import { UpdateEmployeeAssetsDto } from './dto/update-employee-assets.dto';

@Controller('employee-assets')
export class EmployeeAssetsController {
    constructor(private employeeAssetsService:EmployeeAssetsService,
    ){}

    // @Get()
    // async getAllAssetsDts(
    // ):Promise<EmployeeAssets[]>{
    //     return this.employeeAssetsService.findAll();
    // }

    // @Get('employee/:emp_id')
    // async getAllAssetsDtsByEmpId(
    //     @Param()
    //     emp_id:any
    // ):Promise<EmployeeAssets[]>{
            
    //     return this.employeeAssetsService.findAllByEmpId(emp_id);
    // }

    // @Post()
    // async createEmployeeAssets(
    //     @Body()
    //     assetsDts:CreateEmployeeAssetsDto,
    // ):Promise<any>{   

    //     return this.employeeAssetsService.create(assetsDts);
    // }

    // @Get(':assets_id')
    // async getAssetsById(
    //     @Param()
    //     assets_id:any,
    // ):Promise<EmployeeAssets>{
            
    //     return this.employeeAssetsService.findById(assets_id);
    // }

    // @Put(':assets_id')
    // async updateAssetsById(
    //     @Param()
    //     assets_id:any,
    //     @Body()
    //     assetsDts:UpdateEmployeeAssetsDto,
    // ):Promise<any>{

    //     return this.employeeAssetsService.updateById(assets_id,assetsDts);
    // }

    // @Delete(':assets_id')
    // async deleteLocationById(
    //     @Param()
    //     assets_id:any,
    // ):Promise<any>{        
    //     return this.employeeAssetsService.deleteById(assets_id);
    // }

     @Get()
        async getAllShiftDts(
        ): Promise<EmployeeAssets[]> {
            return this.employeeAssetsService.findAll();
        }
    
        @Get('employee/:employeeId')
        async getAllShiftDtsByEmpId(@Param('employeeId') employeeId: string): Promise<EmployeeAssets[]> {
            return this.employeeAssetsService.findAllByEmpId(employeeId);
        }
    
    
        @Post()
        async create(@Body() dto: CreateEmployeeAssetsDto) {
            return this.employeeAssetsService.create(dto);
        }
    
        @Put(':id')
        async updateShifft(
            @Param('id') id: string,
            @Body() dto: Partial<CreateEmployeeAssetsDto>,
        ) {
            return this.employeeAssetsService.update(id, dto);
        }
    
    
        @Delete(':id')
        async delete(@Param('id') id: string) {
            return this.employeeAssetsService.delete(id);
        }
}
