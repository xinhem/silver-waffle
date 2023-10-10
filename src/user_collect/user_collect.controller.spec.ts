import { Test, TestingModule } from '@nestjs/testing';
import { UserCollectController } from './user_collect.controller';
import { UserCollectService } from './user_collect.service';

describe('UserCollectController', () => {
  let controller: UserCollectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCollectController],
      providers: [UserCollectService],
    }).compile();

    controller = module.get<UserCollectController>(UserCollectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
