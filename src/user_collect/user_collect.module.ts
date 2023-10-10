import { Module } from '@nestjs/common';
import { UserCollectService } from './user_collect.service';
import { UserCollectController } from './user_collect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Collect } from './entities/user_collect.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User_Collect])],
  controllers: [UserCollectController],
  providers: [UserCollectService],
})
export class UserCollectModule {}
