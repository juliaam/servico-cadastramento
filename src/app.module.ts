import { Module } from '@nestjs/common';
import { RegisterController } from './interface-adapters/controllers/app.controller';
import { GetClientsList_US } from './application[casos-de-uso]/get-client-list.use-case';
import { PrismaClientRepository } from './interface-adapters/persistence[typeorm]/repositories/clients';

@Module({
  controllers: [RegisterController],
  providers: [
    GetClientsList_US,
    {
      provide: 'ClientRepository',
      useClass: PrismaClientRepository,
    },
  ],
})
export class AppModule {}
