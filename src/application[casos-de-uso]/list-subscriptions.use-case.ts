import { Injectable } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { PaymentRepository } from 'src/domain/repositories/payment.repository';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';

@Injectable()
export class GetSubscriptionList_US {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
    private readonly paymentRepository: PaymentRepository,
  ) {}

  async execute({ tipo }): Promise<Subscription[]> {
    if (tipo === 'TODAS') {
      return await this.subscriptionRepository.findAll();
    }
    if (tipo === 'CANCELADAS') {
      return await this.subscriptionRepository.findAll();
    }
    if (tipo === 'ATIVAS') {
      return await this.subscriptionRepository.findAll();
    }
  }
}
