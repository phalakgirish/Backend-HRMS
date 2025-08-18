import { Module } from '@nestjs/common';
import { ResignationController } from './resignation.controller';
import { ResignationService } from './resignation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Resignation, ResignationSchema } from './schema/resignation.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Resignation.name, schema: ResignationSchema }])
    ],
  controllers: [ResignationController],
  providers: [ResignationService]
})
export class ResignationModule {}
