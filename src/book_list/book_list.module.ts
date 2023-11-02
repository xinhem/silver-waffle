import { Module } from '@nestjs/common';
import { BookListService } from './book_list.service';
import { BookListController } from './book_list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookList } from './entities/book_list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookList])
  ],
  controllers: [BookListController],
  providers: [BookListService],
})
export class BookListModule {}
