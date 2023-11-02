import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeLabelService } from './type_label.service';
import { CreateTypeLabelDto } from './dto/create-type_label.dto';
import { UpdateTypeLabelDto } from './dto/update-type_label.dto';

@Controller('type-label')
export class TypeLabelController {
  constructor(private readonly typeLabelService: TypeLabelService) {}

  @Post()
  create(@Body() createTypeLabelDto: CreateTypeLabelDto) {
    return this.typeLabelService.create(createTypeLabelDto);
  }

  @Get()
  findAll() {
    return this.typeLabelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeLabelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeLabelDto: UpdateTypeLabelDto) {
    return this.typeLabelService.update(+id, updateTypeLabelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeLabelService.remove(+id);
  }
}
