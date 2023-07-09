import { Inject, Injectable } from '@nestjs/common';
import { MessageQueue } from './message-queue.interface';

@Injectable()
export class MessageQueueService implements MessageQueue {
  constructor(
    @Inject('MessageQueue')
    private readonly messageQueue: MessageQueue,
  ) {}

  addJob(data: any): Promise<string> {
    return this.messageQueue.addJob(data);
  }
}
