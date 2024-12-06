import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'kafkaSample',
            ssl: true,
            sasl: {
              mechanism: 'plain',
              username: 'LNA4QNZM7C5UORP2',
              password:
                'SVrjAw+LzoS/DNUvaNjQWCtPWuYrK39kCeNXeYymwU4J8d/N9/IaRczWaHYJk3QV',
            },
            brokers: ['pkc-12576z.us-west2.gcp.confluent.cloud:9092'],
          },
          consumer: {
            groupId: 'kafka-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
