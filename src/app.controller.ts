import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_SERVICE')
    private readonly client: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('topicDemo', 'Hello Kafka');
    console.log('Get Emit testtttttttt:');
    return this.appService.getHello();
  }

  @EventPattern('topicDemo')
  getMessage(@Payload() message: string) {
    console.log('EventPattern get message testtttttttt:', message);
  }
}
