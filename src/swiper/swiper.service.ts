import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSwiperDto } from './dto/create-swiper.dto';
import { UpdateSwiperDto } from './dto/update-swiper.dto';
import { Swiper } from './entities/swiper.entity';

@Injectable()
export class SwiperService {
  constructor(
    @InjectRepository(Swiper)
    private readonly swiperRepository: Repository<Swiper>,
  ) { }

  create(createSwiperDto: CreateSwiperDto) {
    let data = new Swiper();
    data.name = createSwiperDto.name;
    data.read_id = createSwiperDto.read_id;
    data.img_address = createSwiperDto.img_address;
    data.types = createSwiperDto.type;
    return this.swiperRepository.save(data);
  }

  findAll(type_swiper:string) {
    return this.swiperRepository.find({
      take:6,
      where:{
       types:type_swiper
      }
    })
  }


}
