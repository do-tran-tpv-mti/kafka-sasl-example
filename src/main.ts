import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
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
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
