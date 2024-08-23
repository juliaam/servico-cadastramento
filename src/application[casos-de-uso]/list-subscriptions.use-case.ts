import { Injectable, Inject } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { SubscriptionService } from 'src/domain/services/subscription.service';

@Injectable()
export class GetSubscriptionList_US {
  constructor(
    @Inject('SubscriptionService')
    private readonly subscriptionService: SubscriptionService,
  ) {}

  async execute({ tipo }): Promise<Subscription[]> {
    return this.subscriptionService.getByType(tipo);
  }
}
