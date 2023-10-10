import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCollectModule } from './user_collect/user_collect.module';
import { SwiperModule } from './swiper/swiper.module';
import { AdminModule } from './admin/admin.module';
import { TypeModule } from './type/type.module';
import { ReadDetailsModule } from './read_details/read_details.module';
import { BookshelfModule } from './bookshelf/bookshelf.module';

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
      extra: {
        timezone: 'Asia/Shanghai', // 设置时区为中国
      },
      // charset: 'utf8mb4',
    }),
    UserModule,
    UserCollectModule,
    SwiperModule,
    AdminModule,
    TypeModule,
    ReadDetailsModule,
    BookshelfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
