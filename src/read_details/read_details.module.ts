import { Module } from '@nestjs/common';
import { ReadDetailsService } from './read_details.service';
import { ReadDetailsController } from './read_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ReadDetail} from './entities/read_detail.entity'

@Module({
  imports:[
    TypeOrmModule.forFeature([ReadDetail])
  ],
  controllers: [ReadDetailsController],
  providers: [ReadDetailsService],
})
export class ReadDetailsModule {}
