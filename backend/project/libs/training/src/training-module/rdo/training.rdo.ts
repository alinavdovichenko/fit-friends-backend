import {
  UserLevel,
  TrainingDuration,
  TrainingSexFor,
  TrainingType,
} from '@project/core';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TrainingRdo {
  @ApiProperty({
    description: 'The uniq training ID',
    example: '65fb2224ddbac789d3321447',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Training  title',
    example: 'hatha',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Training background image',
    example: 'image.jpg',
  })
  @Expose()
  public backgroundImage: string;

  @ApiProperty({
    description: 'Training level',
    example: 'любитель',
  })
  @Expose()
  public level: UserLevel;

  @ApiProperty({
    description: 'Training type',
    example: 'йога',
  })
  @Expose()
  public type: TrainingType;

  @ApiProperty({
    description: 'Training duration',
    example: '30-50',
  })
  @Expose()
  public duration: TrainingDuration;

  @ApiProperty({
    description: 'Training price',
    example: '5500',
  })
  @Expose()
  public price: number;

  @ApiProperty({
    description: 'Training`s calories loss',
    example: '2300',
  })
  @Expose()
  public calories: number;

  @ApiProperty({
    description: 'Training description',
    example:
      'Упражнения по хатха йоге, направленные на понижение нервной возбудимости.',
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Training`s user sex',
    example: 'женский',
  })
  @Expose()
  public userSex: TrainingSexFor;

  @ApiProperty({
    description: 'Training`s coach id',
    example: '65fb2224ddbac789d3321447',
  })
  @Expose()
  public coachId: string;

  @ApiProperty({
    description: 'Training`s special offer flag',
    example: 'true',
  })
  @Expose()
  public isSpecial: boolean;

  @ApiProperty({
    description: 'Training rating',
    example: '5',
  })
  @Expose()
  public rating: number;
}
