import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotificationServiceService } from './notification-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_CLIENT',
        transport: Transport.REDIS,
        options: {
          host: 'localhost', // Use host instead of URL
          port: 6379, // Specify the port
        },
      },
    ]),
  ],
  providers: [NotificationServiceService],
})
export class NotificationServiceModule {}
