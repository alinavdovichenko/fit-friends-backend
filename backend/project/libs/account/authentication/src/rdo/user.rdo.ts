import {
  TrainingDuration,
  UserRole,
  TrainingType,
  Alert,
  Order,
  PersonalOrder,
} from '@project/core';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13',
  })
  @Expose()
  public userId: number;

  @ApiProperty({
    description: 'User name',
    example: 'Alina',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@gmail.com',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User avatar',
    example: 'avatar.jpg',
  })
  @Expose()
  public avatar?: string;

  @ApiProperty({
    description: 'Human sex',
    example: 'неважно',
  })
  @Expose()
  public sex: string;

  @ApiProperty({
    description: 'User birth date',
    example: '01.01.2000',
  })
  @Expose()
  public birthDate: string;

  @ApiProperty({
    description: 'User role',
    example: 'тренер',
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: 'User description',
    example: 'О себе много чего могу рассказать...',
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'subway station',
    example: 'Пионерская',
  })
  @Expose()
  public location: string;

  @ApiProperty({
    description: 'User creation date',
    example: '01.01.2000',
  })
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    description: 'User level',
    example: 'новичок',
  })
  @Expose()
  public level: string;

  @ApiProperty({
    description: 'User types of training',
    example: 'йога, бег, аэробика',
  })
  @Expose()
  public typesOfTraining: TrainingType[];

  @ApiProperty({
    description: 'User alerts',
    example: [
      {
        text: 'Вам пора на тренировку',
        date: '2023-02-25T14:07:27.554Z',
      },
    ],
    required: true,
  })
  @Expose()
  public alerts: Alert[];

  @ApiProperty({
    description: 'User of Client',
    example: [
      {
        id: 1,
        userId: 1,
        timeOfTraining: '10-30 мин',
        caloryLosingPlanTotal: 1500,
        caloryLosingPlanDaily: 1000,
        isReady: true,
      },
    ],
  })
  @Expose()
  public client?: {
    id?: number;
    userId?: number;
    timeOfTraining?: TrainingDuration;
    caloryLosingPlanTotal?: number;
    caloryLosingPlanDaily?: number;
    isReady?: boolean;
  };

  @ApiProperty({
    description: 'User of Trainer',
    example: [
      {
        id: 1,
        userId: 1,
        certificate: 'certificate.pdf',
        merits: 'Вырастил двоих олимпиадников',
        isPersonalTraining: true,
      },
    ],
  })
  @Expose()
  public trainer?: {
    id?: number;
    userId?: number;
    certificate?: string;
    merits?: string;
    isPersonalTraining?: boolean;
  };

  @ApiProperty({
    description: 'User orders',
    example: 'order',
  })
  @Expose()
  public orders?: Order[];

  @ApiProperty({
    description: 'User personal orders',
    example: 'order',
  })
  @Expose()
  public personalOrders?: PersonalOrder[];
}
