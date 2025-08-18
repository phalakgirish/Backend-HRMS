import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Transfer, TransferSchema } from './schema/transfer.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Transfer.name, schema: TransferSchema }])
    ],
  controllers: [TransferController],
  providers: [TransferService]
})
export class TransferModule {}
