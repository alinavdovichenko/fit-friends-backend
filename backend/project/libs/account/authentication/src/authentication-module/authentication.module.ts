import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UserModule } from '@project/user';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RefreshTokenModule } from '../refresh-token/refresh-token.module';
import { getJwtOptions } from '@project/account-config';
import { LocalStrategy } from '../strategies/local-strategy';
import { JwtRefreshStrategy } from '../strategies/jwt.refresh.strategy';
import { JwtAccessStrategy } from '../strategies/jwt-access.strategy';

const HttpClient = {
  MaxRedirects: 5,
  Timeout: 3000
}
@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    RefreshTokenModule,
    HttpModule.register({
      timeout: HttpClient.Timeout,
      maxRedirects: HttpClient.MaxRedirects,
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    JwtAccessStrategy,
    LocalStrategy,
    JwtRefreshStrategy
  ]
})
export class AuthenticationModule {}
