import { Module } from '@nestjs/common';
import { PersonalOrderRepository } from './personal-order.repository';
import { PersonalOrderService } from './personal-order.service';
import { PersonalOrderController } from './personal-order.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { getJwtOptions } from '@project/account-config';
import { UserModule } from '@project/user';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    UserModule,
  ],
  controllers: [PersonalOrderController],
  providers: [PersonalOrderRepository, PersonalOrderService],
  exports: [PersonalOrderRepository],
})
export class PersonalOrderModule {}
