import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailTemplate, EmailTemplateDocument } from './schema/emailTemplate.schema';
import { CreateEmailTemplateDto } from './dto/craete-emailTemplate.dto';
@Injectable()
export class EmailTemplateService {
    constructor(@InjectModel(EmailTemplate.name) private emailTemplateModel: Model<EmailTemplateDocument>) { }

    async create(createUserDto: CreateEmailTemplateDto): Promise<EmailTemplate> {
        const createdUser = new this.emailTemplateModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, updateDto: any): Promise<EmailTemplate> {
        try {
            console.log('Updating email template with ID:', id);
            console.log('Update data:', updateDto);
            const updated = await this.emailTemplateModel.findByIdAndUpdate(id, updateDto, { new: true });
            if (!updated) {
                throw new NotFoundException(`email template with ID ${id} not found`);
            }
            return updated;
        } catch (error) {
            console.error('Service update error:', error);
            throw new InternalServerErrorException('Error updating email template');
        }
    }


   async delete(id: string): Promise<{ message: string }> {
      console.log('Deleting email template with ID:', id); 
      const result = await this.emailTemplateModel.findByIdAndDelete(id);
      if (!result) {
        throw new NotFoundException(`email template with id ${id} not found`);
      }
      return { message: 'email template deleted successfully' };
    }
  
    async findAll(): Promise<EmailTemplate[]> {
      return this.emailTemplateModel.find().exec();
    }
}
