import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { getJwtOptions } from '@project/account-config';
import { ConfigService } from '@nestjs/config';
import { PrismaClientModule } from '@project/models';
import { JwtAccessStrategy } from '../../../authentication/src/strategies/jwt-access.strategy';


@Module({
  imports: [
    PrismaClientModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
  ],
  controllers: [UserController],
  providers: [UserRepository, UserService, JwtAccessStrategy],
  exports: [UserService, UserRepository],
})
export class UserModule {}
