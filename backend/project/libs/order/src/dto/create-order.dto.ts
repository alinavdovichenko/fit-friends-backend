import { OrderType, PaymentType } from '@project/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Training or season pass to gym',
    example: 'Абонемент',
    enum: OrderType,
    required: true,
  })
  @IsEnum(OrderType)
  public type!: OrderType;

  @ApiProperty({
    description: 'Trainer id',
    example: '1',
    required: true,
  })
  @IsOptional()
  @IsNumber()
  public trainerId!: number;

  @ApiProperty({
    description: 'Training id',
    example: '1',
    required: true,
  })
  @IsOptional()
  @IsNumber()
  public trainingId!: number;

  @ApiProperty({
    description: 'Subscription price',
    example: 1234,
    required: true,
  })
  @IsNumber()
  @Min(0)
  public price!: number;

  @ApiProperty({
    description: 'Trainings quantity',
    example: 12,
    minimum: 1,
    required: true,
  })
  @IsNumber()
  @Min(1)
  @IsPositive()
  public quantity!: number;

  @ApiProperty({
    description: 'Payment sum',
    example: '1234',
    required: true,
  })
  public sumPrice!: number;

  @ApiProperty({
    description: 'Payment method',
    example: 'Visa',
    enum: PaymentType,
    required: true,
  })
  public typeOfPayment!: PaymentType;
}
