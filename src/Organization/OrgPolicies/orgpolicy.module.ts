import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Orgpolicy, OrgpolicySchema } from './schema/orgpolicy.schema';
import { OrgpolicyService } from './orgpolicy.service';
import { OrgpolicyController } from './orgpolicy.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Orgpolicy.name, schema: OrgpolicySchema }])
  ],
  controllers: [OrgpolicyController],
  providers: [OrgpolicyService],
})
export class OrgpolicyModule {}
