import { Injectable, Inject } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Client } from 'src/domain/entities/client.entity';

@Injectable()
export class GetClientsList_US {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute(): Promise<Client[]> {
    return this.clientRepository.findAll();
  }
}
