import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type LocationDocument = Location & Document;
@Schema()
export class Location {
  @Prop() company: string;
  @Prop() locationName: string;
  @Prop() email: string;
  @Prop() phone: string;
  @Prop() faxNumber: string;
  @Prop() locationHead: string;
  @Prop() locationHrManager: string;
  @Prop() address: string;
  @Prop() city: string;
  @Prop() state: string;
  @Prop() zipCode: string;  // string is safer
  @Prop() country: string;
  @Prop() bankBranch: string;
  @Prop() bankName: string;
  @Prop() bankCode: string;
  @Prop() bankAccountNo: string;
  @Prop() addedBy: string;
  @Prop({ type: String, unique: true })
  id: string;
  
  @Prop() basiSalary: string;
  @Prop() hra: string;
  @Prop() lta: string;
  @Prop() allowance: string;
  @Prop() pfEmployer: string;
  @Prop() medical: string;
  @Prop() esc: string;
  @Prop() gratuity: string;
}



export const LocationSchema = SchemaFactory.createForClass(Location);