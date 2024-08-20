import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('servcad')
export class RegisterController {
  @Get('clientes')
  listClients(): string {
    return '';
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
