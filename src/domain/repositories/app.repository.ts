import { App } from '../entities/app.entity';

export type codApp = App['codigo'];
export type UpdateCostParameters = {
  codApp: codApp;
  cost: number;
};
export abstract class AppRepository {
  abstract findAll(): Promise<App[]>;
  abstract findById(id: codApp): Promise<App>;
  abstract updateCost({ codApp, cost }: UpdateCostParameters): Promise<App>;
}
