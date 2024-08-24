import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { GetClientsList_US } from 'src/application/list-clients.use-case';
import { GetAppList_US } from 'src/application/list-apps.use-case';
import { CreateSubscription_US } from 'src/application/create-subscription.use-case';

import { Client } from 'src/domain/entities/client.entity';
import { App } from 'src/domain/entities/app.entity';
import { SubscriptionDto } from '../dto/subscription.dto';
import { AppDto } from '../dto/app.dto';
import { UpdateCostApp_US } from 'src/application/update-cost-app.use-case';
import { GetSubscriptionList_US } from 'src/application/list-subscriptions.use-case';
import { Subscription } from 'src/domain/entities/subscription.entity';
import { GetSubscriptionListByClient_US } from 'src/application/get-subscriptions-by-user.use-case';
import { GetSubscriptionListByApp_US } from 'src/application/get-subscription-by-app.use-case';

@Controller('servcad')
export class RegisterController {
  constructor(
    private readonly getClientsList_US: GetClientsList_US,
    private readonly getAppList_US: GetAppList_US,
    private readonly createSubscriotion_US: CreateSubscription_US,
    private readonly updateCostApp_US: UpdateCostApp_US,
    private readonly subscriptionListByType_US: GetSubscriptionList_US,
    private readonly getSubscriptionListByClient_US: GetSubscriptionListByClient_US,
    private readonly getSubscriptionListByApp_US: GetSubscriptionListByApp_US,
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
  async updateCostApp(
    @Param('idAplicativo') codApp: string,
    @Body() body: AppDto,
  ): Promise<App> {
    return await this.updateCostApp_US.execute({
      codApp: +codApp,
      cost: body.custo,
    });
  }

  @Get('assinaturas/:tipo')
  async listSubscriptions(@Param('tipo') tipo): Promise<Subscription[]> {
    return await this.subscriptionListByType_US.execute({ tipo });
  }

  @Get('asscli/:codcli')
  async listSubscriptionByClient(
    @Param('codcli') codCli,
  ): Promise<Subscription[]> {
    return await this.getSubscriptionListByClient_US.execute(+codCli);
  }

  @Get('assapp/:codpp')
  async listSubscriptionByApp(@Param('codpp') codApp): Promise<Subscription[]> {
    return await this.getSubscriptionListByApp_US.execute(+codApp);
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
