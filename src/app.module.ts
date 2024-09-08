import { Module } from '@nestjs/common';
import { RegisterController } from './interface-adapters/controllers/main.controller';

import { GetClientsList_US } from './application/list-clients.use-case';
import { GetAppList_US } from './application/list-apps.use-case';

import { PrismaClientRepository } from './interface-adapters/persistence/repositories/client.repository-prisma';
import { PrismaAppRepository } from './interface-adapters/persistence/repositories/app.repository-prisma';
import { CreateSubscription_US } from './application/create-subscription.use-case';
import { PrismaSubscriptionRepository } from './interface-adapters/persistence/repositories/subscription.repository-prisma';
import { UpdateCostApp_US } from './application/update-cost-app.use-case';
import { GetSubscriptionList_US } from './application/list-subscriptions.use-case';
import { AppRepository } from './domain/repositories/app.repository';
import { ClientRepository } from './domain/repositories/client.repository';
import { SubscriptionRepository } from './domain/repositories/subscription.repository';
import { GetSubscriptionListByClient_US } from './application/get-subscriptions-by-client.use-case';
import { GetSubscriptionListByApp_US } from './application/get-subscription-by-app.use-case';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'payment_service',
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
      },
    ]),
  ],
  controllers: [RegisterController],
  providers: [
    GetClientsList_US,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
    GetAppList_US,
    {
      provide: AppRepository,
      useClass: PrismaAppRepository,
    },
    CreateSubscription_US,
    {
      provide: SubscriptionRepository,
      useClass: PrismaSubscriptionRepository,
    },
    UpdateCostApp_US,
    {
      provide: AppRepository,
      useClass: PrismaAppRepository,
    },
    GetSubscriptionList_US,
    {
      provide: SubscriptionRepository,
      useClass: PrismaSubscriptionRepository,
    },
    GetSubscriptionListByClient_US,
    {
      provide: SubscriptionRepository,
      useClass: PrismaSubscriptionRepository,
    },
    GetSubscriptionListByApp_US,
    {
      provide: SubscriptionRepository,
      useClass: PrismaSubscriptionRepository,
    },
    PrismaSubscriptionRepository,
  ],
})
export class AppModule {}
