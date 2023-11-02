import { Test, TestingModule } from '@nestjs/testing';
import { TypeLabelController } from './type_label.controller';
import { TypeLabelService } from './type_label.service';

describe('TypeLabelController', () => {
  let controller: TypeLabelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeLabelController],
      providers: [TypeLabelService],
    }).compile();

    controller = module.get<TypeLabelController>(TypeLabelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
