import { Test, TestingModule } from '@nestjs/testing';
import { TypeLabelService } from './type_label.service';

describe('TypeLabelService', () => {
  let service: TypeLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeLabelService],
    }).compile();

    service = module.get<TypeLabelService>(TypeLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
