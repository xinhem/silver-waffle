import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Type} from './entities/type.entity';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypeService {

  constructor(
    @InjectRepository(Type)
    private readonly TypeRepository: Repository<Type>,
  ) { }

  create(createTypeDto: CreateTypeDto) {
    let data = new Type();
    data.name = createTypeDto.name;
    return this.TypeRepository.save(data);
  }

  findAll() {
    return this.TypeRepository.find({
      take:6
    });
  }

}
