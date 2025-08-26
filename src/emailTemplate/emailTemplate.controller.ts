import { Controller, Post, Get, Body, UseGuards, Put, Param, InternalServerErrorException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmailTemplateService } from './emailTemplate.service';
import { CreateEmailTemplateDto } from './dto/craete-emailTemplate.dto';
import { EmailTemplate } from './schema/emailTemplate.schema';

@ApiTags('email-template')
@Controller('email-template')
export class EmailTemplateController {
    // DepartmentService: any;
    constructor(private readonly emailTemplateService: EmailTemplateService) { }


    @Post()
    @ApiOperation({ summary: 'Create a email template' })
    @ApiResponse({ status: 201, description: 'The email template has been created.', type: EmailTemplate })
    create(@Body() CreateEmailTemplateDto: CreateEmailTemplateDto): Promise<EmailTemplate> {
        return this.emailTemplateService.create(CreateEmailTemplateDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update email template' })
    @ApiResponse({ status: 200, description: 'email template updated successfully' })
    async update(@Param('id') id: string, @Body() body: any) {
        try {
            console.log('Updating email template with ID:', id);
            console.log('Update data:', body);
            return await this.emailTemplateService.update(id, body);
        } catch (err) {
            console.error('Update failed:', err);
            throw new InternalServerErrorException('Something went wrong');
        }
    }


    @Get()
    @ApiOperation({ summary: 'Get all email template' })
    findAll(): Promise<EmailTemplate[]> {
        return this.emailTemplateService.findAll();
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Delete an email template' })
    async delete(@Param('id') id: string) {
        return this.emailTemplateService.delete(id);
    }
}
