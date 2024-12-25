import {
  MetroStation,
  UserRole,
  UserSex,
  UserNameLength,
  UserPasswordLength,
  DtoValidationMessage,
  UserLevel,
  TrainingType,
  UserDescriptionLength,
  Client,
  Trainer,
} from '@project/core';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsEnum,
  Length,
  IsOptional,
  IsISO8601,
  Matches,
  IsArray,
  ArrayNotEmpty,
  ArrayMaxSize,
  IsAlphanumeric
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'Alina',
    required: true,
    minLength: UserNameLength.Min,
    maxLength: UserNameLength.Max,
  })
  @IsString()
  @Length(UserNameLength.Min, UserNameLength.Max, {
    message: DtoValidationMessage.name.length,
  })
  @Matches(/[a-zа-яё\s]+/i)
  public name: string;

  @ApiProperty({
    description: 'User unique email',
    example: 'alina@mail.ru',
    required: true,
  })
  @IsEmail({}, { message: DtoValidationMessage.email.invalidFormat })
  public email: string;

  @ApiProperty({
    description: 'User avatar',
    example: 'my-avatar.png',
  })
  @IsOptional()
  @IsString()
  public avatar?: string;

  @ApiProperty({
    description: 'User password',
    example: '12345a',
    required: true,
    minLength: UserPasswordLength.Min,
    maxLength: UserPasswordLength.Max,
  })
  @IsAlphanumeric()
  @Length(UserPasswordLength.Min, UserPasswordLength.Max, {
    message: DtoValidationMessage.password.length,
  })
  public password: string;

  @ApiProperty({
    description: 'User sex',
    example: 'мужской',
    enum: UserSex,
    required: true,
  })
  @IsEnum(UserSex)
  public sex: UserSex;

  @ApiProperty({
    description: 'User birth date',
    example: '1993-01-11',
  })
  @IsOptional()
  @IsISO8601()
  public birthDate?: Date;

  @ApiProperty({
    description: 'User role',
    example: 'тренер',
    enum: UserRole,
    required: true,
  })
  @IsEnum(UserRole)
  public role: UserRole;

  @ApiProperty({
    description: 'User description',
    example: 'Я собираюсь стать лучшим в этом сфере, когда-нибудь.',
    minLength: UserDescriptionLength.Min,
    maxLength: UserDescriptionLength.Max,
    required: true,
  })
  @IsString()
  @IsOptional()
  @Length(UserDescriptionLength.Min, UserDescriptionLength.Max, {
    message: DtoValidationMessage.userDescription.length,
  })
  public description?: string;

  @ApiProperty({
    description: 'The nearest metro station to the place of training',
    example: 'Пионерская',
    enum: MetroStation,
    required: true,
  })
  @IsEnum(MetroStation)
  public location!: MetroStation;

  @ApiProperty({
    description: 'User level',
    example: 'Любитель',
    enum: UserLevel,
    required: true,
  })
  @IsEnum(UserLevel)
  @IsOptional()
  public level?: UserLevel;

  @ApiProperty({
    description: 'Training type',
    example: 'Кроссфит',
    required: true,
  })
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMaxSize(3)
  @IsOptional()
  @IsEnum(TrainingType, { each: true })
  public typesOfTraining?: TrainingType[];

  @ApiProperty({
    description: 'User of Trainer',
    example: [
      {
        certificates: ['certificate.pdf'],
        merits: 'Вырастил двоих олимпиадников',
        isPersonalTraining: true,
      },
    ],
  })
  public trainer?: Trainer;

  @ApiProperty({
    description: 'User of Client',
    example: [
      {
        timeOfTraining: '10-30 мин',
        caloryLosingPlanTotal: 1500,
        caloryLosingPlanDaily: 1000,
        isReady: true,
      },
    ],
  })
  public client?: Client;
}
