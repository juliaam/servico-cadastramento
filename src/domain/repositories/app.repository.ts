import { App } from '../entities/app.entity';

export type codApp = App['codigo'];
export type UpdateCostParameters = {
  codApp: codApp;
  cost: number;
};
export interface AppRepository {
  findAll(): Promise<App[]>;
  findById(id: codApp): Promise<App>;
  updateCost({ codApp, cost }: UpdateCostParameters): Promise<App>;
}
