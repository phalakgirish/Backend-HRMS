import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeAssetsService } from './employee-assets.service';
import { EmployeeAssets } from './schema/employee-assets.schema';
import { CreateEmployeeAssetsDto } from './dto/create-employee-assets.dto';
import { UpdateEmployeeAssetsDto } from './dto/update-employee-assets.dto';

@Controller('employee-assets')
export class EmployeeAssetsController {
    constructor(private employeeAssetsService:EmployeeAssetsService,
    ){}

    @Get()
    async getAllAssetsDts(
    ):Promise<EmployeeAssets[]>{
        return this.employeeAssetsService.findAll();
    }

    @Get('employee/:emp_id')
    async getAllAssetsDtsByEmpId(
        @Param()
        emp_id:any
    ):Promise<EmployeeAssets[]>{
            
        return this.employeeAssetsService.findAllByEmpId(emp_id);
    }

    @Post()
    async createEmployeeAssets(
        @Body()
        assetsDts:CreateEmployeeAssetsDto,
    ):Promise<any>{   

        return this.employeeAssetsService.create(assetsDts);
    }

    @Get(':assets_id')
    async getAssetsById(
        @Param()
        assets_id:any,
    ):Promise<EmployeeAssets>{
            
        return this.employeeAssetsService.findById(assets_id);
    }

    @Put(':assets_id')
    async updateAssetsById(
        @Param()
        assets_id:any,
        @Body()
        assetsDts:UpdateEmployeeAssetsDto,
    ):Promise<any>{

        return this.employeeAssetsService.updateById(assets_id,assetsDts);
    }

    @Delete(':assets_id')
    async deleteLocationById(
        @Param()
        assets_id:any,
    ):Promise<any>{        
        return this.employeeAssetsService.deleteById(assets_id);
    }
}
