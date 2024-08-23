import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SubscriptionDto } from 'src/interface-adapters/dto/subscription.dto';
import { ClientRepository } from '../repositories/client.repository';
import { SubscriptionRepository } from '../repositories/subscription.repository';
import { AppRepository } from '../repositories/app.repository';
import { Status } from './enums/subscription-status';

@Injectable()
export class SubscriptionService {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
    @Inject('AppRepository')
    private readonly appRepository: AppRepository,
    @Inject('SubscriptionRepository')
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async create(body: SubscriptionDto) {
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

    return this.subscriptionRepository.create(body);
  }

  async getByType(tipo) {
    const statusTypes = {
      ATIVAS: 'ATIVAS',
      TODAS: 'TODAS',
      CANCELADAS: 'CANCELADAS',
    };

    const type = statusTypes[tipo];

    if (type === 'TODAS') {
      return await this.subscriptionRepository.findAll();
    }
  }
}
