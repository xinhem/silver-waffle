import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookListCommentService } from './book_list_comment.service';
import { CreateBookListCommentDto } from './dto/create-book_list_comment.dto';
import { UpdateBookListCommentDto } from './dto/update-book_list_comment.dto';

@Controller('book-list-comment')
export class BookListCommentController {
  constructor(private readonly bookListCommentService: BookListCommentService) {}

  @Post()
  create(@Body() createBookListCommentDto: CreateBookListCommentDto) {
    return this.bookListCommentService.create(createBookListCommentDto);
  }

  @Get()
  findAll() {
    return this.bookListCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookListCommentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookListCommentDto: UpdateBookListCommentDto) {
    return this.bookListCommentService.update(+id, updateBookListCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookListCommentService.remove(+id);
  }
}
