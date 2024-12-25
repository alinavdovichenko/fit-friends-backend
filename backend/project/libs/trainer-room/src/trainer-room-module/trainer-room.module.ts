import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJwtOptions } from '@project/account-config';
import { UserModule } from '@project/user';
import { TrainingModule } from '@project/training';
import { Module } from '@nestjs/common';
import { OrderModule } from '@project/order';
import { FriendModule } from '@project/friend';
import { PersonalOrderModule } from '@project/personal-order';
import { TrainerRoomController } from './trainer-room.controller';
import { TrainerRoomService } from './trainer-room.service';
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
    NotifyModule,
    FriendModule,
    OrderModule,
    PersonalOrderModule,
    NotifyModule,
    SubscriberModule,
  ],
  controllers: [TrainerRoomController],
  providers: [TrainerRoomService],
})
export class TrainerRoomModule {}
