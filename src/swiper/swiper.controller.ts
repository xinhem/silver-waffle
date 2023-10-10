import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SwiperService } from './swiper.service';
import { CreateSwiperDto } from './dto/create-swiper.dto';
import { UpdateSwiperDto } from './dto/update-swiper.dto';

@Controller('api/swiper')
export class SwiperController {
  constructor(private readonly swiperService: SwiperService) {}

  @Post()
  create(@Body() createSwiperDto: CreateSwiperDto) {
    return this.swiperService.create(createSwiperDto);
  }

  @Get('/getswiper')
  findAll() {
    return this.swiperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swiperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSwiperDto: UpdateSwiperDto) {
    return this.swiperService.update(+id, updateSwiperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swiperService.remove(+id);
  }
}
