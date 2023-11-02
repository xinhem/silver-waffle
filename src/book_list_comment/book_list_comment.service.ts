import { Injectable } from '@nestjs/common';
import { CreateBookListCommentDto } from './dto/create-book_list_comment.dto';
import { UpdateBookListCommentDto } from './dto/update-book_list_comment.dto';

@Injectable()
export class BookListCommentService {
  create(createBookListCommentDto: CreateBookListCommentDto) {
    return 'This action adds a new bookListComment';
  }

  findAll() {
    return `This action returns all bookListComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookListComment`;
  }

  update(id: number, updateBookListCommentDto: UpdateBookListCommentDto) {
    return `This action updates a #${id} bookListComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookListComment`;
  }
}
