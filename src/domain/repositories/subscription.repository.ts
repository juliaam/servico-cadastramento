import { Subscription } from '../entities/subscription.entity';

export abstract class SubscriptionRepository {
  abstract create(body): Promise<Subscription>;
  abstract findAll(): Promise<Subscription[]>;
}
