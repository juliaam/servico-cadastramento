import { Injectable } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';

@Injectable()
export class GetSubscriptionListByApp_US {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async execute(codApp: number): Promise<Subscription[]> {
    return await this.subscriptionRepository.findAllByApp(codApp);
  }
}
