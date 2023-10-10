import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  login(@Body('username') Username:string,
         @Body('password') password:string) {
    return this.userService.create(Username,password);
  }

  @Post('/register')
  create(@Body('username') UserName:string,
  @Body('password') Password:string){
    return this.userService.register(UserName,Password);
  }

}
