import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadDetailsService } from './read_details.service';
import { CreateReadDetailDto } from './dto/create-read_detail.dto';
import { UpdateReadDetailDto } from './dto/update-read_detail.dto';

@Controller('read-details')
export class ReadDetailsController {
  constructor(private readonly readDetailsService: ReadDetailsService) {}

  @Post()
  create(@Body() createReadDetailDto: CreateReadDetailDto) {
    return this.readDetailsService.create(createReadDetailDto);
  }

  @Get()
  findAll() {
    return this.readDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadDetailDto: UpdateReadDetailDto) {
    return this.readDetailsService.update(+id, updateReadDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readDetailsService.remove(+id);
  }
}
