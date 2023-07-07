import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { MessageQueueConfig } from './config/message-queue.config';

@Injectable()
export class MessageQueueService {
  constructor(
    @InjectQueue(MessageQueueConfig.BATCH_QUEUE_NAME) private batchQueue: Queue,
  ) {}

  async addJob(data: any) {
    const job = this.batchQueue.add('invoice-excel', data);
    return (await job).name;
  }
}
