import { Module } from '@nestjs/common';
import { VideoManageService } from './video_manage.service';
import { VideoManageController } from './video_manage.controller';

@Module({
  controllers: [VideoManageController],
  providers: [VideoManageService],
})
export class VideoManageModule {}
