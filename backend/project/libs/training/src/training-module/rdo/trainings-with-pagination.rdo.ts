import { Expose } from 'class-transformer';
import { TrainingRdo } from './training.rdo';
import { BasePaginationRdo, FieldRange } from '@project/core';
import { ApiProperty } from '@nestjs/swagger';

export class TrainingsWithPaginationRdo extends BasePaginationRdo {
  @ApiProperty({
    description: 'Trainings list',
    type: [TrainingRdo],
  })
  @Expose()
  public trainings: TrainingRdo[];

  @ApiProperty({
    description: 'Trainings price range',
  })
  @Expose()
  public priceRange: FieldRange;

  @ApiProperty({
    description: 'Trainings price range',
  })
  @Expose()
  public caloriesRange: FieldRange;
}
