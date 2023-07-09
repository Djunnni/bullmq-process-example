import { Inject, Injectable } from '@nestjs/common';
import {
  BullRootModuleOptions,
  SharedBullConfigurationFactory,
} from '@nestjs/bull';
import { ConfigType } from '@nestjs/config';
import messageQueueConfig from 'src/config/messageQueue';

@Injectable()
export class MessageQueueConfig implements SharedBullConfigurationFactory {
  static CONFIG_KEY = 'bull-config';
  static BATCH_QUEUE_NAME = 'batch';
  constructor(
    @Inject(messageQueueConfig.KEY)
    private config: ConfigType<typeof messageQueueConfig>,
  ) {}

  createSharedConfiguration():
    | BullRootModuleOptions
    | Promise<BullRootModuleOptions> {
    return {
      redis: {
        host: this.config.host,
        port: this.config.port,
      },
    };
  }
}
