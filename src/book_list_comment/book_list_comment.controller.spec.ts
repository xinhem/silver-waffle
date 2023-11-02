import { Test, TestingModule } from '@nestjs/testing';
import { BookListCommentController } from './book_list_comment.controller';
import { BookListCommentService } from './book_list_comment.service';

describe('BookListCommentController', () => {
  let controller: BookListCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookListCommentController],
      providers: [BookListCommentService],
    }).compile();

    controller = module.get<BookListCommentController>(BookListCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
