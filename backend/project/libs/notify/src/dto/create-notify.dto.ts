import { NotifyText } from '@project/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateNotifyDto {
  @ApiProperty({
    description: 'Id of user which will responce',
    example: 'alina@gmail.com',
  })
  @IsEmail()
  public targetUserEmail: string;

  @ApiProperty({
    description: 'Type of notification',
    example: 'Хотела добавить тебя в друзья',
  })
  @IsString()
  @MinLength(NotifyText.Min)
  @MaxLength(NotifyText.Max)
  public text: string;
}
