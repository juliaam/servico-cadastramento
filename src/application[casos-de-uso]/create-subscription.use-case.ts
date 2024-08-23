import { Injectable, Inject } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { SubscriptionService } from 'src/domain/services/subscription.service';

@Injectable()
export class CreateSubscription_US {
  constructor(
    @Inject('SubscriptionService')
    private readonly subscriptionService: SubscriptionService,
  ) {}

  async execute(body): Promise<Subscription> {
    return await this.subscriptionService.create(body);
  }
}
