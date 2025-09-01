import { ConflictException,Injectable, NotFoundException, Param} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Settings } from './schema/settings.schema';



@Injectable()
export class SettingsService {
    constructor(
            @InjectModel(Settings.name)
            private settingsModel:mongoose.Model<Settings>,
    )
    {}

    async findAll():Promise<any>{

        const settingsDts= await this.settingsModel.find()
        .exec();
        if(!settingsDts)
        {
            throw new NotFoundException('setting not found')
        }
          
        return settingsDts;
    }

    async create(settings:any):Promise<any>{
        const settingsDts=await this.settingsModel.create(settings);

        return settingsDts.save();
    }

    async updateById(id:string,settings:any):Promise<any>{
          
        const setting_Dts:any=await this.settingsModel.findById(id)
        .exec();

        if(settings.payslip_logo == null)
        {
            settings = {...settings,payslip_logo:setting_Dts.payslip_logo}   
        }

        if(settings.job_list_logo == null)
        {
            settings = {...settings,job_list_logo:setting_Dts.job_list_logo}   
        }

        return await this.settingsModel.findByIdAndUpdate(id,settings,{
            new:true,
            runValidators:true
        }) 
    }

}
