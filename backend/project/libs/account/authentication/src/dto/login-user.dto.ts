import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
import { UserPasswordLength, DtoValidationMessage } from '@project/core';

export class LoginUserDto {
  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEmail({}, { message: DtoValidationMessage.email.invalidFormat })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '1234567',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(UserPasswordLength.Min, UserPasswordLength.Max, {
    message: DtoValidationMessage.password.length,
  })
  public password: string;
}
