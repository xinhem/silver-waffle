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
    return 'This action adds a new swiper';
  }

  findAll() {
    return this.swiperRepository.find({
      take:6
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} swiper`;
  }

  update(id: number, updateSwiperDto: UpdateSwiperDto) {
    return `This action updates a #${id} swiper`;
  }

  remove(id: number) {
    return `This action removes a #${id} swiper`;
  }
}
