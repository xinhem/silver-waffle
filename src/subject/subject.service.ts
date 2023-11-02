import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ){}

  create(createSubjectDto: CreateSubjectDto) {
    return 'This action adds a new subject';
  }

  async findAll(page:number,limit:number,type:string) {
    let data =  await this.subjectRepository.createQueryBuilder().where({
      type:type
    }).orderBy('RAND()').skip(limit*(page-1)).take(limit).getMany();
    return data;
  }
  

}
