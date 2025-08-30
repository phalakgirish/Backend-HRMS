import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OfficeShiftDocument = OfficeShift & Document;

@Schema()
export class DayTime {
    @Prop({
            type: String,
            set: (value: string) =>
                value
                    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    : value,
        })
  day: string;

  @Prop()
  inTime: string;

  @Prop()
  outTime: string;
}

@Schema()
export class OfficeShift {
  @Prop({
        type: String,
        set: (value: string) =>
            value
                ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                : value,
    })
  shiftName: string;

  @Prop({ type: [DayTime], default: [] })
  days: DayTime[];


}

export const OfficeShiftSchema = SchemaFactory.createForClass(OfficeShift);
