import { Module } from '@nestjs/common';
import { ReadDetailsService } from './read_details.service';
import { ReadDetailsController } from './read_details.controller';

@Module({
  controllers: [ReadDetailsController],
  providers: [ReadDetailsService],
})
export class ReadDetailsModule {}
