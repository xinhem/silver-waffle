import { Injectable } from '@nestjs/common';
import { CreateUserCollectDto } from './dto/create-user_collect.dto';
import { UpdateUserCollectDto } from './dto/update-user_collect.dto';

@Injectable()
export class UserCollectService {
  create(createUserCollectDto: CreateUserCollectDto) {
    return 'This action adds a new userCollect';
  }

  findAll() {
    return `This action returns all userCollect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCollect`;
  }

  update(id: number, updateUserCollectDto: UpdateUserCollectDto) {
    return `This action updates a #${id} userCollect`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCollect`;
  }
}
