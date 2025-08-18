import { Module } from '@nestjs/common';
import { WarningsController } from './warnings.conroller';
import { WarningsService } from './warnings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Warnings, WarningsSchema } from './schema/warnings.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Warnings.name, schema: WarningsSchema }])
    ],
  controllers: [WarningsController],
  providers: [WarningsService]
})
export class WarningsModule {}
