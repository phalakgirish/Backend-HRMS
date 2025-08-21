import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateSupportRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    subject: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    employee: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    priority: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    remarks: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    ticketCode: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    assignedTo: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

@ApiProperty({ example: '12-May-2022' })
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date: string;

 @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

     @ApiProperty()
    @IsString()
    @IsNotEmpty()
    ticketNotes: string;

       @ApiProperty()
    @IsString()
    @IsNotEmpty()
          fileTitle: string;
          
           @ApiProperty()
    @IsString()
    @IsNotEmpty()
      fileDescription: string; 
      
       @ApiProperty()
    @IsString()
    @IsNotEmpty()
      fileUrl: string;      
    
       @ApiProperty()
    @IsString()
    @IsNotEmpty()
      createdAt?: Date;
}