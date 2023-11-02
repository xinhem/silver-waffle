import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoManageDto } from './create-video_manage.dto';

export class UpdateVideoManageDto extends PartialType(CreateVideoManageDto) {}
