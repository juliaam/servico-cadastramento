export class Subscription {
  constructor(
    public codigo: number,
    public codApp: number,
    public codCli: number,
    public inicioVigencia: Date,
    public fimVigencia: Date,
  ) {}
}
