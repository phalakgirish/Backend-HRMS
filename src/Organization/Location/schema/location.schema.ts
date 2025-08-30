import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type LocationDocument = Location & Document;

@Schema()
export class Location{

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
company:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
locationName:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
email:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
phone:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
faxNumber:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
locationHead:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
locationHrManager:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
address:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
city:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
state:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
zipCode:number;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
country:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
bankBranch:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
bankName:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
bankCode:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
bankAccountNo:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
addedBy:string;


@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
basiSalary: string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
hra: string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
lta: string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
allowance:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
pfEmployer:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
medical:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
esc:string;

@Prop({
    set: (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  })
gratuity :string;
}

export const LocationSchema =SchemaFactory.createForClass(Location);