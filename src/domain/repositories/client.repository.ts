import { Client } from '../entities/client.entity';

export abstract class ClientRepository {
  abstract findAll(): Promise<Client[]>;
  abstract findById(id: Client['codigo']): Promise<Client>;
}
