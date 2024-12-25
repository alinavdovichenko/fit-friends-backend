import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserRdo } from '@project/authentication';
import { TrainingRdo } from './training.rdo';

export class FullTrainingRdo extends TrainingRdo {
  @ApiProperty({
    description: 'Training`s coach',
    type: UserRdo,
  })
  @Type(() => UserRdo)
  @Expose()
  public coach: UserRdo;
}
