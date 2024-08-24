import { Injectable } from '@nestjs/common';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { prisma } from 'src/interface-adapters/persistence[typeorm]/database/prisma';

@Injectable()
export class PrismaSubscriptionRepository implements SubscriptionRepository {
  async create(data): Promise<Subscription> {
    return await prisma.assinatura.create({ data });
  }

  async findAll(): Promise<Subscription[]> {
    return await prisma.assinatura.findMany();
  }

  async findAllInactive(actualDate: any): Promise<Subscription[]> {
    return await prisma.assinatura.findMany({
      where: {
        fimVigencia: {
          lte: actualDate,
        },
      },
    });
  }

  async findAllActive(actualDate: any): Promise<Subscription[]> {
    return await prisma.assinatura.findMany({
      where: {
        fimVigencia: {
          gt: actualDate,
        },
      },
    });
  }
  async findActiveById({
    codCli,
    actualDate,
  }: {
    codCli: any;
    actualDate: any;
  }): Promise<Subscription> {
    return await prisma.assinatura.findFirst({
      where: {
        codCli,
        fimVigencia: {
          gt: actualDate,
        },
      },
    });
  }
}
