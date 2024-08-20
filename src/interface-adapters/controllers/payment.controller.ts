import { Controller, Post } from '@nestjs/common';

@Controller('registrarpagamento')
export class PaymentController {
  @Post()
  register(): string {
    return '';
  }
}
