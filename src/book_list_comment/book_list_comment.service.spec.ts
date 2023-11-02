import { Test, TestingModule } from '@nestjs/testing';
import { BookListCommentService } from './book_list_comment.service';

describe('BookListCommentService', () => {
  let service: BookListCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookListCommentService],
    }).compile();

    service = module.get<BookListCommentService>(BookListCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
