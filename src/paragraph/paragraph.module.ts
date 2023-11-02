import { Module } from '@nestjs/common';
import { ParagraphService } from './paragraph.service';
import { ParagraphController } from './paragraph.controller';
import {Paragraph} from './entities/paragraph.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Paragraph])
  ],
  controllers: [ParagraphController],
  providers: [ParagraphService],
})
export class ParagraphModule {}
