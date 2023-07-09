import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageQueueModule } from './message-queue/message-queue.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `${__dirname}/config/env/.${process.env.NODE_ENV ?? 'local'}.env`,
      ],
      validationSchema,
    }),
    MessageQueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
