import { Module } from '@nestjs/common';
import { BookListCommentService } from './book_list_comment.service';
import { BookListCommentController } from './book_list_comment.controller';

@Module({
  controllers: [BookListCommentController],
  providers: [BookListCommentService],
})
export class BookListCommentModule {}
