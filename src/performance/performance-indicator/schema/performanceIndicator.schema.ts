import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PerformanceIndicatorDocument = PerformanceIndicator & Document;

@Schema({ timestamps: true })

export class PerformanceIndicator {

    @Prop()
    designation: string;

    @Prop()
    department: string;

    @Prop()
    addedBy: string;

    @Prop({ type: Date, default: () => new Date() })
    createdAt: Date;

    @Prop()
    customerExperience: string;

    @Prop()
    marketing: string;

    @Prop()
    management: string;

    @Prop()
    administration: string;

    @Prop()
    presentationSkill: string;

    @Prop()
    qualityOfWork: string;

    @Prop()
    efficiency: string;

    @Prop()
    integrity: string;

    @Prop()
    professionalism: string;

    @Prop()
    teamWork: string;

    @Prop()
    criticalThinking: string;

    @Prop()
    conflictManagement: string;

    @Prop()
    attendance: string;

    @Prop()
    abilityToMeetDeadline: string;

}

export const PerformanceIndicatorSchema = SchemaFactory.createForClass(PerformanceIndicator);