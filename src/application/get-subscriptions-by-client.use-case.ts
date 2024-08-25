import { Injectable } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';

@Injectable()
export class GetSubscriptionListByClient_US {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async execute(codCli: number): Promise<Subscription[]> {
    return await this.subscriptionRepository.findAllByClient(codCli);
  }
}
