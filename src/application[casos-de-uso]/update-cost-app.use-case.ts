import { Inject, Injectable } from '@nestjs/common';
import { App } from 'src/domain/entities/app.entity';
import { UpdateCostParameters } from 'src/domain/repositories/app.repository';
import { AppService } from 'src/domain/services/app.service';

@Injectable()
export class UpdateCostApp_US {
  constructor(
    @Inject('AppService')
    private readonly appService: AppService,
  ) {}

  async execute({ codApp, cost }: UpdateCostParameters): Promise<App> {
    return await this.appService.updateCostApp({ codApp, cost });
  }
}
