import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SetRolesDocument = SetRoles & Document;

@Schema()
export class SetRoles {
    @Prop()
    roleName: string;

    @Prop()
    menuPermission: string;

    @Prop({
        default: () => new Date().toISOString().split("T")[0],
    })
    addedDate: string;

}

export const SetRolesSchema = SchemaFactory.createForClass(SetRoles);
