import { Payment } from '../entities/payment.entity';

export abstract class PaymentRepository {
  abstract findByCodAssinatura(codAssinatura): Promise<Payment>;
}
