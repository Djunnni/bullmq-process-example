import { Injectable } from '@nestjs/common';
import { MessageQueue } from '../message-queue.interface';

@Injectable()
export class MessageQueueSqsService implements MessageQueue {
  async addJob(data: any) {
    return Promise.resolve('for AWS SQS Service');
  }
}
