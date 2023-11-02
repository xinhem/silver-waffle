import { Injectable } from '@nestjs/common';
import { CreateBookListDto } from './dto/create-book_list.dto';
import { UpdateBookListDto } from './dto/update-book_list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookList } from './entities/book_list.entity';

@Injectable()
export class BookListService {
  constructor(
  @InjectRepository(BookList)
  private readonly bookListRepository: Repository<BookList>
  ){}

  async create(type, subject_id,page,limit) {
     let data = await this.bookListRepository.createQueryBuilder().where({
      type:type,
      subject:subject_id
     }).skip(limit*(page-1)).take(limit).getMany()
     return data;
  }

}
