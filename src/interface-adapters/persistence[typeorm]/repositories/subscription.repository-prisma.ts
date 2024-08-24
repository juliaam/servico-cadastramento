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

  async findByType(tipo: any): Promise<Subscription[]> {
    return await prisma.assinatura.findMany({
      where: {},
    });
  }
}
