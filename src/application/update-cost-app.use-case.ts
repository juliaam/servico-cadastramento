import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { App } from 'src/domain/entities/app.entity';
import {
  AppRepository,
  UpdateCostParameters,
} from 'src/domain/repositories/app.repository';

@Injectable()
export class UpdateCostApp_US {
  constructor(private readonly appRepository: AppRepository) {}

  async execute({ codApp, cost }: UpdateCostParameters): Promise<App> {
    const aplicativo = await this.appRepository.findById(codApp);
    if (!aplicativo)
      throw new NotFoundException(
        'Aplicativo não encontrado! É necessário que o aplicativo exista',
      );

    return await this.appRepository.updateCost({ codApp, cost });
  }
}
