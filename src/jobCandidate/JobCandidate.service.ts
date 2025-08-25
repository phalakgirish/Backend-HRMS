import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobCandidate, JobCandidateDocument } from './schema/JobCandidate.schema';
import { CreateJobCandidateDto } from './dto/create-JobCandidate.dto';

@Injectable()
export class JobCandidateService {
    // async update(id: string, updateDto: any): Promise<job candidate> {
    //   try {
    //     console.log('Updating job candidate with ID:', id);
    //     console.log('Update data:', updateDto);
    //     const updated = await this.jobCandidateModel.findByIdAndUpdate(id, updateDto, { new: true });
    //       if (!updated) {
    //     throw new NotFoundException(`job candidate with ID ${id} not found`);
    //   }
    //     return updated;
    //   } catch (error) {
    //     console.error('Service update error:', error);
    //     throw new InternalServerErrorException('Error updating job candidate');
    //   }
    // }
   
    
    async findById(id: string): Promise<JobCandidate> {
  try {
    const candidate = await this.jobCandidateModel.findById(id);
    if (!candidate) {
      throw new NotFoundException(`Job candidate with ID ${id} not found`);
    }
    return candidate;
  } catch (error) {
    console.error('Error fetching job candidate by ID:', error.message);
    throw new InternalServerErrorException('Failed to fetch job candidate');
  }
}


  deletePromotion(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectModel(JobCandidate.name) private jobCandidateModel: Model<JobCandidateDocument>) {}

  // async create(createUserDto: Createjob candidateDto): Promise<job candidate> {
  //   const createdUser = new this.leaveModel(createUserDto);
  //   return createdUser.save();
  // }

async create(createJobCandidateDto: CreateJobCandidateDto): Promise<JobCandidate> {
  try {
    const newJobCandidate = new this.jobCandidateModel(createJobCandidateDto); 
    return await newJobCandidate.save(); 
  } catch (error) {
    console.error('Error creating job candidate:', error);
    throw new InternalServerErrorException('Error creating job candidate');
  }
}




    // async update(id: string, updateDto: any): Promise<job candidate> {
    //   try {
    //     console.log('Updating job candidate with ID:', id);
    //     console.log('Update data:', updateDto);
    //     const updated = await this.jobCandidateModel.findByIdAndUpdate(id, updateDto, { new: true });
    //       if (!updated) {
    //     throw new NotFoundException(`job candidate with ID ${id} not found`);
    //   }
    //     return updated;
    //   } catch (error) {
    //     console.error('Service update error:', error);
    //     throw new InternalServerErrorException('Error updating job candidate');
    //   }
    // }

    async update(id: string, updateDto: any): Promise<JobCandidate> {
  try {
    console.log('Updating job candidate with ID:', id);
    console.log('Update data:', updateDto);

    const updated = await this.jobCandidateModel.findByIdAndUpdate(
      id,
      { $set: updateDto },  // <--- use $set to avoid replacing whole doc
      { new: true, runValidators: true }
    );

    if (!updated) {
      throw new NotFoundException(`job candidate with ID ${id} not found`);
    }
    return updated;
  } catch (error) {
    console.error('Service update error:', error.message);
    throw new InternalServerErrorException(error.message);
  }
}

  
  
  async delete(id: string): Promise<{ message: string }> {
    console.log('Deleting job candidate with ID:', id); 
    const result = await this.jobCandidateModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`job candidate with id ${id} not found`);
    }
    return { message: 'job candidate deleted successfully' };
  }

  
  async findAll(): Promise<JobCandidate[]> {
    return this.jobCandidateModel.find().exec();
  }
}
