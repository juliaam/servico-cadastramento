import { Module } from '@nestjs/common';
import { RegisterController } from './interface-adapters/controllers/main.controller';

import { GetClientsList_US } from './application[casos-de-uso]/list-clients.use-case';
import { GetAppList_US } from './application[casos-de-uso]/list-apps.use-case';

import { PrismaClientRepository } from './interface-adapters/persistence[typeorm]/repositories/client.repository-prisma';
import { PrismaAppRepository } from './interface-adapters/persistence[typeorm]/repositories/app.repository-prisma';
import { CreateSubscription_US } from './application[casos-de-uso]/create-subscription.use-case';
import { PrismaSubscriptionRepository } from './interface-adapters/persistence[typeorm]/repositories/subscription.repository-prisma';
import { UpdateCostApp_US } from './application[casos-de-uso]/update-cost-app.use-case';
import { GetSubscriptionList_US } from './application[casos-de-uso]/list-subscriptions.use-case';
import { AppRepository } from './domain/repositories/app.repository';
import { ClientRepository } from './domain/repositories/client.repository';
import { SubscriptionRepository } from './domain/repositories/subscription.repository';

@Module({
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
  ],
})
export class AppModule {}
