import { Controller, Get } from '@nestjs/common';

@Controller('assinvalidas')
export class SubscriptionController {
  @Get()
  listClients(): string {
    return '';
  }
}
