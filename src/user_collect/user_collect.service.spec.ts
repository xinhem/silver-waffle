import { Test, TestingModule } from '@nestjs/testing';
import { UserCollectService } from './user_collect.service';

describe('UserCollectService', () => {
  let service: UserCollectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCollectService],
    }).compile();

    service = module.get<UserCollectService>(UserCollectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
