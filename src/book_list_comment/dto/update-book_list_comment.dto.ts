import { PartialType } from '@nestjs/mapped-types';
import { CreateBookListCommentDto } from './create-book_list_comment.dto';

export class UpdateBookListCommentDto extends PartialType(CreateBookListCommentDto) {}
