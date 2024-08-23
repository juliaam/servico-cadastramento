import { Module } from '@nestjs/common';
import { RegisterController } from './interface-adapters/controllers/main.controller';

import { GetClientsList_US } from './application[casos-de-uso]/get-client-list.use-case';
import { GetAppList_US } from './application[casos-de-uso]/get-app-list.use-case';

import { PrismaClientRepository } from './interface-adapters/persistence[typeorm]/repositories/client.repository-prisma';
import { PrismaAppRepository } from './interface-adapters/persistence[typeorm]/repositories/app.repository-prisma';
import { SubscriptionService } from './domain/services/create-subscription.servicec';
import { CreateSubscription_US } from './application[casos-de-uso]/create-subscription.use-case';
import { PrismaSubscriptionRepository } from './interface-adapters/persistence[typeorm]/repositories/subscription.repository-prisma';

@Module({
  controllers: [RegisterController],
  providers: [
    GetClientsList_US,
    {
      provide: 'ClientRepository',
      useClass: PrismaClientRepository,
    },
    GetAppList_US,
    {
      provide: 'AppRepository',
      useClass: PrismaAppRepository,
    },
    CreateSubscription_US,
    {
      provide: 'SubscriptionService',
      useClass: SubscriptionService,
    },
    {
      provide: 'SubscriptionRepository',
      useClass: PrismaSubscriptionRepository,
    },
  ],
})
export class AppModule {}
