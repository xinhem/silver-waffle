import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCollectModule } from './user_collect/user_collect.module';
import { SwiperModule } from './swiper/swiper.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '190012927',
      database: 'read_expo',
      entities: [],
      synchronize: true,
      retryAttempts:3,
      retryDelay:3000,
      autoLoadEntities:true,
    }),
    UserModule,
    UserCollectModule,
    SwiperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
