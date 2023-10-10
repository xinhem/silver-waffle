import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HttpExceptionFilter from './all-exception.filter'
import TransformInterceptor from './transform.interceptor'
import { join } from 'path'
import {NestExpressApplication} from '@nestjs/platform-express'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter())  //开启异常过滤器
  app.useGlobalInterceptors(new TransformInterceptor())  //开启拦截器
  app.useStaticAssets(join(__dirname,'images'),{
    prefix:"/image"
 })
  app.enableCors()  //开启跨域
  await app.listen(3000);
}
bootstrap();
