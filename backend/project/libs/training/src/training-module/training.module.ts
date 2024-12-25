import { Module } from '@nestjs/common';
import { TrainingRepository } from './training.repository';

@Module({
  imports: [
  ],
  controllers: [],
  providers: [TrainingRepository],
  exports: [TrainingRepository],
})
export class TrainingModule {}
