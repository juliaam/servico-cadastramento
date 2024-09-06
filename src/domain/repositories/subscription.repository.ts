import { Subscription } from '../entities/subscription.entity';

export abstract class SubscriptionRepository {
  abstract create(body): Promise<Subscription>;
  abstract findAll(): Promise<Subscription[]>;
  abstract findAllActive(currentDate: Date): Promise<Subscription[]>;
  abstract findAllInactive(currentDate: Date): Promise<Subscription[]>;
  abstract findActiveById({
    codCli,
    codApp,
    currentDate,
  }: {
    codCli: number;
    codApp: number;
    currentDate: Date;
  }): Promise<Subscription>;
  abstract findAllByClient(codCli: number): Promise<Subscription[]>;
  abstract findAllByApp(codApp: number): Promise<Subscription[]>;
}
