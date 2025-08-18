import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateTrainingTypeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    trainingType: string;

   
}
