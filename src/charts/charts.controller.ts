import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { ReadDetail } from 'src/read_details/entities/read_detail.entity';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';

@Controller('api/charts')
export class ChartsController {
  constructor(
    private readonly chartsService: ChartsService,
    ) {}

  @Post()
  create(@Body() createChartDto: CreateChartDto) {
    return this.chartsService.create(createChartDto);
  }

  @Get('/type')
  findAll(
    @Query('type') type:string
  ) {
    return this.chartsService.findAll(type);
  }

  @Get('/charts/read')
  findOne(@Query('read_type') read_type: string,
          @Query('charts_label') charts_label: string
    ) {
    return this.chartsService.findOne(read_type,charts_label);
  }

}
