import { Injectable } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';

@Injectable()
export class GetSubscriptionList_US {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async execute({ tipo }): Promise<Subscription[]> {
    const statusTypes = {
      ATIVAS: 'ATIVAS',
      TODAS: 'TODAS',
      CANCELADAS: 'CANCELADAS',
    };

    const type = statusTypes[tipo];

    if (type === 'TODAS') {
      return await this.subscriptionRepository.findAll();
    }
  }
}
