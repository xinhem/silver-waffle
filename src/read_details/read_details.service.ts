import { Injectable } from '@nestjs/common';
import { InjectRepository,} from '@nestjs/typeorm';
import { getConnection, getRepository,Repository } from 'typeorm';
import { CreateReadDetailDto } from './dto/create-read_detail.dto';
import { UpdateReadDetailDto } from './dto/update-read_detail.dto';
import {ReadDetail} from './entities/read_detail.entity'
import { Chart } from 'src/charts/entities/chart.entity';

@Injectable()
export class ReadDetailsService {
  constructor(
    @InjectRepository(ReadDetail)
    private readonly readDetailRepository: Repository<ReadDetail>,
  ){}

  create(createReadDetailDto: CreateReadDetailDto) {
    return 'This action adds a new readDetail';
  }

   async findAll(page:number,limit:number,types:string) {

  const data = await this.readDetailRepository.createQueryBuilder("readDetailRepository").where({
     type:types
  }).orderBy('RAND()').limit(limit).skip(page).getMany();

  return data;
     
  }

 async findOne(id: number,types:string) {
    
   let data = await this.readDetailRepository.createQueryBuilder().where({
    charts:id,
    type:types
   }).orderBy({
     heat:'DESC'
   }).getMany()

    return data;
  }

  addAll(createReadDetailDto: CreateReadDetailDto){
     let data = new ReadDetail();
     data.name = createReadDetailDto.name;
     data.Details = createReadDetailDto.Details;
     data.type = createReadDetailDto.type;
     data.authod = createReadDetailDto.authod;
     data.heat = createReadDetailDto.heat;
     data.read_img_url = createReadDetailDto.read_img_url;
     data.read_type = createReadDetailDto.read_type;
     data.score = createReadDetailDto.score;
     data.charts = createReadDetailDto.charts;
     return this.readDetailRepository.save(data);

  }

  async findAllChartsRead(type:string,charts_type:string){

    if(charts_type === '推荐榜'){
        return await this.readDetailRepository.createQueryBuilder().orderBy('RAND()').where({
         type:type
      }).getMany()
      }else if(charts_type === '高分榜'){
        return await this.readDetailRepository.createQueryBuilder().orderBy({
          score:'DESC'
        }).where({
          type:type
       }).getMany()
      }
  }
}
