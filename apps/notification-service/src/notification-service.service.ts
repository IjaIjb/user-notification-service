import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
  RedisOptions,
} from '@nestjs/microservices';

@Injectable()
export class NotificationServiceService implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    } as RedisOptions);
  }

  onModuleInit() {
    this.client.connect().then(() => {
      console.log('Connected to Redis');
    });
  }

  // Method to emit an event to a channel
  emitUserCreatedEvent(user: any) {
    this.client.emit('user_created', user);
  }
}
