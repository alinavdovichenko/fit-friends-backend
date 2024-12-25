import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { getJwtOptions } from '@project/account-config';
import { UserModule } from '@project/user';
import { TrainingModule } from '@project/training';
import { ConfigService } from '@nestjs/config';
import { OrderModule } from '@project/order';
import { FriendModule } from '@project/friend';
import { PersonalOrderModule } from '@project/personal-order';
import { ClientRoomController } from './client-room.controller';
import { ClientRoomService } from './client-room.service';
import { BalanceModule } from '@project/balance';
import { FeedbackModule } from '@project/feedback';
import { NotifyModule } from '@project/notify';
import { SubscriberModule } from '@project/subscriber';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    UserModule,
    TrainingModule,
    FriendModule,
    OrderModule,
    PersonalOrderModule,
    BalanceModule,
    FeedbackModule,
    NotifyModule,
    SubscriberModule,
  ],
  controllers: [ClientRoomController],
  providers: [ClientRoomService],
})
export class ClientRoomModule {}
