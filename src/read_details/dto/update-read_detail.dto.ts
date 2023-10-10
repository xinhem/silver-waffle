import { PartialType } from '@nestjs/mapped-types';
import { CreateReadDetailDto } from './create-read_detail.dto';

export class UpdateReadDetailDto extends PartialType(CreateReadDetailDto) {}
