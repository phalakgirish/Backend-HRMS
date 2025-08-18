import { PartialType } from '@nestjs/swagger';
import { CreatePromotionDto } from './create-promotion.dto';

export class UpdatePromotion extends PartialType(CreatePromotionDto) {}
