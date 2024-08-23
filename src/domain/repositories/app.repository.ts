import { App } from '../entities/app.entity';

export interface AppRepository {
  findAll(): Promise<App[]>;
  findById(id: App['codigo']): Promise<App>;
}
