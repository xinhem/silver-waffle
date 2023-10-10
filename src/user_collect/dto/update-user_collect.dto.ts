import { PartialType } from '@nestjs/mapped-types';
import { CreateUserCollectDto } from './create-user_collect.dto';

export class UpdateUserCollectDto extends PartialType(CreateUserCollectDto) {}
