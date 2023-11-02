import { Injectable } from '@nestjs/common';
import { CreateVideoManageDto } from './dto/create-video_manage.dto';
import { UpdateVideoManageDto } from './dto/update-video_manage.dto';

@Injectable()
export class VideoManageService {
  create(createVideoManageDto: CreateVideoManageDto) {
    return 'This action adds a new videoManage';
  }

  findAll() {
    return `This action returns all videoManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} videoManage`;
  }

  update(id: number, updateVideoManageDto: UpdateVideoManageDto) {
    return `This action updates a #${id} videoManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} videoManage`;
  }
}
