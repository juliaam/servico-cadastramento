import { Injectable } from '@nestjs/common';
import { Payment } from 'src/domain/entities/payment.entity';
import { PaymentRepository } from 'src/domain/repositories/payment.repository';

import { prisma } from 'src/interface-adapters/persistence/database/prisma';

@Injectable()
export class PrismaPaymentRepository implements PaymentRepository {
  async findByCodAssinatura(codAssinatura: number): Promise<Payment> {
    return await prisma.pagamento.findFirst({
      where: {
        codigo: codAssinatura,
      }, // receber data para verificar se foi paga no mes certo ( acho que no caso vai ser se pagou mes passado ou esse mes)
    });
  }
}
