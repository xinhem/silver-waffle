import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeLabelDto } from './create-type_label.dto';

export class UpdateTypeLabelDto extends PartialType(CreateTypeLabelDto) {}
