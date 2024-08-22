import { Controller, Dependencies, Get, Patch, Post } from '@nestjs/common';
import { GetClientsList_US } from 'src/application[casos-de-uso]/get-client-list.use-case';

@Controller('servcad')
@Dependencies(GetClientsList_US)
export class RegisterController {
  constructor(private readonly getClientsList_US: GetClientsList_US) {}

  @Get('clientes')
  async listClients() {
    const clients = await this.getClientsList_US.execute();
    return clients;
  }

  @Get('aplicativos')
  listApps(): string {
    return '';
  }

  @Post('assinaturas')
  createSubscription(): string {
    return '';
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
