import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageQueueModule } from './message-queue/message-queue.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config/validationSchema';
import messageQueueConfig from './config/messageQueue';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `${__dirname}/config/env/.${process.env.NODE_ENV ?? 'local'}.env`,
      ],
      load: [messageQueueConfig],
      validationSchema,
    }),
    MessageQueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
