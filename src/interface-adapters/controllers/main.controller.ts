import {
  Body,
  Controller,
  Dependencies,
  Get,
  Patch,
  Post,
} from '@nestjs/common';

import { GetClientsList_US } from 'src/application[casos-de-uso]/get-client-list.use-case';
import { GetAppList_US } from 'src/application[casos-de-uso]/get-app-list.use-case';
import { CreateSubscription_US } from 'src/application[casos-de-uso]/create-subscription.use-case';

import { Client } from 'src/domain/entities/client.entity';
import { App } from 'src/domain/entities/app.entity';
import { SubscriptionDto } from '../dto/subscription.dto';

@Controller('servcad')
@Dependencies(GetClientsList_US, GetAppList_US, CreateSubscription_US)
export class RegisterController {
  constructor(
    private readonly getClientsList_US: GetClientsList_US,
    private readonly getAppList_US: GetAppList_US,
    private readonly createSubscriotion_US: CreateSubscription_US,
  ) {}

  @Get('clientes')
  async listClients(): Promise<Client[]> {
    return await this.getClientsList_US.execute();
  }

  @Get('aplicativos')
  async listApps(): Promise<App[]> {
    return await this.getAppList_US.execute();
  }

  @Post('assinaturas')
  async createSubscription(@Body() body: SubscriptionDto) {
    return await this.createSubscriotion_US.execute(body);
  }

  @Patch('aplicativos/:idAplicativo')
  updateCostApp(): string {
    return '';
  }

  @Get('assinaturas/{tipo}')
  listSubscriptions(): string {
    return '';
  }

  @Get('asscli/:codcli')
  listSubscriptionByUser(): string {
    return '';
  }

  @Get('assapp/:codapp')
  listSubscriptionByApp(): string {
    return '';
  }
}

@Controller('registrarpagamento')
export class PaymentController {
  @Post()
  register(): string {
    return '';
  }
}

@Controller('assinvalidas')
export class SubscriptionController {
  @Get()
  listClients(): string {
    return '';
  }
}
