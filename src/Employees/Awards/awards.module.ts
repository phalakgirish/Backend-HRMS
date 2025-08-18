import { Module } from '@nestjs/common';
import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Awards, AwardSchema } from './schema/awards.schema';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: Awards.name, schema: AwardSchema }])
    ],
  controllers: [AwardsController],
  providers: [AwardsService]
})
export class AwardsModule {}
