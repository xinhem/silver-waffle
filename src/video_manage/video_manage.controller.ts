import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoManageService } from './video_manage.service';
import { CreateVideoManageDto } from './dto/create-video_manage.dto';
import { UpdateVideoManageDto } from './dto/update-video_manage.dto';

@Controller('video-manage')
export class VideoManageController {
  constructor(private readonly videoManageService: VideoManageService) {}

  @Post()
  create(@Body() createVideoManageDto: CreateVideoManageDto) {
    return this.videoManageService.create(createVideoManageDto);
  }

  @Get()
  findAll() {
    return this.videoManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoManageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoManageDto: UpdateVideoManageDto) {
    return this.videoManageService.update(+id, updateVideoManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoManageService.remove(+id);
  }
}
