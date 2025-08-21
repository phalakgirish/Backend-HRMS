import { Module } from '@nestjs/common';
import { SupportRequestController } from './supportRequest.controller';
import { SupportRequestService } from './supportRequest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SupportRequest, SupportRequestSchema } from './schema/supportRequest.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: SupportRequest.name, schema: SupportRequestSchema }])
    ],
  controllers: [SupportRequestController],
  providers: [SupportRequestService]
})
export class SupportRequestModule {}
