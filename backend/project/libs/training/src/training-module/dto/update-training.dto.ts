import {
  UserLevel,
  TrainingDuration,
  TrainingSexFor,
  TrainingType,
  DtoValidationMessage,
  CaloriesValue,
  PriceValue,
  TrainingDescriptionLength,
  TrainingTitleLength,
} from '@project/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, Length, IsInt, Min, Max, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTrainingDto {
  @ApiProperty({
    description: 'Training title',
    example: 'hatha',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(TrainingTitleLength.Min, TrainingTitleLength.Max, {
    message: DtoValidationMessage.trainingTitle.length,
  })
  @IsOptional()
  public title?: string;

  @ApiProperty({
    description: 'Training level',
    example: 'любитель',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEnum(UserLevel, { message: DtoValidationMessage.level.invalidFormat })
  @IsOptional()
  public level?: UserLevel;

  @ApiProperty({
    description: 'Training type',
    example: 'йога',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEnum(TrainingType, {
    message: DtoValidationMessage.trainingsTypes.invalidItems,
  })
  @IsOptional()
  public type?: TrainingType;

  @ApiProperty({
    description: 'Training duration',
    example: '30-50',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEnum(TrainingDuration, {
    message: DtoValidationMessage.timeForTraining.invalidFormat,
  })
  @IsOptional()
  public duration?: TrainingDuration;

  @ApiProperty({
    description: 'Training price',
    example: '5500',
  })
  @Transform(({ value }) => +value)
  @IsInt()
  @Min(PriceValue.Min, { message: DtoValidationMessage.price.value })
  @IsOptional()
  public price?: number;

  @ApiProperty({
    description: 'Training`s calories loss',
    example: '2300',
  })
  @Transform(({ value }) => +value)
  @IsInt()
  @Min(CaloriesValue.Min, { message: DtoValidationMessage.calories.value })
  @Max(CaloriesValue.Max, { message: DtoValidationMessage.calories.value })
  @IsOptional()
  public calories?: number;

  @ApiProperty({
    description: 'Training description',
    example:
      'Упражнения по хатха йоге, направленные на понижение нервной возбудимости.',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(TrainingDescriptionLength.Min, TrainingDescriptionLength.Max, {
    message: DtoValidationMessage.trainingDescription.length,
  })
  @IsOptional()
  public description?: string;

  @ApiProperty({
    description: 'Training`s user sex',
    example: 'для женщин',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEnum(TrainingSexFor, {
    message: DtoValidationMessage.trainingSexFor.invalidFormat,
  })
  public userSex: TrainingSexFor;

  @ApiProperty({
    description: 'Training video url',
  })
  @IsOptional()
  public video?: string;
}
