import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  AppRepository,
  UpdateCostParameters,
} from '../repositories/app.repository';

@Injectable()
export class AppService {
  constructor(
    @Inject('AppRepository')
    private readonly appRepository: AppRepository,
  ) {}

  async updateCostApp({ codApp, cost }: UpdateCostParameters) {
    const aplicativo = await this.appRepository.findById(codApp);
    if (!aplicativo)
      throw new NotFoundException(
        'Aplicativo não encontrado! É necessário que o aplicativo exista',
      );

    return this.appRepository.updateCost({ codApp, cost });
  }
}
