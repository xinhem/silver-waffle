import { Injectable } from '@nestjs/common';
import { CreateReadDetailDto } from './dto/create-read_detail.dto';
import { UpdateReadDetailDto } from './dto/update-read_detail.dto';

@Injectable()
export class ReadDetailsService {
  create(createReadDetailDto: CreateReadDetailDto) {
    return 'This action adds a new readDetail';
  }

  findAll() {
    return `This action returns all readDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} readDetail`;
  }

  update(id: number, updateReadDetailDto: UpdateReadDetailDto) {
    return `This action updates a #${id} readDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} readDetail`;
  }
}
