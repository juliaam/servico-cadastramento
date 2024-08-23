import { Injectable } from '@nestjs/common';
import {
  AppRepository,
  UpdateCostParameters,
} from 'src/domain/repositories/app.repository';
import { App } from 'src/domain/entities/app.entity';
import { prisma } from 'src/interface-adapters/persistence[typeorm]/database/prisma';

@Injectable()
export class PrismaAppRepository implements AppRepository {
  constructor() {}

  async findAll(): Promise<App[]> {
    return await prisma.aplicativo.findMany();
  }

  async findById(id: App['codigo']): Promise<App> {
    return await prisma.aplicativo.findFirst({
      where: {
        codigo: id,
      },
    });
  }

  async updateCost({ codApp, cost }: UpdateCostParameters): Promise<App> {
    return await prisma.aplicativo.update({
      where: {
        codigo: codApp,
      },
      data: {
        custoMensal: cost,
      },
    });
  }
}
