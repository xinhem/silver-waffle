import { Test, TestingModule } from '@nestjs/testing';
import { VideoManageService } from './video_manage.service';

describe('VideoManageService', () => {
  let service: VideoManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoManageService],
    }).compile();

    service = module.get<VideoManageService>(VideoManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
