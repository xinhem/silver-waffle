import { Injectable } from '@nestjs/common';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';
import { Chart } from './entities/chart.entity';
import { ReadDetail } from 'src/read_details/entities/read_detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChartsService {

  constructor(
   @InjectRepository(Chart)
   private chartRepository: Repository<Chart>
  ){}

  create(createChartDto: CreateChartDto) {
    return 'This action adds a new chart';
  }

  findAll(type:string) {
    return this.chartRepository.find({where:{type:type}});
  }

  findOne(read_type:string,charts_label:string) {
    return 
  }

  update(id: number, updateChartDto: UpdateChartDto) {
    return `This action updates a #${id} chart`;
  }

  remove(id: number) {
    return `This action removes a #${id} chart`;
  }
}
