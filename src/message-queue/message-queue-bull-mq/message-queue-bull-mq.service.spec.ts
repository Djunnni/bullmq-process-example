import { Test, TestingModule } from '@nestjs/testing';
import { MessageQueueBullMqService } from './message-queue-bull-mq.service';

describe('MessageQueueBullMqService', () => {
  let service: MessageQueueBullMqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageQueueBullMqService],
      imports: [
        BullModule.registerQueue({
          name: MessageQueueConfig.BATCH_QUEUE_NAME,
        }),
      ],
    }).compile();

    service = module.get<MessageQueueBullMqService>(MessageQueueBullMqService);
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
