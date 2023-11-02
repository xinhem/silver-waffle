import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BookListService } from './book_list.service';
import { CreateBookListDto } from './dto/create-book_list.dto';
import { UpdateBookListDto } from './dto/update-book_list.dto';

@Controller('/api/booklist')
export class BookListController {
  constructor(private readonly bookListService: BookListService) {}

  @Post()
  create(
    @Body('type') type:string,
    @Body('subject_id') subject_id:number,
    @Body('page') page:number,
    @Body('limit') limit:number,
  ) {
    return this.bookListService.create(type, subject_id,page,limit);
  }



}
