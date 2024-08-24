import { Subscription } from '../entities/subscription.entity';

export abstract class SubscriptionRepository {
  abstract create(body): Promise<Subscription>;
  abstract findAll(): Promise<Subscription[]>;
  abstract findAllActive(actualDate: any): Promise<Subscription[]>;
  abstract findAllInactive(actualDate: any): Promise<Subscription[]>;
  abstract findActiveById({
    codCli,
    actualDate,
  }: {
    codCli: any;
    actualDate: any;
  }): Promise<Subscription>;
  abstract findAllByClient(codCli: number): Promise<Subscription[]>;
  abstract findAllByApp(codApp: number): Promise<Subscription[]>;
}
