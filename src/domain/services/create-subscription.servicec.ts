import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SubscriptionDto } from 'src/interface-adapters/dto/subscription.dto';
import { ClientRepository } from '../repositories/client.repository';
import { SubscriptionRepository } from '../repositories/subscription.repository';

@Injectable()
export class SubscriptionService {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
    @Inject('SubscriptionRepository')
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async create(body: SubscriptionDto) {
    const client = await this.clientRepository.findById(body.codCli);
    if (!client)
      throw new NotFoundException(
        'Cliente não encontrado! É necessário que o cliente exista',
      );

    const aplicativo = await this.clientRepository.findById(body.codApp);
    if (!aplicativo)
      throw new NotFoundException(
        'Aplicativo não encontrado! É necessário que o aplicativo exista',
      );

    return this.subscriptionRepository.create(body);
  }
}
