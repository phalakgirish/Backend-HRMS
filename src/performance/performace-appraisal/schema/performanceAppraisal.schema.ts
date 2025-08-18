import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PerformanceAppraisalDocument = PerformanceAppraisal & Document;

@Schema({ timestamps: true })

export class PerformanceAppraisal {

    @Prop()
    employee: string;

    @Prop()
    appraisalDate: string;

    @Prop()
    designation: string;

    @Prop()
    department: string;

    @Prop()
    description: string;

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

export const PerformanceAppraisalSchema = SchemaFactory.createForClass(PerformanceAppraisal);