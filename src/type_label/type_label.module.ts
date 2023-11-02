import { Module } from '@nestjs/common';
import { TypeLabelService } from './type_label.service';
import { TypeLabelController } from './type_label.controller';
import {TypeLabel} from './entities/type_label.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([TypeLabel])
  ],
  controllers: [TypeLabelController],
  providers: [TypeLabelService],
})
export class TypeLabelModule {}
