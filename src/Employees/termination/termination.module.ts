import { Module } from '@nestjs/common';
import { TerminationController } from './termination.controller';
import { TerminationService } from './termination.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Termination, TerminationSchema } from './schema/termination.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Termination.name, schema: TerminationSchema }])
    ],
  controllers: [TerminationController],
  providers: [TerminationService]
})
export class TerminationModule {}
