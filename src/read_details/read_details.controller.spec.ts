import { Test, TestingModule } from '@nestjs/testing';
import { ReadDetailsController } from './read_details.controller';
import { ReadDetailsService } from './read_details.service';

describe('ReadDetailsController', () => {
  let controller: ReadDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadDetailsController],
      providers: [ReadDetailsService],
    }).compile();

    controller = module.get<ReadDetailsController>(ReadDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
