import { Module } from '@nestjs/common';
import { MessageQueueService } from './message-queue.service';
import { BullModule } from '@nestjs/bull';
import { InvoiceConsumer } from './consumers/invoice.consumers';

import { MessageQueueConfig } from './config/message-queue.config';

@Module({
  imports: [
    BullModule.forRootAsync(MessageQueueConfig.CONFIG_KEY, {
      useClass: MessageQueueConfig,
    }),
    BullModule.registerQueueAsync({
      configKey: MessageQueueConfig.CONFIG_KEY,
      name: MessageQueueConfig.BATCH_QUEUE_NAME,
    }),
  ],
  providers: [MessageQueueService, InvoiceConsumer],
  exports: [MessageQueueService],
})
export class MessageQueueModule {}
