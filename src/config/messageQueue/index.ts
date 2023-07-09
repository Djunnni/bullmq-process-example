import { registerAs } from '@nestjs/config';

export default registerAs('messageQueue', () => ({
  host: process.env.MESSAGE_QUEUE_HOST,
  port: +process.env.MESSAGE_QUEUE_PORT,
}));
