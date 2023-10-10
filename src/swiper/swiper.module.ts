import { Module } from '@nestjs/common';
import { SwiperService } from './swiper.service';
import { SwiperController } from './swiper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Swiper } from './entities/swiper.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Swiper])],
  controllers: [SwiperController],
  providers: [SwiperService],
})
export class SwiperModule {}
