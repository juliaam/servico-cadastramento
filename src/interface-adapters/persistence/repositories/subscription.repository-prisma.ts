import { Injectable } from '@nestjs/common';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { prisma } from 'src/interface-adapters/persistence/database/prisma';

@Injectable()
export class PrismaSubscriptionRepository implements SubscriptionRepository {
  async create(data): Promise<Subscription> {
    return await prisma.assinatura.create({ data });
  }

  async findAll(): Promise<Subscription[]> {
    return await prisma.assinatura.findMany();
  }

  async findById(codass: number): Promise<Subscription> {
    return await prisma.assinatura.findFirst({
      where: {
        codigo: codass,
      },
    });
  }

  async findAllInactive(currentDate: Date): Promise<Subscription[]> {
    return await prisma.assinatura.findMany({
      where: {
        fimVigencia: {
          lte: currentDate,
        },
      },
    });
  }

  async findAllActive(currentDate: Date): Promise<Subscription[]> {
    return await prisma.assinatura.findMany({
      where: {
        fimVigencia: {
          gt: currentDate,
        },
      },
    });
  }

  async findActiveById({ codCli, codApp, currentDate }): Promise<Subscription> {
    return await prisma.assinatura.findFirst({
      where: {
        codCli,
        codApp,
        fimVigencia: {
          gt: currentDate,
        },
      },
    });
  }

  async findAllByClient(codCli: number): Promise<Subscription[]> {
    return await prisma.assinatura.findMany({
      where: {
        codCli,
      },
    });
  }
  async findAllByApp(codApp: number): Promise<Subscription[]> {
    return await prisma.assinatura.findMany({
      where: {
        codApp,
      },
    });
  }
}
