import { Module } from '@nestjs/common';
import { FeedbackRepository } from './feedback.repository';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { getJwtOptions } from '@project/account-config';
import { UserModule } from '@project/user';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService, FeedbackRepository],
  exports: [FeedbackRepository],
})
export class FeedbackModule {}
