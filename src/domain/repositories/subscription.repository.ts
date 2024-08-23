import { Subscription } from '../entities/subscription.entity';
// import { Status } from '../services/enums/subscription-status';

export interface SubscriptionRepository {
  create(body): Promise<Subscription>;
  findAll(): Promise<Subscription[]>;
}
