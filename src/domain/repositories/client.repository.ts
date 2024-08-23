import { Client } from '../entities/client.entity';

export interface ClientRepository {
  findAll(): Promise<Client[]>;
  findById(id: Client['codigo']): Promise<Client>;
}
