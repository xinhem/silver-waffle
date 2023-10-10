import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCollectService } from './user_collect.service';
import { CreateUserCollectDto } from './dto/create-user_collect.dto';
import { UpdateUserCollectDto } from './dto/update-user_collect.dto';

@Controller('user-collect')
export class UserCollectController {
  constructor(private readonly userCollectService: UserCollectService) {}

  @Post()
  create(@Body() createUserCollectDto: CreateUserCollectDto) {
    return this.userCollectService.create(createUserCollectDto);
  }

  @Get()
  findAll() {
    return this.userCollectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCollectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCollectDto: UpdateUserCollectDto) {
    return this.userCollectService.update(+id, updateUserCollectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCollectService.remove(+id);
  }
}
