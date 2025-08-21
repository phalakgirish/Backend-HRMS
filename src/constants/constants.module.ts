import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Constants, ConstantsSchema } from './schema/constants.schema';
import { ConstantsService } from './constants.service';
import { ConstantsController } from './constants.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Constants.name, schema: ConstantsSchema }])],
  controllers: [ConstantsController],
  providers: [ConstantsService],
  exports: [ConstantsService],
})
export class ConstantsModule {}
