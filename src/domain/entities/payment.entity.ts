export class Payment {
  constructor(
    public codigo: number,
    public codAssinatura: number,
    public valorPago: number,
    public dataPagamento: Date,
  ) {}
}
