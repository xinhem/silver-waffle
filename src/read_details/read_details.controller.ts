import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ReadDetailsService } from './read_details.service';
import { CreateReadDetailDto } from './dto/create-read_detail.dto';
import { UpdateReadDetailDto } from './dto/update-read_detail.dto';

@Controller('/api/read')
export class ReadDetailsController {
  constructor(private readonly readDetailsService: ReadDetailsService) {}

  @Post()
  create(@Body() createReadDetailDto: CreateReadDetailDto) {
    return this.readDetailsService.create(createReadDetailDto);
  }

  @Get()
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('type') type: string,
  ) {
    return this.readDetailsService.findAll(page, limit,type);
  }

  @Get('/charts')
  findOne(@Query('id') id: number,@Query('type') type: string){
    return this.readDetailsService.findOne(+id,type);
  }

  @Post('/addRead')
  addReadDetails(@Body() createReadDetailDto: CreateReadDetailDto){
    return this.readDetailsService.addAll(createReadDetailDto)
  }


  @Get('/charts/read')
  findAllChartsRead(@Query('type') type: string,
                    @Query('charts_type') charts_type: string,
  ){
    return this.readDetailsService.findAllChartsRead(type,charts_type)
  }
}
