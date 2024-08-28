import { Injectable, NotFoundException } from '@nestjs/common';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { AppRepository } from 'src/domain/repositories/app.repository';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { SubscriptionRepository } from 'src/domain/repositories/subscription.repository';

@Injectable()
export class CreateSubscription_US {
  constructor(
    private readonly clientRepository: ClientRepository,
    private readonly appRepository: AppRepository,
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async execute(body): Promise<Subscription> {
    const today = new Date();

    const client = await this.clientRepository.findById(body.codCli);
    if (!client)
      throw new NotFoundException(
        'Cliente não encontrado! É necessário que o cliente exista',
      );

    const aplicativo = await this.appRepository.findById(body.codApp);
    if (!aplicativo)
      throw new NotFoundException(
        'Aplicativo não encontrado! É necessário que o aplicativo exista',
      );

    const clientHasSubscription =
      await this.subscriptionRepository.findActiveById({
        codCli: body.codCli,
        actualDate: today,
      });

    if (clientHasSubscription)
      throw new NotFoundException(
        'Esse cliente já possui uma assinatura ativa!',
      );

    const endSubscription = today.setDate(today.getDate() + 7);

    body.fimVigencia = new Date(endSubscription);

    return this.subscriptionRepository.create(body);
  }
}
