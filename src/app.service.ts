import { Injectable } from '@nestjs/common';
import { MessageQueueService } from './message-queue/message-queue.service';

@Injectable()
export class AppService {
  constructor(private readonly messageQueueService: MessageQueueService) {}

  getHello(): string {
    return 'Hello World!';
  }

  createJob(): Promise<string> {
    return this.messageQueueService.addJob({ name: 'John Doe' });
  }
}
