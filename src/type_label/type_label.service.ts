import { Injectable } from '@nestjs/common';
import { CreateTypeLabelDto } from './dto/create-type_label.dto';
import { UpdateTypeLabelDto } from './dto/update-type_label.dto';

@Injectable()
export class TypeLabelService {
  create(createTypeLabelDto: CreateTypeLabelDto) {
    return 'This action adds a new typeLabel';
  }

  findAll() {
    return `This action returns all typeLabel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeLabel`;
  }

  update(id: number, updateTypeLabelDto: UpdateTypeLabelDto) {
    return `This action updates a #${id} typeLabel`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeLabel`;
  }
}
