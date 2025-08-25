import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SetRoles, SetRolesSchema } from './schema/setRoles.schema';
import { SetRolesService } from './setRoles.service';
import { SetRolesController } from './setRoles.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SetRoles.name, schema: SetRolesSchema }])
  ],
  controllers: [SetRolesController],
  providers: [SetRolesService],
})
export class SetRolesModule {}
