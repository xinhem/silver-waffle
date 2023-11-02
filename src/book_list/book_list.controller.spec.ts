import { Test, TestingModule } from '@nestjs/testing';
import { BookListController } from './book_list.controller';
import { BookListService } from './book_list.service';

describe('BookListController', () => {
  let controller: BookListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookListController],
      providers: [BookListService],
    }).compile();

    controller = module.get<BookListController>(BookListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
