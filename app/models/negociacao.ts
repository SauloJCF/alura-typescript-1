export class Negociacao {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): Number {
    return this.quantidade * this.valor;
  }
}
