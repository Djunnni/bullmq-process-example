import { Injectable } from '@nestjs/common';
import { MessageQueue } from '../message-queue.interface';
import { MessageQueueConfig } from '../config/message-queue.config';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class MessageQueueBullMqService implements MessageQueue {
  constructor(
    @InjectQueue(MessageQueueConfig.BATCH_QUEUE_NAME) private batchQueue: Queue,
  ) {}

  async addJob(data: any) {
    const job = this.batchQueue.add('invoice-excel', data);
    return (await job).name;
  }
}
