import { Injectable } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';

@Injectable()
export class GetSubscriptionList_US {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async execute({ tipo }): Promise<Subscription[]> {
    const today = new Date();
    if (tipo === 'TODAS') {
      return await this.subscriptionRepository.findAll();
    }
    if (tipo === 'CANCELADAS') {
      return await this.subscriptionRepository.findAllInactive(today);
    }
    if (tipo === 'ATIVAS') {
      return await this.subscriptionRepository.findAllActive(today);
    }
  }
}
