import { Injectable,Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  @Inject(JwtService)
  private jwtService: JwtService

  constructor(
  @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(Username:string,password:string) {
    let data = await this.userRepository.findOne({
      where:{
        username:Username,
        password:password
      }
    });
   
    if(data.username == Username && data.password == password){

      const accessToken = this.jwtService.sign({Username,password}, {
        expiresIn: '3h'  //3个小时过期
      });
  
      const refreshToken = this.jwtService.sign({Username,password}, {
        expiresIn: '7d'  //第二个是7天到期
      })
  
      return {
        accoess_token: accessToken,
        refresh_token: refreshToken,
        user_ID: data.id
      }

    }
}

register(UserName,Password){
    let data = new User();
    data.username = UserName;
    data.password = Password;
    data.User_img = 'https://z1.ax1x.com/2023/10/12/piS1TJA.jpg'
    return this.userRepository.save(data);

}
}
