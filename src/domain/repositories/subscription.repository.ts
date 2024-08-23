import { Subscription } from '../entities/subscription.entity';

export interface SubscriptionRepository {
  create(body): Promise<Subscription>;
}
