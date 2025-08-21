import { IsString, IsNotEmpty, IsObject } from 'class-validator';


export class CreateConstantsDto {
  @IsString()
  @IsNotEmpty()
  type: string; // department/type

  @IsObject()
  @IsNotEmpty()
  value: Record<string, any>; // dynamic fields for that type
}