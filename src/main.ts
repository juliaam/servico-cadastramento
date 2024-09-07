import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://kmwhllfz:OWG7biH_cT6cTcUt2cfh1dh0RIhDqV0f@jackal.rmq.cloudamqp.com/kmwhllfz',
      ],
      queue: 'payment_queue_send',
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
