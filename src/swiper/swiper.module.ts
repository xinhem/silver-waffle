import { Module } from '@nestjs/common';
import { SwiperService } from './swiper.service';
import { SwiperController } from './swiper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Swiper } from './entities/swiper.entity';
import { MulterModule } from '@nestjs/platform-express'
import {diskStorage} from 'multer'
import { extname,join } from 'path';

@Module({
  imports: [TypeOrmModule.forFeature([Swiper]),
  MulterModule.register({
    storage:diskStorage({
       destination:join(__dirname,"../images"),
       filename:(_,file,callback) => {
          const fileName = `${new Date().getTime() + extname(file.originalname)}`
          return callback(null,fileName)
       }
    })
 })
],
  controllers: [SwiperController],
  providers: [SwiperService],
})
export class SwiperModule {}
