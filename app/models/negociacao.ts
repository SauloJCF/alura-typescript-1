export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): Number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const novaData = new Date(this._data.getTime());
    return novaData;
  }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const regex = /-/g;
    const data = new Date(dataString.replace(regex, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(data, quantidade, valor);
  }
}
