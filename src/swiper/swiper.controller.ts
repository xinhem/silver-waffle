import { Controller, Get, Post, Body, UseInterceptors,UploadedFile, Query} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express'
import { SwiperService } from './swiper.service';
import { CreateSwiperDto } from './dto/create-swiper.dto';
import { type } from 'os';
import { types } from 'util';



@Controller('api/swiper')
export class SwiperController {
  constructor(private readonly swiperService: SwiperService) {}

  @Post()
  create(@Body()  createSwiperDto: CreateSwiperDto) {
    return this.swiperService.create(createSwiperDto);
  }

  @Get('/getswiper')
  findAll(@Query('type_swiper') type_swiper:string) {
    return this.swiperService.findAll(type_swiper);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload (@UploadedFile() file) {
    return `http://localhost:3000/image/${file.filename}`
  }

}
