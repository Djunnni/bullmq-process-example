import { Test, TestingModule } from '@nestjs/testing';
import { MessageQueueService } from './message-queue.service';
import { ConfigService } from '@nestjs/config';
import { BullModule, getQueueToken } from '@nestjs/bull';
import { MessageQueueConfig } from './config/message-queue.config';
import { Queue } from 'bull';

describe('MessageQueueService', () => {
  let service: MessageQueueService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BullModule.registerQueue({
          name: MessageQueueConfig.BATCH_QUEUE_NAME,
        }),
      ],
      providers: [ConfigService, MessageQueueService],
    })
      .overrideProvider(getQueueToken(MessageQueueConfig.BATCH_QUEUE_NAME))
      .useValue({
        add: jest.fn().mockImplementation((arg) => ({ name: 'test' })),
      })
      .compile();

    service = module.get<MessageQueueService>(MessageQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addJob', () => {
    it('should job add to queue', async () => {
      const job = await service.addJob('test-job');
      expect(job).not.toBeNull();
    });
  });
});
