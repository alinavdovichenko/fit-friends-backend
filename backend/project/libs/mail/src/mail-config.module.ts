import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import notifyConfig from './config/notify.config';

const ENV_USERS_FILE_PATH = 'apps/app/app.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [notifyConfig],
      envFilePath: ENV_USERS_FILE_PATH
    }),
  ]
})
export class MailConfigModule {}
