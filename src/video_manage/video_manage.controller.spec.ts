import { Test, TestingModule } from '@nestjs/testing';
import { VideoManageController } from './video_manage.controller';
import { VideoManageService } from './video_manage.service';

describe('VideoManageController', () => {
  let controller: VideoManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoManageController],
      providers: [VideoManageService],
    }).compile();

    controller = module.get<VideoManageController>(VideoManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
