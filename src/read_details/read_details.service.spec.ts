import { Test, TestingModule } from '@nestjs/testing';
import { ReadDetailsService } from './read_details.service';

describe('ReadDetailsService', () => {
  let service: ReadDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadDetailsService],
    }).compile();

    service = module.get<ReadDetailsService>(ReadDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
