import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OfficeShiftDocument = OfficeShift & Document;

@Schema()
export class DayTime {
    @Prop()
  day: string;

  @Prop()
  inTime: string;

  @Prop()
  outTime: string;
}

@Schema()
export class OfficeShift {
  @Prop({ required: true })
  shiftName: string;

  @Prop({ type: [DayTime], default: [] })
  days: DayTime[];


}

export const OfficeShiftSchema = SchemaFactory.createForClass(OfficeShift);
